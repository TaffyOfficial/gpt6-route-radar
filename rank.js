(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.RouterRank = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const models = [
    { id: 'gpt-6-astra', label: 'GPT6 Astra', source: 'Codex Pro' },
    { id: 'claude-opus-5', label: 'Opus 5', source: null },
    { id: 'claude-sonnet-5', label: 'Sonnet 5', source: null },
    { id: 'claude-fable-5-1', label: 'Fable 5.1', source: null },
    { id: 'gpt-5.6-sol', label: 'GPT5.6 Sol', source: 'Codex Pro' }
  ];
  function modelInfo(id) { return models.find(m => m.id === id); }
  function selectSnapshot(snapshot, model = defaults.model) {
    if (!snapshot) return null;
    if ((snapshot.model || defaults.model) === model) return snapshot;
    return snapshot.modelSnapshots?.[model] || { ...snapshot, model, source: modelInfo(model)?.source, rows: [], lookupRows: [], count: 0, complete: false, modelSnapshots: undefined };
  }
  const defaults = { model: 'gpt-6-astra', minMultiplier: .20, minSamples: 20, minSuccess: 95, ttftMetric: 'ttftAvg', weights: { price: 20, ttft: 35, cache: 15, effective: 25, cost: 5 } };
  const finite = v => typeof v === 'number' && Number.isFinite(v);
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  function effectiveMultiplier(row) {
    return finite(row.multiplier) && row.multiplier > 0 && finite(row.cache) && row.cache > 0 && row.cache <= 100
      ? row.multiplier / (row.cache / 100) : null;
  }
  function applyStatus(snapshot, response) {
    if (!Array.isArray(response.data) || !Number.isFinite(Date.parse(response.capturedAt))) throw Error('官方状态响应格式无效');
    if (Date.parse(response.capturedAt) < Date.parse(snapshot.liveCapturedAt || snapshot.capturedAt)) return snapshot;
    const groups = new Map(response.data.map(g => [g.group_id, g]));
    const updateRow = r => {
      const g = groups.get(r.id) || {};
      const byModel = new Map((g.models || []).map(m => [m.model, m]));
      const m = byModel.get(r.model) || {};
      const windows = [...new Set((g.models || []).map(m => m.sample_window).filter(v => v != null))];
      return { ...r, modelStatus: m.status || 'unknown', modelRequests: m.request_count ?? 0, modelWindowHours: m.sample_window ?? null,
        success: m.success_rate ?? null, cache: m.cache_hit_rate ?? null,
        latestGroupSuccess: g.success_rate ?? null, latestGroupRequests: g.request_count ?? 0, latestGroupStatus: g.status || 'unknown', groupWindowHours: windows.length === 1 ? windows[0] : null,
        series: m.series || [], seriesWindowHours: m.series_window ?? null,
        modelStats: (r.models || [r.model]).map(name => { const s = byModel.get(name) || {}; return { model: name, status: s.status || 'unknown', success: s.success_rate ?? null, requests: s.request_count ?? 0, windowHours: s.sample_window ?? null, cache: s.cache_hit_rate ?? null }; }) };
    };
    return { ...snapshot, ...(snapshot.modelSnapshots ? { modelSnapshots: Object.fromEntries(Object.entries(snapshot.modelSnapshots).map(([model, data]) => [model, applyStatus(data, response)])) } : {}), liveCapturedAt: response.capturedAt, rows: snapshot.rows.map(updateRow), lookupRows: (snapshot.lookupRows || []).map(updateRow) };
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
    if (!modelInfo(c.model)) throw Error('未知模型');
    for (const k of ['minMultiplier', 'minSamples', 'minSuccess']) if (!finite(c[k])) throw Error('筛选条件需要有效数字');
    c.minMultiplier = Math.max(defaults.minMultiplier, c.minMultiplier);
    c.minSamples = Math.max(1, Math.floor(c.minSamples));
    c.minSuccess = clamp(c.minSuccess, 0, 100);
    if (!['ttftAvg', 'ttftP50', 'ttftP95'].includes(c.ttftMetric)) throw Error('未知 TTFT 口径');
    c.freshnessProfile = input.freshnessProfile === 'scheduled' ? 'scheduled' : 'local';
    c.blockedKeys = Array.isArray(input.blockedKeys) ? [...new Set(input.blockedKeys.filter(k => typeof k === 'string'))] : [];
    for (const k of Object.keys(defaults.weights)) if (!finite(c.weights[k]) || c.weights[k] < 0) throw Error('权重不能为负数');
    const total = Object.values(c.weights).reduce((a, b) => a + b, 0);
    if (total <= 0) throw Error('至少保留一项权重');
    c.weights = Object.fromEntries(Object.entries(c.weights).map(([k, v]) => [k, v / total]));
    if (c.weights.cost > .10000001) throw Error('历史实扣权重最多占 10%');
    return c;
  }
  function rank(snapshot, input = {}, now = Date.now()) {
    const c = config(input);
    snapshot = selectSnapshot(snapshot, c.model);
    const target = modelInfo(c.model);
    const timestamp = Date.parse(snapshot.capturedAt);
    const liveTimestamp = Date.parse(snapshot.liveCapturedAt || snapshot.capturedAt);
    const marketMaxAge = c.freshnessProfile === 'scheduled' ? 1200000 : 600000;
    const liveMaxAge = c.freshnessProfile === 'scheduled' ? 1200000 : 180000;
    const liveStale = !Number.isFinite(liveTimestamp) || now - liveTimestamp > liveMaxAge || liveTimestamp - now > 60000;
    const stale = !Number.isFinite(timestamp) || now - timestamp > marketMaxAge || timestamp - now > 60000 || snapshot.complete !== true || liveStale;
    const blockedKeys = new Set(c.blockedKeys);
    const inScope = snapshot.rows.filter(r => (!target.source || r.source === target.source) && r.model === c.model && finite(r.multiplier) && r.multiplier >= c.minMultiplier);
    const isBlocked = r => blockedKeys.has('group:' + r.id) || (r.channelId != null && blockedKeys.has('channel:' + String(r.channelId)));
    const blocked = inScope.filter(isBlocked);
    const matches = inScope.filter(r => !isBlocked(r));
    const rows = matches.map(r => {
      const reasons = [];
      if (!r.verified || !['active', 'degraded'].includes(r.lifecycle)) reasons.push('未通过验证或不可用');
      if (r.observing) reasons.push('平台观察中');
      if (r.modelStatus === 'failed') reasons.push('当前模型故障');
      if (!finite(r.modelRequests) || r.modelRequests < c.minSamples) reasons.push('当前模型样本不足');
      if (!finite(r.success) || r.success < c.minSuccess) reasons.push('当前模型成功率未达标');
      if (!finite(r[c.ttftMetric]) || r[c.ttftMetric] <= 0 || !finite(r.ttftSamples) || r.ttftSamples <= 0) reasons.push('缺少有效 TTFT');
      if (!finite(r.cache) || r.cache < 0 || r.cache > 100) reasons.push('缺少有效缓存统计');
      if (finite(r.maxConcurrency) && r.maxConcurrency > 0 && finite(r.currentConcurrency) && r.currentConcurrency >= r.maxConcurrency) reasons.push('并发已满');
      return { ...r, reasons, eligible: reasons.length === 0, latency: r[c.ttftMetric], effectiveMultiplier: effectiveMultiplier(r) };
    });
    // Reference minimum uses eligible channels only; missing / zero spend never earns a free-price bonus.
    const observed = rows.filter(r => r.eligible && finite(r.historicalCost) && r.historicalCost > 0).map(r => r.historicalCost);
    const costMin = observed.length ? Math.min(...observed) : null;
    for (const r of rows) {
      r.components = {
        price: 100 * clamp(defaults.minMultiplier / r.multiplier, 0, 1),
        effective: r.effectiveMultiplier != null ? 100 * clamp(defaults.minMultiplier / r.effectiveMultiplier, 0, 1) : 0,
        ttft: finite(r.latency) && r.latency > 0 ? 100 / (1 + r.latency / 10000) : 0,
        cache: finite(r.cache) ? clamp(r.cache, 0, 100) : 0,
        cost: costMin && finite(r.historicalCost) && r.historicalCost > 0 ? 100 * clamp(costMin / r.historicalCost, 0, 1) : 0
      };
      r.contributions = Object.fromEntries(Object.keys(c.weights).map(k => [k, c.weights[k] * r.components[k]]));
      r.baseScore = clamp(Object.values(r.contributions).reduce((a, b) => a + b, 0), 0, 100);
      // Fixed bands keep every recommendation above observation rows, independent of other channels.
      const scoreScale = r.eligible ? .5 : .49;
      const gateScore = r.eligible ? 50 : 0;
      r.score = gateScore + r.baseScore * scoreScale;
      r.scoreContributions = { gate: gateScore, ...Object.fromEntries(Object.entries(r.contributions).map(([k, v]) => [k, v * scoreScale])) };
    }
    rows.sort((a, b) => b.score - a.score || a.multiplier - b.multiplier || a.id.localeCompare(b.id));
    rows.forEach((r, i) => { r.overallRank = i + 1; });
    return { config: c, stale, liveStale, marketMaxAge, liveMaxAge, rows, blocked, eligible: rows.filter(r => r.eligible), excluded: rows.filter(r => !r.eligible) };
  }
  function matchesQuery(row, query) {
    const q = String(query || '').trim().toLowerCase();
    if (!q) return true;
    if (/^\d+$/.test(q)) return String(row.channelId) === q;
    return [row.name, row.id, row.channelId].some(value => String(value ?? '').toLowerCase().includes(q));
  }
  function search(snapshot, result, query) {
    snapshot = selectSnapshot(snapshot, result.config.model);
    const target = modelInfo(result.config.model);
    const rows = result.rows.filter(r => matchesQuery(r, query));
    if (!String(query || '').trim()) return { rows, outside: [] };
    const ranked = new Set(result.rows.map(r => r.id));
    const blocked = new Set(result.config.blockedKeys);
    const candidates = new Map([...(snapshot.rows || []), ...(snapshot.lookupRows || [])].map(r => [r.id, r]));
    const outside = [...candidates.values()].filter(r => !ranked.has(r.id) && matchesQuery(r, query)).map(r => {
      const reasons = [];
      const blockKey = blocked.has('channel:' + r.channelId) ? 'channel:' + r.channelId : blocked.has('group:' + r.id) ? 'group:' + r.id : null;
      if (blockKey) reasons.push('已被你拉黑');
      if (!finite(r.multiplier)) reasons.push('缺少倍率');
      else if (r.multiplier < result.config.minMultiplier) reasons.push(`倍率 ${r.multiplier}×，低于最低倍率 ${result.config.minMultiplier}×`);
      if (target.source && r.source !== target.source) reasons.push(`不是 ${target.source} 渠道`);
      if (r.model !== target.id) reasons.push(`未列出 ${target.id}`);
      return { ...r, effectiveMultiplier: effectiveMultiplier(r), overallRank: null, blockKey, reasons };
    });
    return { rows, outside };
  }
  function plan(snapshot, input = {}, now = Date.now()) {
    const result = rank(snapshot, input, now);
    snapshot = selectSnapshot(snapshot, result.config.model);
    if (result.stale) throw Error(result.config.freshnessProfile === 'scheduled' ? '线上快照超过 20 分钟或不完整，请刷新或等待下次采集' : '行情超过 10 分钟、成功率超过 3 分钟或数据不完整，请先刷新');
    if (!result.eligible.length) throw Error('没有满足门槛的渠道');
    return { schemaVersion: 2, mode: 'recommendation_only', model: result.config.model, source: modelInfo(result.config.model).source, generatedAt: new Date(now).toISOString(), snapshotAt: snapshot.capturedAt, liveCapturedAt: snapshot.liveCapturedAt || snapshot.capturedAt, validUntil: new Date(Math.min(Date.parse(snapshot.capturedAt) + result.marketMaxAge, Date.parse(snapshot.liveCapturedAt || snapshot.capturedAt) + result.liveMaxAge)).toISOString(), scoring: { ...result.config, method: 'eligibility_bands_v1', eligibleBand: [50, 100], observationBand: [0, 49] }, channels: result.eligible.slice(0, 3).map((r, i) => ({ priority: i + 1, group_id: r.id, channel_id: r.channelId, source: r.source, name: r.name, multiplier: r.multiplier, cacheHitRate: r.cache, effectiveMultiplier: r.effectiveMultiplier, score: +r.score.toFixed(3), baseScore: +r.baseScore.toFixed(3) })), policy: { sessionAffinity: true, maxAttempts: 2, failureCooldownSeconds: 60, retryOnlyBeforeFirstOutput: true }, limitations: ['TTFT is group-wide across all models, 24h', 'Success and cache are model-specific public statistics', 'No live proxy or account route-pool changes are performed', ...(result.config.freshnessProfile === 'scheduled' ? ['Scheduled static snapshot; collection may be delayed; verify live status before routing'] : [])] };
  }
  return { effectiveMultiplier, models, modelInfo, selectSnapshot, defaults, config, rank, plan, applyStatus, paginate, matchesQuery, search };
});
