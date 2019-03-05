////////////////////////////////////////
// rest, spread

(function () {
  function foo(...args) { // rest
    out(...args); // spread
  }
  
  foo();
  foo(1 );
  foo(1,2 );
  foo(1,2,3 );
})();
