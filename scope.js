(function () {
  let a, b, c, x, y, z;
  a = b = c = x = y = z = 0;
  (function () {
    let a = 'foo', b = 'bar', c = 'baz';
    out(a, b, c); //-> foo bar baz
    
    let x = y = z = 'qaz';
    out(x, y, z); //-> qaz qaz qaz
  })();
  out(a, b, c, x, y, z); //-> 0 0 0 0 "qaz" "qaz"
})();
