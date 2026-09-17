(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.RouterRank = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const defaults = { minMultiplier: .22, minSamples: 20, minSuccess: 95, ttftMetric: 'ttftAvg', weights: { price: 35, ttft: 35, cache: 25, cost: 5 } };
  const finite = v => typeof v === 'number' && Number.isFinite(v);
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  function applyStatus(snapshot, response) {
    if (!Array.isArray(response.data) || !Number.isFinite(Date.parse(response.capturedAt))) throw Error('官方状态响应格式无效');
    if (Date.parse(response.capturedAt) < Date.parse(snapshot.liveCapturedAt || snapshot.capturedAt)) return snapshot;
    const groups = new Map(response.data.map(g => [g.group_id, g]));
    return { ...snapshot, liveCapturedAt: response.capturedAt, rows: snapshot.rows.map(r => {
      const g = groups.get(r.id) || {};
      const byModel = new Map((g.models || []).map(m => [m.model, m]));
      const m = byModel.get('gpt-6-astra') || {};
      const windows = [...new Set((g.models || []).map(m => m.sample_window).filter(v => v != null))];
      return { ...r, modelStatus: m.status || 'unknown', modelRequests: m.request_count ?? 0, modelWindowHours: m.sample_window ?? null,
        success: m.success_rate ?? null, cache: m.cache_hit_rate ?? null,
        latestGroupSuccess: g.success_rate ?? null, latestGroupRequests: g.request_count ?? 0, latestGroupStatus: g.status || 'unknown', groupWindowHours: windows.length === 1 ? windows[0] : null,
        series: m.series || [], seriesWindowHours: m.series_window ?? null,
        modelStats: (r.models || [r.model]).map(name => { const s = byModel.get(name) || {}; return { model: name, status: s.status || 'unknown', success: s.success_rate ?? null, requests: s.request_count ?? 0, windowHours: s.sample_window ?? null, cache: s.cache_hit_rate ?? null }; }) };
    }) };
  }
  function paginate(rows, requestedPage = 1, requestedSize = 20) {
    const size = requestedSize === 'all' ? Math.max(1, rows.length) : Math.max(1, Math.floor(Number(requestedSize) || 20));
    const pages = Math.max(1, Math.ceil(rows.length / size));
    const page = clamp(Math.floor(Number(requestedPage) || 1), 1, pages);
    const start = (page - 1) * size;
    return { page, pages, size, total: rows.length, start, end: Math.min(start + size, rows.length), rows: rows.slice(start, start + size) };
  }
  function config(input = {}) {
    const c = { ...defaults, ...input, weights: { ...defaults.weights, ...input.weights } };
    for (const k of ['minMultiplier', 'minSamples', 'minSuccess']) if (!finite(c[k])) throw Error('筛选条件需要有效数字');
    c.minMultiplier = Math.max(.22, c.minMultiplier);
    c.minSamples = Math.max(1, Math.floor(c.minSamples));
    c.minSuccess = clamp(c.minSuccess, 0, 100);
    if (!['ttftAvg', 'ttftP50', 'ttftP95'].includes(c.ttftMetric)) throw Error('未知 TTFT 口径');
    c.freshnessProfile = input.freshnessProfile === 'scheduled' ? 'scheduled' : 'local';
    for (const k of Object.keys(defaults.weights)) if (!finite(c.weights[k]) || c.weights[k] < 0) throw Error('权重不能为负数');
    const total = Object.values(c.weights).reduce((a, b) => a + b, 0);
    if (total <= 0) throw Error('至少保留一项权重');
    c.weights = Object.fromEntries(Object.entries(c.weights).map(([k, v]) => [k, v / total]));
    if (c.weights.cost > .10000001) throw Error('历史实扣权重最多占 10%');
    return c;
  }
  function rank(snapshot, input = {}, now = Date.now()) {
    const c = config(input);
    const timestamp = Date.parse(snapshot.capturedAt);
    const liveTimestamp = Date.parse(snapshot.liveCapturedAt || snapshot.capturedAt);
    const marketMaxAge = c.freshnessProfile === 'scheduled' ? 1200000 : 600000;
    const liveMaxAge = c.freshnessProfile === 'scheduled' ? 1200000 : 180000;
    const liveStale = !Number.isFinite(liveTimestamp) || now - liveTimestamp > liveMaxAge || liveTimestamp - now > 60000;
    const stale = !Number.isFinite(timestamp) || now - timestamp > marketMaxAge || timestamp - now > 60000 || snapshot.complete !== true || liveStale;
    const matches = snapshot.rows.filter(r => r.source === 'Codex Pro' && r.model === 'gpt-6-astra' && finite(r.multiplier) && r.multiplier >= c.minMultiplier);
    const rows = matches.map(r => {
      const reasons = [];
      if (!r.verified || !['active', 'degraded'].includes(r.lifecycle)) reasons.push('未通过验证或不可用');
      if (r.observing) reasons.push('平台观察中');
      if (r.modelStatus === 'failed') reasons.push('gpt6 当前故障');
      if (!finite(r.modelRequests) || r.modelRequests < c.minSamples) reasons.push('gpt6 样本不足');
      if (!finite(r.success) || r.success < c.minSuccess) reasons.push('gpt6 成功率未达标');
      if (!finite(r[c.ttftMetric]) || r[c.ttftMetric] <= 0 || !finite(r.ttftSamples) || r.ttftSamples <= 0) reasons.push('缺少有效 TTFT');
      if (!finite(r.cache) || r.cache < 0 || r.cache > 100) reasons.push('缺少有效缓存统计');
      if (finite(r.maxConcurrency) && r.maxConcurrency > 0 && finite(r.currentConcurrency) && r.currentConcurrency >= r.maxConcurrency) reasons.push('并发已满');
      return { ...r, reasons, eligible: reasons.length === 0, latency: r[c.ttftMetric] };
    });
    // Reference minimum uses eligible channels only; missing / zero spend never earns a free-price bonus.
    const observed = rows.filter(r => r.eligible && finite(r.historicalCost) && r.historicalCost > 0).map(r => r.historicalCost);
    const costMin = observed.length ? Math.min(...observed) : null;
    for (const r of rows) {
      r.components = {
        price: 100 * clamp(.22 / r.multiplier, 0, 1),
        ttft: finite(r.latency) && r.latency > 0 ? 100 / (1 + r.latency / 10000) : 0,
        cache: finite(r.cache) ? clamp(r.cache, 0, 100) : 0,
        cost: costMin && finite(r.historicalCost) && r.historicalCost > 0 ? 100 * clamp(costMin / r.historicalCost, 0, 1) : 0
      };
      r.contributions = Object.fromEntries(Object.keys(c.weights).map(k => [k, c.weights[k] * r.components[k]]));
      r.score = Object.values(r.contributions).reduce((a, b) => a + b, 0);
    }
    rows.sort((a, b) => b.score - a.score || a.multiplier - b.multiplier || a.id.localeCompare(b.id));
    return { config: c, stale, liveStale, marketMaxAge, liveMaxAge, rows, eligible: rows.filter(r => r.eligible), excluded: rows.filter(r => !r.eligible) };
  }
  function plan(snapshot, input = {}, now = Date.now()) {
    const result = rank(snapshot, input, now);
    if (result.stale) throw Error(result.config.freshnessProfile === 'scheduled' ? '线上快照超过 20 分钟或不完整，请刷新或等待下次采集' : '行情超过 10 分钟、成功率超过 3 分钟或数据不完整，请先刷新');
    if (!result.eligible.length) throw Error('没有满足门槛的渠道');
    return { schemaVersion: 2, mode: 'recommendation_only', model: 'gpt-6-astra', source: 'Codex Pro', generatedAt: new Date(now).toISOString(), snapshotAt: snapshot.capturedAt, liveCapturedAt: snapshot.liveCapturedAt || snapshot.capturedAt, validUntil: new Date(Math.min(Date.parse(snapshot.capturedAt) + result.marketMaxAge, Date.parse(snapshot.liveCapturedAt || snapshot.capturedAt) + result.liveMaxAge)).toISOString(), scoring: result.config, channels: result.eligible.slice(0, 3).map((r, i) => ({ priority: i + 1, group_id: r.id, channel_id: r.channelId, name: r.name, multiplier: r.multiplier, score: +r.score.toFixed(3) })), policy: { sessionAffinity: true, maxAttempts: 2, failureCooldownSeconds: 60, retryOnlyBeforeFirstOutput: true }, limitations: ['TTFT is group-wide across all models, 24h', 'Success and cache are model-specific public statistics', 'No live proxy or account route-pool changes are performed', ...(result.config.freshnessProfile === 'scheduled' ? ['Scheduled static snapshot; collection may be delayed; verify live status before routing'] : [])] };
  }
  return { defaults, config, rank, plan, applyStatus, paginate };
});
