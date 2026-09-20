// Only /api/snapshot invokes this function; all page assets bypass Functions.
export default {
  async fetch(request, env, context) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/snapshot') return env.ASSETS.fetch(request);
    if (!['GET', 'HEAD'].includes(request.method)) return new Response('Method not allowed', { status: 405 });
    // Ignore arbitrary query strings so they cannot force extra R2 reads.
    const key = new Request(url.origin + '/api/snapshot');
    const cache = caches.default;
    let response = await cache.match(key);
    if (!response) {
      const object = await env.SNAPSHOTS.get('latest.json.gz');
      if (!object) return new Response('Snapshot unavailable', { status: 503, headers: { 'Cache-Control': 'no-store' } });
      response = new Response(object.body.pipeThrough(new DecompressionStream('gzip')), {
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=60', 'X-Content-Type-Options': 'nosniff' }
      });
      context.waitUntil(cache.put(key, response.clone()));
    }
    return request.method === 'HEAD' ? new Response(null, { headers: response.headers }) : response;
  }
};
