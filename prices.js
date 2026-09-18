(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.RouterPrices = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const storageKey = 'gpt6-route-radar:prices:v1';
  const valid = value => typeof value === 'number' && Number.isFinite(value) && value > 0 && value <= 100;
  const key = row => row.channelId != null && String(row.channelId) !== '' ? 'channel:' + row.channelId : 'group:' + row.id;
  function normalize(value) {
    if (!Array.isArray(value)) throw Error('Invalid personal price settings');
    const entries = new Map();
    for (const row of value) {
      if (!row || typeof row.key !== 'string' || !/^(channel|group):.+$/.test(row.key) || !valid(row.multiplier)) continue;
      entries.set(row.key, { key: row.key, name: typeof row.name === 'string' ? row.name : row.key,
        multiplier: row.multiplier, updatedAt: typeof row.updatedAt === 'string' ? row.updatedAt : '' });
    }
    return [...entries.values()];
  }
  function apply(row, entries) {
    const override = entries.find(entry => entry.key === key(row));
    return { ...row, publicMultiplier: row.multiplier, multiplier: override?.multiplier ?? row.multiplier,
      priceSource: override ? 'personal' : 'public' };
  }
  function createStore(storage) {
    let memory = [], error = '';
    function read() {
      if (error === 'write') return memory.slice();
      try { const raw = storage.getItem(storageKey); memory = normalize(raw == null ? [] : JSON.parse(raw)); error = ''; }
      catch { error = 'read'; }
      return memory.slice();
    }
    function write(entries) {
      memory = normalize(entries);
      try { storage.setItem(storageKey, JSON.stringify(memory)); error = ''; }
      catch { error = 'write'; }
      return memory.slice();
    }
    read();
    return {
      read, get entries() { return memory.slice(); }, get error() { return error; },
      set(row, multiplier) {
        if (!valid(multiplier)) throw Error('Multiplier must be greater than 0 and at most 100');
        const current = error ? memory : read(), id = key(row);
        return write([...current.filter(e => e.key !== id), { key: id, name: row.name, multiplier, updatedAt: new Date().toISOString() }]);
      },
      remove(id) { return write((error ? memory : read()).filter(e => e.key !== id)); },
      clear() { return write([]); },
    };
  }
  return { storageKey, key, valid, normalize, apply, createStore };
});
