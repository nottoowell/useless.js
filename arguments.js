////////////////////////////////////////
// function arguments

(function foo(p) {
  out(p, arguments[0]); // qaz qaz
  p = p.toUpperCase();
  out(p, arguments[0]); // QAZ QAZ
  arguments[0] = p.toLowerCase();
  out(p, arguments[0]); // qaz qaz
  
  out(this === window); // true
})('qaz');

(function bar(p) {
  "use strict"
  
  out(p, arguments[0]); // qaz qaz
  p = p.toUpperCase();
  out(p, arguments[0]); // QAZ qaz
  arguments[0] = p.slice(-1);
  out(p, arguments[0]); // QAZ Z
  
  out(this === undefined); // true
})('qaz');

(function qux(a, b) {
  var args = [].slice.call(arguments, 2);
  out(a, b, args); //-> 1 2 [3,4,5]
})(1,2,3,4,5);
