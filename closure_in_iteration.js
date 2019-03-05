////////////////////////////////////////
// closure in iteration

(function () {
  function callback(x) {
    out(x);
  }
  
  let a = [1,2,3];
  
  ////////////////////
  
  for (let i = 0; i < a.length; i++) {
    var x = 'A'+a[i];
    (function doTineConsumingWork1() {
      setTimeout(function () {
        callback(x); //-> A3 A3 A3
      }, 100);
    })();
  }
  
  ////////////////////
  
  for (let i = 0; i < a.length; i++) {
    let x = 'A'+a[i];
    (function doTineConsumingWork1() {
      setTimeout(function () {
        callback(x); //-> A1 A2 A3
      }, 100);
    })();
  }
  
  ////////////////////
  
  for (let i = 0; i < a.length; i++) {
    var y = 'B'+a[i];
    (function doTineConsumingWork2(x) {
      setTimeout(function () {
        callback(x); //-> B1 B2 B3
      }, 100);
    })(y);
  }
  
  ////////////////////
  
  a.forEach(function (x) {
    var z = 'C'+x;
    (function doTineConsumingWork3() {
      setTimeout(function () {
        callback(z); //-> C1 C2 C3
      }, 100);
    })();
  });
})();
