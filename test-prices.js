'use strict';
const assert = require('node:assert/strict');
const P = require('./prices.js'), R = require('./rank.js');
const memoryStorage = () => { const data = new Map(); return {getItem:k=>data.get(k)??null, setItem:(k,v)=>data.set(k,v)}; };
const row = {id:'group-a', channelId:'80', name:'80-Codex Pro-0.2x', model:'gpt-6-astra', source:'Codex Pro', multiplier:.2,
  verified:true, lifecycle:'active', observing:false, modelStatus:'healthy', modelRequests:100, success:99,
  cache:80, ttftAvg:5000, ttftSamples:100, historicalCost:1};
const now = Date.now();
const snapshot = rows => ({rows, capturedAt:new Date(now).toISOString(), complete:true});
let count = 0;
function test(name, fn) { fn(); count++; console.log('PASS', name); }

test('personal quote persists by channel across public quote, group and model changes', () => {
  const storage = memoryStorage(), store = P.createStore(storage);
  store.set(row, .15);
  const reloaded = P.createStore(storage);
  const updated = P.apply({...row, id:'new-group', multiplier:.4, model:'gpt-5.6-sol'}, reloaded.entries);
  assert.equal(updated.multiplier,.15); assert.equal(updated.publicMultiplier,.4); assert.equal(updated.priceSource,'personal');
  reloaded.remove(P.key(row));
  assert.equal(P.createStore(storage).entries.length,0);
  assert.equal(P.apply(row,reloaded.entries).priceSource,'public');
  assert.equal(P.key({...row,channelId:null}),'group:group-a');
});
test('separate tabs merge changes; zero, negative, nonfinite and malformed prices cannot enter', () => {
  const storage=memoryStorage(), a=P.createStore(storage), b=P.createStore(storage);
  a.set(row,.3); b.set({...row,channelId:'153'},.25);
  assert.equal(a.read().length,2); a.remove(P.key(row)); assert.equal(b.read().length,1);
  for(const value of [0,-1,Infinity,NaN,'0.2',101]) assert.throws(()=>a.set(row,value));
  assert.equal(P.normalize([{},null,{key:'channel:80',multiplier:0},{key:'channel:80',multiplier:.2}]).length,1);
  storage.setItem(P.storageKey,'broken'); assert.ok(P.createStore(storage).error);
});
test('write failures retain all page-local changes even after another edit opens', () => {
  const store=P.createStore({getItem:()=>null,setItem(){throw Error('quota');}});
  store.set(row,.15); assert.ok(store.error); assert.equal(store.read()[0].multiplier,.15);
  store.set({...row,channelId:'153'},.3); assert.equal(store.entries.length,2);
  store.remove(P.key(row)); assert.equal(store.entries.length,1);
  store.clear(); assert.equal(store.entries.length,0);
});
test('personal price changes rank, adjusted multiplier and export without mutating public data or gates', () => {
  const s=snapshot([row,{...row,id:'b',channelId:'153',multiplier:.25}]);
  const overrides=[{key:'channel:153',multiplier:.18},{key:'channel:private-unused',multiplier:.123}];
  const config={priceOverrides:overrides};
  const result=R.rank(s,config,now), top=result.rows[0];
  assert.equal(top.channelId,'153'); assert.equal(top.publicMultiplier,.25); assert.equal(top.multiplier,.18);
  assert.equal(top.effectiveMultiplier,.18/.8); assert.equal(s.rows[1].multiplier,.25);
  assert.equal(top.historicalCost,1); assert.equal(R.rank(s,{},now).rows[0].channelId,'80');
  const plan=R.plan(s,config,now);
  assert.equal(plan.channels[0].priceSource,'personal'); assert.equal(plan.channels[0].multiplier,.18);
  assert.equal(plan.channels[0].publicMultiplier,.25); assert.equal(plan.scoring.priceOverrides,undefined);
  assert.equal(JSON.stringify(plan).includes('private-unused'),false);
  const blocked=R.rank(s,{...config,blockedKeys:['channel:153']},now);
  assert.equal(blocked.rows.length,1); const outside=R.search(s,blocked,'153').outside[0];
  assert.equal(outside.priceSource,'personal'); assert.equal(outside.multiplier,.18);
  assert.ok(outside.reasons.includes('已被你拉黑'));
  assert.equal(R.rank(snapshot([{...row,modelStatus:'failed'}]),{priceOverrides:[{key:'channel:80',multiplier:.01}]},now).eligible.length,0);
});
test('user price floor uses public quotes while personal discounts affect scoring', () => {
  const s=snapshot([row,{...row,id:'b',channelId:'153',multiplier:.3}]);
  const config={minMultiplier:.25,priceOverrides:[{key:'channel:153',multiplier:.1},{key:'channel:80',multiplier:.5}]};
  assert.deepEqual(R.rank(s,config,now).rows.map(r=>r.channelId),['153']);
  const found=R.search(s,R.rank(s,config,now),'80').outside[0];
  assert.equal(found.publicMultiplier,.2); assert.equal(found.multiplier,.5);
});
test('same channel override is used across models and survives live data refresh', () => {
  const sol='gpt-5.6-sol', s={...snapshot([row]),modelSnapshots:{[sol]:{...snapshot([{...row,model:sol,cache:50}]),model:sol}}};
  const config={model:sol,priceOverrides:[{key:'channel:80',multiplier:.3}]};
  assert.equal(R.rank(s,config,now).rows[0].effectiveMultiplier,.6);
  const newer=R.applyStatus(s,{capturedAt:new Date(now+1000).toISOString(),data:[{group_id:row.id,models:[{model:sol,cache_hit_rate:60}]}]});
  assert.equal(R.rank(newer,config,now+1000).rows[0].effectiveMultiplier,.5);
});
test('defaults do not count raw price or cache twice', () => {
  const s=snapshot([row,{...row,id:'b',channelId:'153',multiplier:.25,cache:100}]);
  const r=R.rank(s,{},now);
  assert.equal(r.config.weights.price,0); assert.equal(r.config.weights.cache,0);
  assert.equal(r.config.weights.effective,.6); assert.equal(r.rows[0].score,r.rows[1].score);
});
console.log(`${count} personal-price tests passed`);
