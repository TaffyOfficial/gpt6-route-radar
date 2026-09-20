'use strict';
const assert = require('node:assert/strict');
const { rank, plan, paginate, sortRows, applyStatus, search } = require('./rank.js');
const now = Date.UTC(2026, 8, 17, 10);
const make = changes => ({ id: 'a', channelId: '1', source: 'Codex Pro', model: 'gpt-6-astra', multiplier: .20, name: 'test', verified: true, lifecycle: 'active', observing: false, modelStatus: 'healthy', modelRequests: 100, success: 99, cache: 85, ttftAvg: 10000, ttftP50: 8000, ttftP95: 20000, ttftSamples: 100, historicalCost: 1, ...changes });
const snap = rows => ({ rows, capturedAt: new Date(now).toISOString(), complete: true });
let tests = 0;
function test(name, fn) { fn(); tests++; console.log('PASS', name); }
test('exact source/model with low public quotes included', () => {
  const r = rank(snap([make(), make({ id: 'b', multiplier: .199999 }), make({ id: 'c', source: 'Codex Plus' }), make({ id: 'd', model: 'gpt-5.6-sol' })]), {minMultiplier: .1}, now);
  assert.deepEqual(r.rows.map(r => r.id), ['b', 'a']);
});
test('zero/missing latency and missing cache never rank as free/fast', () => {
  for (const change of [{ ttftAvg: 0 }, { ttftAvg: null }, { ttftSamples: 0 }, { cache: null }]) assert.equal(rank(snap([make(change)]), {}, now).eligible.length, 0);
});
test('zero measured cache is valid, not missing', () => assert.equal(rank(snap([make({ cache: 0 })]), {}, now).eligible.length, 1));
test('current model failure and full capacity remain gated while platform observes', () => {
  for (const change of [{ modelStatus: 'failed' }, { verified: false }, { lifecycle: 'disabled' }, { maxConcurrency: 3, currentConcurrency: 3 }]) assert.equal(rank(snap([make({ observing: true, ...change })]), {}, now).eligible.length, 0);
});
test('platform observation alone changes neither eligibility, score, ranking nor route selection', () => {
  const s = snap([make({ id: '550', channelId: '550', multiplier: .2888, cache: 91.62, ttftAvg: 22272, success: 95.652, modelRequests: 23 }), make({ id: 'other', multiplier: .7, ttftAvg: 30000 })]);
  const observing = { ...s, rows: s.rows.map(r => ({ ...r, observing: true })) };
  const input = { priceOverrides: [{ key: 'channel:550', multiplier: .25 }] };
  const before = rank(s, input, now), after = rank(observing, input, now);
  assert.deepEqual(after.rows.map(r => [r.id, r.overallRank, r.score, r.eligible, r.reasons]), before.rows.map(r => [r.id, r.overallRank, r.score, r.eligible, r.reasons]));
  assert.equal(after.rows[0].observing, true);
  assert.equal(after.rows[0].multiplier, .25);
  assert.ok(after.rows[0].score >= 50);
  assert.ok(after.rows[0].score > rank(observing, {}, now).rows.find(r => r.id === '550').score);
  assert.deepEqual(plan(observing, input, now).channels, plan(s, input, now).channels);
  assert.equal(plan(observing, input, now).channels[0].channel_id, '550');
});
test('lower price and lower latency improve their scores', () => {
  const r = rank(snap([make(), make({ id: 'b', multiplier: .40, ttftAvg: 20000 })]), {}, now);
  assert.equal(r.eligible[0].id, 'a');
  assert.equal(r.eligible[0].components.price, 100);
  assert.equal(r.eligible[1].components.price, 50);
});
test('unknown historical spend earns zero, not cheapest score', () => assert.equal(rank(snap([make({ historicalCost: null })]), {}, now).eligible[0].components.cost, 0));
test('failed channel historical spend does not alter healthy ranking', () => {
  const a = rank(snap([make()]), {}, now).eligible[0].score;
  const b = rank(snap([make(), make({ id: 'b', modelStatus: 'failed', historicalCost: .0001 })]), {}, now).eligible[0].score;
  assert.equal(a, b);
});
test('historical spend capped at normalized 10%', () => assert.throws(() => rank(snap([make()]), { weights: { price: 1, ttft: 1, cache: 1, cost: 10 } }, now), /10%/));
test('invalid zero total is rejected', () => assert.throws(() => rank(snap([make()]), { weights: { price: 0, ttft: 0, cache: 0, effective: 0, cost: 0 } }, now), /至少/));
test('stale, future, invalid and partial snapshots cannot export routes', () => {
  for (const changes of [{ capturedAt: new Date(now - 600001).toISOString() }, { capturedAt: 'invalid' }, { capturedAt: new Date(now + 120000).toISOString() }, { complete: false }]) assert.throws(() => plan({ ...snap([make()]), ...changes }, {}, now), /刷新/);
});
test('empty selection fails closed', () => assert.throws(() => plan(snap([make({ modelStatus: 'failed' })]), {}, now), /没有/));
test('route plan has only eligible channels with real IDs and expiry', () => {
  const p = plan(snap([make(), make({ id: 'b', modelStatus: 'failed' })]), {}, now);
  assert.equal(p.channels.length, 1); assert.equal(p.channels[0].group_id, 'a'); assert.equal(Date.parse(p.validUntil), now + 180000);
});
test('all-channel ranking retains low success and low sample channels with scores', () => {
  const r = rank(snap([make(), make({ id: 'b', success: 2 }), make({ id: 'c', modelRequests: 0 })]), {}, now);
  assert.equal(r.rows.length, 3); assert.equal(r.eligible.length, 3);
  assert.ok(r.rows.every(row => Number.isFinite(row.score)));
});
test('even the best observation score stays below the weakest eligible channel', () => {
  const changes = [{ modelStatus: 'failed' }, { verified: false }, { lifecycle: 'disabled' }, { maxConcurrency: 3, currentConcurrency: 3 }, { ttftAvg: 0 }, { cache: null }];
  const s = snap([make({ id: 'eligible', cache: 0 }), ...changes.map((change, i) => make({ id: 'excluded-' + i, cache: 100, ...change }))]);
  const r = rank(s, { weights: { price: 0, ttft: 0, cache: 100, effective: 0, cost: 0 } }, now);
  assert.equal(r.rows[0].id, 'eligible'); assert.equal(r.rows[0].score, 50);
  assert.ok(r.excluded.every(row => row.score >= 0 && row.score <= 49 && row.reasons.length > 0));
  assert.equal(r.excluded[0].baseScore, 100); assert.equal(r.excluded[0].score, 49);
  assert.equal(r.excluded.at(-1).score, 0);
});
test('fixed bands retain weighted base score, ordering and exact score-bar contributions', () => {
  const r = rank(snap([make(), make({ id: 'b', multiplier: .44, ttftAvg: 20000 }), make({ id: 'c', modelStatus: 'failed' })]), {}, now);
  assert.deepEqual(r.rows.map(row => row.id), ['a', 'b', 'c']);
  assert.equal(r.rows[0].baseScore, 73.5); assert.equal(r.rows[0].score, 86.75);
  assert.equal(r.rows[2].score, r.rows[2].baseScore * .49);
  for (const row of r.rows) assert.ok(Math.abs(Object.values(row.scoreContributions).reduce((a, b) => a + b, 0) - row.score) < 1e-10);
  const p = plan(snap([make()]), {}, now);
  assert.equal(p.scoring.method, 'eligibility_bands_v1');
  assert.equal(p.channels[0].baseScore, 73.5); assert.equal(p.channels[0].score, 86.75);
});
test('observation bands stay fixed when other channels or recommendation filters change', () => {
  const observation = make({ id: 'watch', modelStatus: 'failed', historicalCost: null });
  const alone = rank(snap([observation]), {}, now).rows[0];
  const together = rank(snap([observation, make({ id: 'slow', multiplier: 100, ttftAvg: 1e9, cache: 0, success: 96 })]), {}, now);
  const raised = rank(snap([observation, make({ id: 'slow', multiplier: 100, ttftAvg: 1e9, cache: 0, success: 96 })]), { minSuccess: 99 }, now);
  assert.equal(together.rows.find(row => row.id === 'watch').score, alone.score);
  assert.equal(raised.rows.find(row => row.id === 'watch').score, alone.score);
  assert.ok(raised.rows.find(row => row.id === 'slow').score < 50);
});
test('blank or zero thresholds allow zero or missing samples/success', () => {
  for (const change of [{success:0, modelRequests:0}, {success:null, modelRequests:null}, {success:94, modelRequests:1}]) {
    const s = snap([make(change)]);
    const result = rank(s, {minMultiplier:'', minSamples:0, minSuccess:''}, now);
    assert.equal(result.rows.length,1); assert.equal(result.eligible.length,1);
    assert.ok(result.rows[0].score >= 50);
    assert.equal(plan(s,{},now).channels.length,1);
  }
  const result=rank(snap([make({multiplier:null}),make({id:'zero',multiplier:0})]), {}, now);
  assert.equal(result.rows.length,2);
  assert.ok(result.rows.every(r=>Number.isFinite(r.score)));
  assert.equal(result.rows.find(r=>r.id==='a').components.price,0);
});
test('custom thresholds work below former limits and are never clamped', () => {
  const s = snap([make({id:'cheap',multiplier:.05,modelRequests:0,success:0}),make({id:'other',multiplier:.1,modelRequests:2,success:80})]);
  assert.equal(rank(s,{minMultiplier:.01,minSamples:0,minSuccess:0},now).eligible.length,2);
  assert.deepEqual(rank(s,{minMultiplier:.08},now).rows.map(r=>r.id),['other']);
  assert.deepEqual(rank(s,{minSamples:.5},now).eligible.map(r=>r.id),['other']);
  assert.deepEqual(rank(s,{minSuccess:50},now).eligible.map(r=>r.id),['other']);
  const beyond=rank(s,{minMultiplier:-1,minSamples:-2.5,minSuccess:101},now);
  assert.equal(beyond.config.minMultiplier,-1); assert.equal(beyond.config.minSamples,-2.5); assert.equal(beyond.config.minSuccess,101);
  assert.equal(beyond.eligible.length,0);
});
test('pagination visits every channel exactly once with continuous offsets', () => {
  const rows = Array.from({length:123}, (_,i) => ({id:i}));
  const collected = [];
  for (let page = 1; page <= 7; page++) { const p = paginate(rows,page,20); collected.push(...p.rows); assert.equal(p.start,(page-1)*20); }
  assert.deepEqual(collected, rows);
  assert.equal(paginate(rows,999,20).page, 7);
  assert.equal(paginate(rows,0,20).page, 1);
  assert.equal(paginate(rows,4,'all').rows.length,123);
  assert.equal(paginate([],3,20).page,1);
});
test('official status maps by ID and model, preserving all supported models and quote timestamp', () => {
  const source = snap([make({models:['gpt-6-astra','gpt-5.6-sol']})]);
  const updated = applyStatus(source,{capturedAt:new Date(now+1000).toISOString(),data:[{group_id:'a',success_rate:91,request_count:30,models:[{model:'gpt-6-astra',success_rate:50,request_count:20,sample_window:1,cache_hit_rate:0,status:'failed'},{model:'gpt-5.6-sol',success_rate:100,request_count:10,sample_window:1,status:'healthy'}]}]});
  assert.equal(updated.rows[0].success,50); assert.equal(updated.rows[0].latestGroupSuccess,91); assert.equal(updated.rows[0].cache,0);
  assert.equal(updated.rows[0].modelStats[1].success,100); assert.equal(updated.rows[0].groupWindowHours,1);
  assert.equal(updated.capturedAt,source.capturedAt); assert.equal(rank(updated,{},now+1000).eligible.length,0);
});
test('missing fresh model status clears previous success instead of carrying stale data', () => {
  const updated = applyStatus(snap([make()]),{capturedAt:new Date(now+1000).toISOString(),data:[]});
  assert.equal(updated.rows[0].success,null); assert.equal(updated.rows[0].latestGroupSuccess,null); assert.equal(updated.rows[0].modelRequests,0);
});
test('late older status responses cannot overwrite newer results', () => {
  const source = {...snap([make()]),liveCapturedAt:new Date(now+2000).toISOString()};
  assert.equal(applyStatus(source,{capturedAt:new Date(now+1000).toISOString(),data:[]}),source);
});
test('stale live success blocks route even when price snapshot is fresh', () => {
  assert.throws(()=>plan({...snap([make()]),liveCapturedAt:new Date(now-180001).toISOString()},{},now),/刷新/);
});
test('scheduled Pages snapshots expose a separate 20-minute freshness profile', () => {
  const s = {...snap([make()]), capturedAt:new Date(now-600000).toISOString()};
  assert.equal(rank(s,{freshnessProfile:'scheduled'},now).stale,false);
  assert.equal(rank(s,{},now).stale,true);
  const p = plan(s,{freshnessProfile:'scheduled'},now);
  assert.equal(p.scoring.freshnessProfile,'scheduled');
  assert.equal(Date.parse(p.validUntil),now+600000);
  assert.throws(()=>plan(s,{freshnessProfile:'scheduled'},now+600001),/刷新/);
});
test('search preserves full ranking and matches numeric IDs exactly across pages', () => {
  const s = snap(Array.from({length:45}, (_,i) => make({id:'g'+i,channelId:String(i+100),name:'Channel '+(i+100),multiplier:.22+i*.01})));
  s.rows.push(make({id:'lookalike',channelId:'1144',name:'Channel 1144',multiplier:1}));
  const r = rank(s,{},now), original = r.rows.find(x=>x.channelId==='144');
  const found = search(s,r,' 144 ');
  assert.equal(found.rows.length,1);assert.equal(found.rows[0].overallRank,original.overallRank);assert.ok(original.overallRank>20);
  assert.equal(search(s,r,'cHaNnEl').rows.length,46);
  assert.equal(search(s,r,'absent').rows.length,0);
  assert.equal(plan(s,{},now).channels.length,3);
});
test('old lookup-only low quotes join rankings and still respect blacklists', () => {
  const s = {...snap([make({channelId:'200'})]),lookupRows:[make({id:'low',channelId:'999',multiplier:.19,historicalCost:.00001})]};
  const r = rank(s,{},now), found=search(s,r,'999');
  assert.equal(found.rows.length,1); assert.equal(found.outside.length,0);
  assert.ok(found.rows[0].overallRank); assert.equal(plan(s,{},now).channels[0].channel_id,'999');
  const blocked=rank(s,{blockedKeys:['channel:200']},now);
  assert.equal(search(s,blocked,'200').outside[0].blockKey,'channel:200');
  assert.equal(search(s,blocked,'').outside.length,0);
  assert.equal(rank(s,{minMultiplier:.3},now).rows.length,0);
  s.lookupRows.push({...s.rows[0],multiplier:.01});
  const deduplicated=rank(s,{},now);
  assert.equal(deduplicated.rows.length,2);
  assert.equal(deduplicated.rows.find(row=>row.id==='a').publicMultiplier,.2);
});
test('lookup-only channels receive current model status too', () => {
  const s={...snap([]),lookupRows:[make({id:'low',channelId:'999',multiplier:.19})]};
  const updated=applyStatus(s,{capturedAt:new Date(now+1000).toISOString(),data:[{group_id:'low',models:[{model:'gpt-6-astra',success_rate:97,request_count:50,cache_hit_rate:80}]}]});
  assert.equal(updated.lookupRows[0].success,97);assert.equal(updated.rows.length,0);
});
test('model selection isolates rankings, search, blacklist and exported IDs', () => {
  const opus = 'claude-opus-5', sol = 'gpt-5.6-sol';
  const s = { ...snap([make({id:'gpt'})]), modelSnapshots: {
    [opus]: {...snap([make({id:'cc',model:opus,source:'CC-Max'})]),model:opus},
    [sol]: {...snap([make({id:'sol',model:sol}), make({id:'plus',model:sol,source:'Codex Plus'})]),model:sol}
  }};
  assert.deepEqual(rank(s,{model:opus},now).rows.map(r=>r.id),['cc']);
  assert.deepEqual(rank(s,{model:sol},now).rows.map(r=>r.id),['sol']);
  assert.equal(rank(s,{},now).rows[0].id,'gpt');
  const p = plan(s,{model:opus},now);
  assert.equal(p.model,opus); assert.equal(p.source,null); assert.equal(p.channels[0].source,'CC-Max');
  assert.equal(search(s,rank(s,{model:opus},now),'test').outside.length,0);
  assert.equal(rank(s,{model:opus,blockedKeys:['group:cc']},now).rows.length,0);
  assert.equal(rank(s,{model:'claude-sonnet-5'},now).rows.length,0);
  assert.throws(()=>plan(s,{model:'claude-sonnet-5'},now),/刷新/);
});
test('live refresh updates each model without borrowing another model metrics', () => {
  const opus='claude-opus-5', fable='claude-fable-5-1';
  const s={...snap([make()]),modelSnapshots:{
    [opus]:{...snap([make({model:opus,source:'CC-Max'})]),model:opus},
    [fable]:{...snap([make({model:fable,source:'CC-Max'})]),model:fable}
  }};
  const updated=applyStatus(s,{capturedAt:new Date(now+1000).toISOString(),data:[{group_id:'a',models:[
    {model:'gpt-6-astra',success_rate:99,request_count:200,cache_hit_rate:80},
    {model:opus,success_rate:40,request_count:30,cache_hit_rate:10,status:'failed'}
  ]}]});
  assert.equal(updated.rows[0].success,99);
  assert.equal(updated.modelSnapshots[opus].rows[0].success,40);
  assert.equal(updated.modelSnapshots[opus].rows[0].cache,10);
  assert.equal(updated.modelSnapshots[fable].rows[0].success,null);
  assert.equal(updated.modelSnapshots[fable].rows[0].modelRequests,0);
  assert.equal(rank(updated,{model:opus},now+1000).eligible.length,0);
});
test('cache-adjusted multiplier uses fractional hit rate and changes ranking with its weight', () => {
  const s = snap([make({id:'cheap-low-cache',multiplier:.2,cache:40}), make({id:'better',multiplier:.3,cache:90})]);
  const input = {weights:{price:0,ttft:0,cache:0,effective:100,cost:0}};
  const r = rank(s,input,now);
  assert.equal(r.rows[0].id,'better');
  assert.ok(Math.abs(r.rows[0].effectiveMultiplier-1/3)<1e-12);
  assert.equal(r.rows[1].effectiveMultiplier,.5);
  assert.equal(r.rows[1].components.effective,40);
  assert.equal(rank(s,{weights:{price:100,ttft:0,cache:0,effective:0,cost:0}},now).rows[0].id,'cheap-low-cache');
  assert.equal(rank(snap([make({cache:80})]),{},now).rows[0].effectiveMultiplier,.25);
  const p = plan(s,input,now);
  assert.equal(p.channels[0].effectiveMultiplier,r.rows[0].effectiveMultiplier);
  assert.equal(p.channels[0].cacheHitRate,90);
});
test('zero or invalid cache never gains adjusted-price points or nonfinite exports', () => {
  for (const cache of [0,null,-1,101,NaN]) {
    const r = rank(snap([make({cache})]),{},now).rows[0];
    assert.equal(r.effectiveMultiplier,null); assert.equal(r.components.effective,0);
    assert.ok(Number.isFinite(r.score));
  }
  const p = plan(snap([make({cache:0})]),{},now);
  assert.equal(JSON.parse(JSON.stringify(p)).channels[0].effectiveMultiplier,null);
});
test('live cache updates and model selection recalculate adjusted multipliers', () => {
  const model='claude-opus-5';
  const s={...snap([make({cache:80})]),modelSnapshots:{[model]:{...snap([make({model,source:'CC-Max',cache:40})]),model}}};
  assert.equal(rank(s,{model},now).rows[0].effectiveMultiplier,.5);
  const updated=applyStatus(s,{capturedAt:new Date(now+1000).toISOString(),data:[{group_id:'a',models:[{model,cache_hit_rate:50}]}]});
  assert.equal(rank(updated,{model},now+1000).rows[0].effectiveMultiplier,.4);
  assert.equal(rank(updated,{},now+1000).rows[0].effectiveMultiplier,null);
});
test('column sorting orders the full result before pagination without changing score ranks', () => {
  const result = rank(snap([make({id:'a',multiplier:.4}),make({id:'b',multiplier:.1}),make({id:'c',multiplier:.2})]),{},now);
  const original = result.rows.map(r=>[r.id,r.overallRank]);
  const sorted = sortRows(result.rows,'multiplier','asc');
  assert.deepEqual(sorted.map(r=>r.id),['b','c','a']);
  assert.equal(paginate(sorted,2,1).rows[0].id,'c');
  assert.deepEqual(sortRows(result.rows,'multiplier','desc').map(r=>r.id),['a','c','b']);
  assert.deepEqual(result.rows.map(r=>[r.id,r.overallRank]),original);
  assert.deepEqual(sortRows(result.rows,'score','desc'),result.rows);
});
test('missing column values stay last in either direction and equal values keep score order', () => {
  const rows = [{id:'missing',success:null},{id:'a',success:0},{id:'b',success:90},{id:'tie',success:90},{id:'nan',success:NaN}];
  assert.deepEqual(sortRows(rows,'success','asc').map(r=>r.id),['a','b','tie','missing','nan']);
  assert.deepEqual(sortRows(rows,'success','desc').map(r=>r.id),['b','tie','a','missing','nan']);
  assert.deepEqual(sortRows([{latency:0},{latency:20},{latency:10}],'latency','asc').map(r=>r.latency),[10,20,0]);
  const effective = [{id:'missing',effectiveMultiplier:null},{id:'infinite',cache:0,multiplier:.2},{id:'finite',effectiveMultiplier:.3}];
  assert.deepEqual(sortRows(effective,'effectiveMultiplier','asc').map(r=>r.id),['finite','infinite','missing']);
  assert.deepEqual(sortRows(effective,'effectiveMultiplier','desc').map(r=>r.id),['infinite','finite','missing']);
});
test('Terra selection uses its own metrics and never falls back to Astra channels', () => {
  const model='gpt-5.6-terra';
  const s={...snap([make()]),modelSnapshots:{[model]:{...snap([make({id:'terra',model,success:72,cache:40}),make({id:'wrong',model:'gpt-6-astra'})]),model}}};
  const result=rank(s,{model},now);
  assert.deepEqual(result.rows.map(r=>r.id),['terra']);
  assert.equal(result.rows[0].success,72);
  assert.equal(result.rows[0].cache,40);
  assert.equal(plan(s,{model},now).model,model);
  assert.equal(rank(snap([make()]),{model},now).rows.length,0);
});
console.log(`${tests} tests passed`);
