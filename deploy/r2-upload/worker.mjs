// Only the private collector invokes this Worker. Public reads go directly to R2/CDN.
const MODELS = ['claude-opus-5', 'claude-sonnet-5', 'claude-fable-5-1', 'gpt-5.6-sol'];
const MAX_BYTES = 8 * 1024 * 1024;

async function bounded(stream) {
  const chunks = []; let size = 0;
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) { await reader.cancel(); throw Error('Snapshot too large'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return bytes;
}

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname !== '/snapshot' || request.method !== 'PUT') return new Response('Not found', { status: 404 });
    if (!env.UPLOAD_TOKEN || request.headers.get('Authorization') !== `Bearer ${env.UPLOAD_TOKEN}`) return new Response('Unauthorized', { status: 401 });
    if (!request.body) return new Response('Missing snapshot', { status: 400 });
    let compressed, snapshot;
    try {
      compressed = await bounded(request.body);
      const decoded = await bounded(new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip')));
      snapshot = JSON.parse(new TextDecoder().decode(decoded));
      const valid = s => s && s.schemaVersion === 2 && s.complete === true && Array.isArray(s.rows) && s.count === s.rows.length && Number.isFinite(Date.parse(s.capturedAt));
      if (!valid(snapshot) || MODELS.some(m => !valid(snapshot.modelSnapshots?.[m]))) throw Error('Incomplete snapshot');
      const age = Date.now() - Date.parse(snapshot.capturedAt);
      if (age < -60000 || age > 10 * 60000) throw Error('Snapshot is not fresh');
    } catch { return new Response('Invalid, incomplete, oversized or stale snapshot', { status: 400 }); }
    await env.SNAPSHOTS.put('latest.json.gz', compressed, {
      httpMetadata: { contentType: 'application/json; charset=utf-8', contentEncoding: 'gzip', cacheControl: 'public, max-age=60' },
      customMetadata: { capturedAt: snapshot.capturedAt }
    });
    return Response.json({ ok: true, capturedAt: snapshot.capturedAt, count: snapshot.count });
  }
};
