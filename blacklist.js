(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.RouterBlacklist = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const storageKey = 'gpt6-route-radar:blacklist:v1';
  function key(row) {
    return row.channelId != null && String(row.channelId) !== '' ? 'channel:' + String(row.channelId) : 'group:' + row.id;
  }
  function normalize(value) {
    if (!Array.isArray(value)) throw Error('黑名单格式无效');
    const entries = new Map();
    for (const r of value) {
      if (!r || typeof r.key !== 'string' || !/^(channel|group):.+$/.test(r.key) || typeof r.name !== 'string') continue;
      entries.set(r.key, { key: r.key, name: r.name, groupId: typeof r.groupId === 'string' ? r.groupId : '', blockedAt: typeof r.blockedAt === 'string' ? r.blockedAt : '' });
    }
    return [...entries.values()];
  }
  function createStore(storage) {
    let memory = [], error = '';
    function read() {
      try { const raw = storage.getItem(storageKey); memory = normalize(raw == null ? [] : JSON.parse(raw)); error = ''; }
      catch { error = '黑名单暂时无法从浏览器读取，本次操作仅在当前页面生效。'; }
      return memory.slice();
    }
    function write(entries) {
      memory = normalize(entries);
      try { storage.setItem(storageKey, JSON.stringify(memory)); error = ''; }
      catch { error = '浏览器未能保存黑名单，本次操作仅在当前页面生效。'; }
      return memory.slice();
    }
    read();
    return {
      read, get entries() { return memory.slice(); }, get error() { return error; },
      block(row) { const current = error ? memory : read(); const k = key(row); return write([...current.filter(e => e.key !== k), { key: k, name: row.name, groupId: row.id, blockedAt: new Date().toISOString() }]); },
      restore(k) { return write((error ? memory : read()).filter(e => e.key !== k)); },
      clear() { return write([]); },
    };
  }
  return { storageKey, key, normalize, createStore };
});
