////////////////////////////////////////
// generator

(function () {
  function* g1() {
    yield '1';
    yield* g2();
    yield '3';
  }
  
  function* g2() {
    yield '21';
    yield '22';
  }
  
  for (let x of g1()) {
    out(x); // 1 21 22 3
  }
})();
