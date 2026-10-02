module.exports = async function handler(req, res) {
  if (!['GET', 'HEAD'].includes(req.method)) return res.status(405).end();
  try {
    const upstream = await fetch('https://route-radar.pages.dev/api/snapshot', {
      headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/json' },
      signal: AbortSignal.timeout(20000)
    });
    if (!upstream.ok) return res.status(502).send('Snapshot unavailable');
    const data = await upstream.json();
    if (data.complete !== true || data.schemaVersion !== 2) return res.status(502).send('Snapshot unavailable');
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=60');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    return res.status(200).json(data);
  } catch {
    return res.status(502).send('Snapshot unavailable');
  }
};
