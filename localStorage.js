////////////////////////////////////////
// localStorage

const ls = (function () {
  const _ls = localStorage;
  return {
    get(k, dflt) {
      return JSON.parse(_ls.getItem(k)) || dflt;
    },
    put(k, v) {
      _ls.setItem(k, JSON.stringify(v));
    },
    del(k) {
      _ls.removeItem(k);
    },
    clear() {
      _ls.clear();
    }
  };
})();

function test() {
  let key = 'foo';
  let zero = { x: 'bar', y: 42 };
  let obj;
  
  obj = ls.get(key, zero);
  out(JSON.stringify(obj));
  
  ++obj.y;
  ls.put(key, obj);
  
  obj = ls.get(key, zero);
  out(JSON.stringify(obj));
  
  ls.del(key);
}
