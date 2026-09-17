'use strict';
const assert = require('node:assert/strict');
const B = require('./blacklist.js');
const R = require('./rank.js');
const row = { id:'group-a', channelId:'100', name:'100-Codex Pro-0.25x' };
function memoryStorage() { const values=new Map(); return { getItem:k=>values.get(k) ?? null, setItem:(k,v)=>values.set(k,v) }; }
let count=0;
function test(name,fn){fn();count++;console.log('PASS',name);}
test('stable channel key survives group, price and name changes',()=>{
 assert.equal(B.key(row),'channel:100');assert.equal(B.key({...row,id:'new',name:'renamed'}),B.key(row));
 assert.equal(B.key({id:'fallback'}),'group:fallback');
});
test('block persists across reload and restore deletes it',()=>{
 const storage=memoryStorage(),first=B.createStore(storage);first.block(row);
 const next=B.createStore(storage);assert.equal(next.entries.length,1);next.restore(B.key(row));
 assert.equal(B.createStore(storage).entries.length,0);
});
test('blocking again replaces metadata instead of duplicating',()=>{
 const store=B.createStore(memoryStorage());store.block(row);store.block({...row,name:'renamed'});
 assert.equal(store.entries.length,1);assert.equal(store.entries[0].name,'renamed');
});
test('separate tabs merge mutations using the latest stored list',()=>{
 const storage=memoryStorage(),a=B.createStore(storage),b=B.createStore(storage);
 a.block(row);b.block({...row,id:'group-b',channelId:'200'});assert.equal(a.read().length,2);
 a.restore(B.key(row));assert.equal(b.read().length,1);assert.equal(b.entries[0].key,'channel:200');
 b.clear();assert.equal(a.read().length,0);
});
test('blocked storage retains in-page exclusions and reports loss of persistence',()=>{
 const broken={getItem(){throw Error('denied');},setItem(){throw Error('denied');}};
 const store=B.createStore(broken);store.block(row);assert.equal(store.entries.length,1);assert.ok(store.error);
 store.restore(B.key(row));assert.equal(store.entries.length,0);
});
test('malformed saved data does not crash the app',()=>{
 const storage=memoryStorage();storage.setItem(B.storageKey,'{broken');const store=B.createStore(storage);
 assert.ok(store.error);assert.deepEqual(store.entries,[]);store.block(row);assert.equal(store.error,'');
 assert.equal(B.normalize([null,{}, {key:'invalid',name:'x'}, {key:'channel:100',name:'valid'}]).length,1);
});
test('blacklisted channels never affect ranking, recommendations or route export',()=>{
 const now=Date.now(),base={...row,source:'Codex Pro',model:'gpt-6-astra',multiplier:.22,verified:true,lifecycle:'active',observing:false,modelStatus:'healthy',modelRequests:100,success:99,cache:85,ttftAvg:5000,ttftSamples:100,historicalCost:.001};
 const snapshot={capturedAt:new Date(now).toISOString(),complete:true,rows:[base,{...base,id:'b',channelId:'200',historicalCost:1}]};
 const cfg={blockedKeys:['channel:100']};const ranked=R.rank(snapshot,cfg,now);
 assert.equal(ranked.rows.length,1);assert.equal(ranked.eligible[0].channelId,'200');assert.equal(ranked.blocked.length,1);
 assert.equal(ranked.eligible[0].components.cost,100);
 assert.equal(R.plan(snapshot,cfg,now).channels[0].channel_id,'200');
 assert.throws(()=>R.plan(snapshot,{blockedKeys:['channel:100','channel:200']},now),/没有/);
 assert.equal(R.rank(snapshot,{blockedKeys:['group:group-a']},now).rows.length,1);
 snapshot.rows[0]={...base,id:'replacement',name:'price changed'};
 assert.equal(R.rank(snapshot,cfg,now).rows.length,1);
});
console.log(`${count} blacklist tests passed`);
