(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const format = (v, digits = 1) => typeof v === 'number' && Number.isFinite(v) ? v.toFixed(digits) : '—';
  const keys = ['price', 'ttft', 'cache', 'cost'];
  const labels = { price: '价格', ttft: 'TTFT', cache: '缓存', cost: '历史实扣' };
  const presetWeights = { balanced: [35, 35, 25, 5], fast: [20, 55, 20, 5], cheap: [60, 20, 15, 5] };
  let snapshot = window.ROUTER_SNAPSHOT;
  let tab = 'all', selected = null, activePreset = 'balanced', lastResult = null, pendingRefresh = false;
  let page = 1, pageSize = 20, pageResult = null, pendingLive = false, refreshError = '', liveError = '';
  let lastLiveAttempt = 0, lastFullAttempt = 0;
  let weights = { price: 35, ttft: 35, cache: 25, cost: 5 };
  const online = /^https?:$/.test(location.protocol);
  const staticHosting = online && (window.ROUTER_RUNTIME?.mode === 'static' || !['127.0.0.1', 'localhost', '[::1]'].includes(location.hostname));
  const localServer = online && !staticHosting;
  const refreshLabel = staticHosting ? '检查新快照 ↻' : '刷新数据 ↻';
  const percent = v => typeof v === 'number' && Number.isFinite(v) ? format(v) + '%' : '—';
  const stamp = t => new Date(t).toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const windowLabel = h => h == null ? '窗口未标注' : `近 ${h}h`;
  const statusLabel = s => ({healthy:'正常',unstable:'波动',failed:'故障',unknown:'无样本'}[s] || '未知');
  function modelTags(r) { return `<div class="model-tags">${(r.models || [r.model]).map(m => `<span class="model-tag${m === 'gpt-6-astra' ? ' target-model' : ''}">${escape(m)}</span>`).join('')}</div>`; }

  function configuration() {
    for (const id of ['min-success', 'min-samples', 'min-multiplier']) if (!$(id).checkValidity() || $(id).value === '') throw Error('请检查入选门槛：最低倍率 0.22，样本数至少 1，成功率 0–100%');
    return { weights, minMultiplier: Number($('min-multiplier').value), minSamples: Number($('min-samples').value), minSuccess: Number($('min-success').value), ttftMetric: $('ttft-metric').value, freshnessProfile: staticHosting ? 'scheduled' : 'local' };
  }
  function note(message, error = false) {
    $('notice').textContent = message;
    $('notice').hidden = !message;
    $('notice').className = error ? 'error' : '';
  }
  function setWeights(values) {
    const integers = values.map(Math.floor);
    const order = values.map((v, i) => ({ i, fraction: v - integers[i] })).sort((a, b) => b.fraction - a.fraction);
    let remaining = 100 - integers.reduce((a, b) => a + b, 0);
    for (const entry of order) { if (remaining <= 0) break; integers[entry.i]++; remaining--; }
    keys.forEach((k, i) => { weights[k] = integers[i]; $('weight-' + k).value = integers[i]; $('out-' + k).textContent = integers[i] + '%'; });
  }
  function rebalance(changed, next) {
    // Cost has a hard percentage cap; distribute the remaining percentage over the other dimensions.
    if (changed === 'cost') {
      weights.cost = Math.max(0, Math.min(10, next));
      const total = weights.price + weights.ttft + weights.cache;
      for (const k of ['price', 'ttft', 'cache']) weights[k] = (total ? weights[k] / total : 1 / 3) * (100 - weights.cost);
    } else {
      const available = 100 - weights.cost;
      weights[changed] = Math.min(next, available);
      const rest = ['price', 'ttft', 'cache'].filter(k => k !== changed);
      const total = rest.reduce((a, k) => a + weights[k], 0);
      for (const k of rest) weights[k] = (total ? weights[k] / total : 1 / rest.length) * (available - weights[changed]);
    }
    setWeights(keys.map(k => weights[k]));
    activePreset = null;
    render();
  }
  function render() {
    if (!snapshot) { note('没有可用数据快照，请运行 collect.py 或启动本地服务后刷新。', true); return; }
    let result;
    try { result = RouterRank.rank(snapshot, configuration()); }
    catch (e) { lastResult = null; $('export').disabled = true; note(e.message, true); return; }
    lastResult = result;
    document.querySelectorAll('[data-preset]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.preset === activePreset)));
    const time = new Date(snapshot.capturedAt);
    $('updated').textContent = '行情 ' + stamp(time);
    $('live-updated').textContent = `${liveError ? '更新失败 · 保留 ' : result.liveStale ? '成功率已过期 · ' : '成功率 '}${stamp(snapshot.liveCapturedAt || snapshot.capturedAt)}`;
    $('live-updated').className = liveError || result.liveStale ? 'live-warning' : '';
    $('scope-count').textContent = `${snapshot.count} 条符合基础筛选`;
    if (refreshError || liveError) note([refreshError, liveError].filter(Boolean).join('；'), true);
    else if (result.stale) note(staticHosting ? '定时快照已超过 20 分钟。当前保留历史行情，请等待后台采集或检查新快照。' : '行情或成功率已过期，显示最近一次数据；刷新后可导出建议。');
    else if (!online) note('当前为离线快照。运行 启动.ps1 可刷新行情。');
    else if (!pendingRefresh) note('');
    $('export').disabled = result.stale || !result.eligible.length;
    $('refresh').disabled = !online || pendingRefresh || pendingLive;
    $('rec-state').textContent = result.stale ? '待刷新' : '满足门槛';
    $('rec-state').className = 'tag' + (result.stale || !result.eligible.length ? ' warning' : '');
    const top = result.eligible[0];
    if (top) {
      $('recommend-title').textContent = top.name;
      $('recommend-copy').textContent = `综合 ${format(top.score)} 分 · ${format(top.multiplier, 3).replace(/0+$/, '').replace(/\.$/, '')}× 倍率 · 首字 ${format(top.latency / 1000)}s · gpt6 缓存 ${format(top.cache)}%`;
      $('route-chain').innerHTML = result.eligible.slice(0, 3).map((r, i) => `${i ? '<span class="route-arrow" aria-hidden="true">→</span>' : ''}<div class="route-item"><span>${['首选', '备用 1', '备用 2'][i]}</span><b>${escape(r.channelId)} 号渠道</b></div>`).join('');
    } else {
      $('rec-state').textContent = '暂无入选';
      $('recommend-title').textContent = '当前没有满足门槛的渠道';
      $('recommend-copy').textContent = '全部渠道仍在榜单中，可以查看原因或调整推荐门槛。';
      $('route-chain').innerHTML = '';
    }
    $('tab-all').textContent = `全部 ${result.rows.length}`;
    $('tab-eligible').textContent = `可推荐 ${result.eligible.length}`;
    $('tab-excluded').textContent = `观察区 ${result.excluded.length}`;
    $('tab-all').setAttribute('aria-pressed', String(tab === 'all'));
    $('tab-eligible').setAttribute('aria-pressed', String(tab === 'eligible'));
    $('tab-excluded').setAttribute('aria-pressed', String(tab === 'excluded'));
    $('eligible-count').textContent = `${result.rows.length} 个渠道 · 总量不限`;
    $('board-description').textContent = tab === 'all' ? '全部按综合分排序 · 推荐门槛不隐藏渠道 · 点击渠道查看各模型状态' : tab === 'eligible' ? '已通过推荐门槛 · 按综合分排序' : '显示未通过推荐门槛的渠道及原因';
    $('live-caption').textContent = `CodeGo 官方状态 · ${result.liveStale || liveError ? '旧数据，待更新' : staticHosting ? '最近采集快照' : '最新返回'} · ${$('auto-refresh').checked && online ? (staticHosting ? '每 60 秒检查快照' : '60 秒自动刷新') : '自动刷新已关'}`;
    $('ttft-heading').textContent = { ttftAvg: '平均 TTFT', ttftP50: 'P50 TTFT', ttftP95: 'P95 TTFT' }[result.config.ttftMetric];
    const allShown = tab === 'all' ? result.rows : result[tab];
    pageResult = RouterRank.paginate(allShown, page, pageSize);
    page = pageResult.page;
    const shown = pageResult.rows;
    $('empty').hidden = shown.length > 0;
    $('empty').textContent = tab === 'eligible' ? '暂无渠道通过当前门槛。可查看观察区。' : '没有处于观察区的渠道。';
    $('rows').innerHTML = shown.map((r, i) => `<tr class="${r.id === selected ? 'selected' : ''}">
      <td><div class="channel-cell"><span class="rank-number ${pageResult.start + i < 3 ? 'top' : ''}">${String(pageResult.start + i + 1).padStart(2, '0')}</span><div><button class="channel-name" type="button" data-id="${escape(r.id)}">${escape(r.name)}</button><div class="channel-sub"><span class="route-status ${r.eligible ? 'ready' : 'observe'}">${r.eligible ? '可推荐' : '观察'}</span>${escape(r.eligible ? '已通过推荐门槛' : r.reasons.join(' / '))}</div></div></div></td>
      <td><span class="score-value">${format(r.score)}</span><div class="score-bar" aria-hidden="true">${keys.map(k => `<span class="${k}" style="width:${r.contributions[k]}%"></span>`).join('')}</div></td>
      <td>${escape(r.multiplier)}<span class="number-muted"> ×</span></td><td>${r.latency > 0 ? format(r.latency / 1000) + '<span class="number-muted"> s</span>' : '—'}</td><td>${format(r.cache)}${r.cache == null ? '' : '%'}</td>
      <td class="live-metrics"><div class="${r.success != null && r.success >= result.config.minSuccess ? 'success-good' : 'number-muted'}"><span>gpt6</span> ${percent(r.success)}</div><small>${windowLabel(r.modelWindowHours)} · ${escape(r.modelRequests ?? 0)} 次</small><div class="group-live"><span>全渠道</span> ${percent(r.latestGroupSuccess)}</div><small>${windowLabel(r.groupWindowHours)} · ${escape(r.latestGroupRequests ?? 0)} 次</small></td><td class="number-muted">${percent(r.groupSuccess)}<small class="metric-note">${escape(r.groupRequests ?? 0)} 次</small></td><td class="number-muted">${format(r.historicalCost, 3)}</td></tr><tr class="models-row ${r.id === selected ? 'selected' : ''}"><td colspan="8"><div class="supported-models"><span>支持模型 ${(r.models || [r.model]).length}</span>${modelTags(r)}</div></td></tr>`).join('');
    $('rows').querySelectorAll('[data-id]').forEach(b => b.addEventListener('click', () => { selected = b.dataset.id; render(); }));
    renderPagination();
    renderDetail();
  }
  function renderPagination() {
    const p = pageResult;
    $('page-summary').textContent = `共 ${p.total} 条 · ${p.total ? p.start + 1 : 0}–${p.end} 条 · 第 ${p.page}/${p.pages} 页`;
    $('first-page').disabled = $('prev-page').disabled = p.page <= 1;
    $('last-page').disabled = $('next-page').disabled = p.page >= p.pages;
    $('page-jump').max = p.pages; $('page-jump').value = p.page;
    const start = Math.max(1, Math.min(p.page - 2, p.pages - 4));
    const pages = Array.from({ length: Math.min(5, p.pages) }, (_, i) => start + i);
    $('page-numbers').innerHTML = pages.map(n => `<button class="page-number" type="button" data-page="${n}" aria-label="第 ${n} 页"${n === p.page ? ' aria-current="page"' : ''}>${n}</button>`).join('');
    $('page-numbers').querySelectorAll('[data-page]').forEach(b => b.addEventListener('click', () => changePage(Number(b.dataset.page))));
  }
  function changePage(next) { page = next; render(); }
  function renderDetail() {
    const r = lastResult.rows.find(r => r.id === selected);
    $('detail').hidden = !r;
    if (!r) return;
    $('detail').innerHTML = `<div class="detail-head"><div><h2>${escape(r.name)}</h2><p>${r.eligible ? '已通过门槛；排名仍受公开统计窗口影响。' : escape(r.reasons.join('；'))}</p></div><button id="copy-id" class="button" type="button">复制分组 ID</button></div>
      <div class="detail-grid"><div><label>gpt6 最新成功率 / ${windowLabel(r.modelWindowHours)}</label><b>${percent(r.success)} · ${escape(r.modelRequests)} 次</b></div><div><label>渠道整体最新成功率 / ${windowLabel(r.groupWindowHours)}</label><b>${percent(r.latestGroupSuccess)} · ${escape(r.latestGroupRequests ?? 0)} 次</b></div><div><label>渠道整体近 24h 成功率</label><b>${percent(r.groupSuccess)} · ${escape(r.groupRequests)} 次</b></div><div><label>gpt6 缓存命中 / 窗口未单独标注</label><b>${percent(r.cache)}</b></div><div><label>渠道平均 TTFT / 全模型近 24h</label><b>${r.ttftAvg > 0 ? format(r.ttftAvg / 1000) + ' s' : '—'} · ${escape(r.ttftSamples)} 条</b></div><div><label>渠道 P50 / P95 TTFT</label><b>${r.ttftP50 > 0 ? format(r.ttftP50 / 1000) : '—'} / ${r.ttftP95 > 0 ? format(r.ttftP95 / 1000) : '—'} s</b></div></div>
      <div class="breakdown">${keys.map(k => `<span><i class="swatch ${k}"></i>${labels[k]}贡献 ${format(r.contributions[k])} 分</span>`).join('')}</div>
      <h3 class="models-title">支持的模型 · ${escape((r.models || [r.model]).length)} 个</h3><p>官方状态采集于 ${stamp(snapshot.liveCapturedAt || snapshot.capturedAt)}${liveError || lastResult.liveStale ? ' · 数据待更新' : ''}</p>
      <div class="table-wrap model-status-table"><table><thead><tr><th>模型</th><th>当前状态</th><th>最新成功率</th><th>请求数</th><th>统计窗口</th><th>缓存命中率</th></tr></thead><tbody>${(r.modelStats || (r.models || [r.model]).map(model => ({model}))).map(m => `<tr><td>${escape(m.model)}</td><td>${statusLabel(m.status)}</td><td>${percent(m.success)}</td><td>${escape(m.requests ?? 0)}</td><td>${windowLabel(m.windowHours)}</td><td>${percent(m.cache)}</td></tr>`).join('')}</tbody></table></div><div class="group-id">${escape(r.id)}</div>`;
    $('copy-id').addEventListener('click', async () => { try { await navigator.clipboard.writeText(r.id); $('copy-id').textContent = '已复制'; } catch { note('复制失败，可在详情底部手动选择分组 ID。', true); } });
  }
  keys.forEach(k => $('weight-' + k).addEventListener('input', e => rebalance(k, Number(e.target.value))));
  for (const id of ['min-success', 'min-samples', 'min-multiplier', 'ttft-metric']) $(id).addEventListener('change', render);
  document.querySelectorAll('[data-preset]').forEach(b => b.addEventListener('click', () => { activePreset = b.dataset.preset; setWeights(presetWeights[activePreset]); render(); }));
  $('reset').addEventListener('click', () => { activePreset = 'balanced'; setWeights(presetWeights.balanced); $('min-success').value = 95; $('min-samples').value = 20; $('min-multiplier').value = .22; $('ttft-metric').value = 'ttftAvg'; render(); });
  for (const name of ['all', 'eligible', 'excluded']) $('tab-' + name).addEventListener('click', () => { tab = name; page = 1; render(); });
  $('page-size').addEventListener('change', e => { pageSize = e.target.value; page = 1; render(); });
  $('first-page').addEventListener('click', () => changePage(1));
  $('prev-page').addEventListener('click', () => changePage(page - 1));
  $('next-page').addEventListener('click', () => changePage(page + 1));
  $('last-page').addEventListener('click', () => changePage(pageResult.pages));
  $('go-page').addEventListener('click', () => changePage(Number($('page-jump').value)));
  $('page-jump').addEventListener('keydown', e => { if (e.key === 'Enter') changePage(Number(e.target.value)); });
  async function refreshAll() {
    if (staticHosting) return refreshStatic();
    if (!localServer || pendingRefresh || pendingLive) return;
    lastFullAttempt = Date.now(); refreshError = '';
    pendingRefresh = true; $('refresh').textContent = '正在刷新…'; $('refresh').disabled = true; note('正在读取公开接口与全部分页…');
    try {
      const response = await fetch('/api/refresh', { method: 'POST', signal: AbortSignal.timeout(70000) });
      const data = await response.json();
      if (!response.ok) throw Error(data.error || '刷新失败');
      snapshot = data; liveError = ''; lastLiveAttempt = Date.now();
    } catch (e) { refreshError = e.message + '；行情保留原快照'; }
    finally { pendingRefresh = false; $('refresh').textContent = refreshLabel; render(); }
  }
  async function refreshLive() {
    if (staticHosting) return refreshStatic();
    if (!localServer || pendingLive || pendingRefresh) return;
    pendingLive = true; lastLiveAttempt = Date.now(); $('live-updated').textContent = '正在读取官方最新成功率…';
    try {
      const response = await fetch('/api/live-status', { cache: 'no-store', signal: AbortSignal.timeout(35000) });
      const data = await response.json();
      if (!response.ok) throw Error(data.error || '状态刷新失败');
      snapshot = RouterRank.applyStatus(snapshot, data); liveError = '';
    } catch (e) { liveError = e.message + '；成功率保留旧值'; }
    finally { pendingLive = false; render(); }
  }
  async function refreshStatic() {
    if (!staticHosting || pendingLive || pendingRefresh) return;
    pendingRefresh = true; lastLiveAttempt = Date.now(); refreshError = '';
    $('refresh').textContent = '正在检查…'; $('refresh').disabled = true;
    try {
      const url = new URL('snapshot.json', location.href);
      url.searchParams.set('t', String(Date.now()));
      const response = await fetch(url.href, { cache: 'no-store', signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw Error('快照读取失败（' + response.status + '）');
      const data = await response.json();
      if (data.schemaVersion !== 2 || data.complete !== true || !Array.isArray(data.rows) || !Number.isFinite(Date.parse(data.capturedAt))) throw Error('快照格式无效');
      if (!snapshot || Date.parse(data.capturedAt) >= Date.parse(snapshot.capturedAt)) snapshot = data;
      liveError = '';
    } catch (e) { refreshError = e.message + '；保留上一份数据'; }
    finally { pendingRefresh = false; $('refresh').textContent = refreshLabel; render(); }
  }
  $('refresh').addEventListener('click', refreshAll);
  $('auto-refresh').addEventListener('change', () => { render(); if ($('auto-refresh').checked) refreshLive(); });
  function tick() {
    if (document.hidden || !online || !$('auto-refresh').checked || pendingRefresh || pendingLive) return;
    const now = Date.now();
    if (staticHosting) { if (now - lastLiveAttempt >= 60000) refreshStatic(); return; }
    if (now - Date.parse(snapshot.capturedAt) >= 300000 && now - lastFullAttempt >= 300000) refreshAll();
    else if (now - lastLiveAttempt >= 60000) refreshLive();
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });
  $('export').addEventListener('click', () => {
    try {
      const plan = RouterRank.plan(snapshot, configuration());
      const link = document.createElement('a');
      link.href = URL.createObjectURL(new Blob([JSON.stringify(plan, null, 2)], { type: 'application/json' }));
      link.download = 'gpt6-route-plan.json'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    } catch (e) { note(e.message, true); }
  });
  if (staticHosting) {
    $('hosting-note').hidden = false;
    $('auto-refresh-label').textContent = '每 60 秒检查新快照';
    $('refresh').textContent = refreshLabel;
    $('footer-mode').textContent = '开源排行榜 · GitHub Pages · 定时采集';
    $('refresh-method').textContent = '线上数据由 GitHub Actions 计划每 5 分钟读取官方接口并发布；调度可能延迟。网页每 60 秒检查同站 snapshot.json，手动检查不会触发后台采集。所有时间均保留实际采集时间，失败时继续展示旧数据。';
    $('freshness-method').textContent = '调度建议为定时快照草案，不执行请求代理。线上快照超过 20 分钟禁用导出；切换渠道前应确认实时状态。本地版保持行情 10 分钟、成功率 3 分钟的过期门槛。';
  }
  render();
  if (online) { if (staticHosting) refreshStatic(); else if (snapshot) { if (snapshot.schemaVersion !== 2 || Date.now() - Date.parse(snapshot.capturedAt) >= 300000) refreshAll(); else refreshLive(); } }
  setInterval(() => { if (snapshot) { if (lastResult && !lastResult.stale && (Date.now() - Date.parse(snapshot.capturedAt) > lastResult.marketMaxAge || Date.now() - Date.parse(snapshot.liveCapturedAt || snapshot.capturedAt) > lastResult.liveMaxAge)) render(); tick(); } }, 15000);
})();
