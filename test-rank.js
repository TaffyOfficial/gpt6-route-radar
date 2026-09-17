'use strict';
const assert = require('node:assert/strict');
const { rank, plan, paginate, applyStatus } = require('./rank.js');
const now = Date.UTC(2026, 8, 17, 10);
const make = changes => ({ id: 'a', channelId: '1', source: 'Codex Pro', model: 'gpt-6-astra', multiplier: .22, name: 'test', verified: true, lifecycle: 'active', observing: false, modelStatus: 'healthy', modelRequests: 100, success: 99, cache: 85, ttftAvg: 10000, ttftP50: 8000, ttftP95: 20000, ttftSamples: 100, historicalCost: 1, ...changes });
const snap = rows => ({ rows, capturedAt: new Date(now).toISOString(), complete: true });
let tests = 0;
function test(name, fn) { fn(); tests++; console.log('PASS', name); }
test('exact source/model and inclusive 0.22 floor', () => {
  const r = rank(snap([make(), make({ id: 'b', multiplier: .219999 }), make({ id: 'c', source: 'Codex Plus' }), make({ id: 'd', model: 'gpt-5.6-sol' })]), {}, now);
  assert.deepEqual(r.rows.map(r => r.id), ['a']);
});
test('zero/missing latency and missing cache never rank as free/fast', () => {
  for (const change of [{ ttftAvg: 0 }, { ttftAvg: null }, { ttftSamples: 0 }, { cache: null }]) assert.equal(rank(snap([make(change)]), {}, now).eligible.length, 0);
});
test('zero measured cache is valid, not missing', () => assert.equal(rank(snap([make({ cache: 0 })]), {}, now).eligible.length, 1));
test('current model failure, low sample, observing and full capacity gated', () => {
  for (const change of [{ success: 94.9 }, { modelRequests: 19 }, { modelStatus: 'failed' }, { observing: true }, { verified: false }, { maxConcurrency: 3, currentConcurrency: 3 }]) assert.equal(rank(snap([make(change)]), {}, now).eligible.length, 0);
});
test('lower price and lower latency improve their scores', () => {
  const r = rank(snap([make(), make({ id: 'b', multiplier: .44, ttftAvg: 20000 })]), {}, now);
  assert.equal(r.eligible[0].id, 'a');
  assert.equal(r.eligible[0].components.price, 100);
  assert.equal(r.eligible[1].components.price, 50);
});
test('unknown historical spend earns zero, not cheapest score', () => assert.equal(rank(snap([make({ historicalCost: null })]), {}, now).eligible[0].components.cost, 0));
test('failed channel historical spend does not alter healthy ranking', () => {
  const a = rank(snap([make()]), {}, now).eligible[0].score;
  const b = rank(snap([make(), make({ id: 'b', success: 0, historicalCost: .0001 })]), {}, now).eligible[0].score;
  assert.equal(a, b);
});
test('historical spend capped at normalized 10%', () => assert.throws(() => rank(snap([make()]), { weights: { price: 1, ttft: 1, cache: 1, cost: 10 } }, now), /10%/));
test('invalid zero total is rejected', () => assert.throws(() => rank(snap([make()]), { weights: { price: 0, ttft: 0, cache: 0, cost: 0 } }, now), /至少/));
test('stale, future, invalid and partial snapshots cannot export routes', () => {
  for (const changes of [{ capturedAt: new Date(now - 600001).toISOString() }, { capturedAt: 'invalid' }, { capturedAt: new Date(now + 120000).toISOString() }, { complete: false }]) assert.throws(() => plan({ ...snap([make()]), ...changes }, {}, now), /刷新/);
});
test('empty selection fails closed', () => assert.throws(() => plan(snap([make({ success: 0 })]), {}, now), /没有/));
test('route plan has only eligible channels with real IDs and expiry', () => {
  const p = plan(snap([make(), make({ id: 'b', modelRequests: 0 })]), {}, now);
  assert.equal(p.channels.length, 1); assert.equal(p.channels[0].group_id, 'a'); assert.equal(Date.parse(p.validUntil), now + 180000);
});
test('all-channel ranking retains low success and low sample channels with scores', () => {
  const r = rank(snap([make(), make({ id: 'b', success: 2 }), make({ id: 'c', modelRequests: 0 })]), {}, now);
  assert.equal(r.rows.length, 3); assert.equal(r.eligible.length, 1);
  assert.ok(r.rows.every(row => Number.isFinite(row.score)));
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
console.log(`${tests} tests passed`);
