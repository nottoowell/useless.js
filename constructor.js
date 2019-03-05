////////////////////////////////////////
// constructor

(function () {
  function Foo() {
    return 42;
  }
  
  out(Foo() === 42);
  out(new Foo() instanceof Foo);
  
  function Bar() {
    return {};
  }
  
  out(Bar() instanceof Object && ! (Bar() instanceof Bar));
  out(new Bar() instanceof Object && ! (new Bar() instanceof Bar));
})();
