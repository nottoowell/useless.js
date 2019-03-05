////////////////////////////////////////
// prototype

(function () {
  const o1 = { p1: true };
  const o2 = { p2: true };
  const o3 = { p3: true };
  
  out(o1.p1, o1.p2, o1.p3); //-> true undefined undefined
  
  Object.setPrototypeOf(o1, o2);
  out(o1.p2, o2.p3); //-> true undefined
  
  Object.setPrototypeOf(o2, o3);
  out(o2.p3, o1.p3); //-> true true
  
  out(Object.getPrototypeOf(o1) === o2); //-> true
  out(Object.getPrototypeOf(o2) === o3); //-> true
})();

////////////////////

(function () {
  function Foo() {
    this.p = false;
    this.q = () => !this.p;
  }
  Foo.prototype.q = function () { return this.p; };
  
  const o1 = new Foo();
  out(o1.q()); //-> true
  
  const o2 = new Foo();
  out(o1.q.toString() === o2.q.toString()); //-> true
  out(o1.q === o2.q); //-> false
})();

////////////////////

(function () {
  function Foo() {
    this.p = true;
  }
  
  const o1 = new Foo();
  out(o1.q); //-> undefined
  
  Foo.prototype.q = function () { return this.p; };
  out(o1.q()); //-> true
  
  Foo.prototype = {
    r: function () { return true; }
  };
  out(o1.r); //-> undefined
  
  const o2 = new Foo();
  out(o2.q); //-> undefined
  out(o2.r()); //-> true
})();

////////////////////

(function () {
  function Foo() {}
  
  function Bar() {}
  Bar.prototype = new Foo();
  
  const o1 = new Bar();
  out(o1 instanceof Bar, o1 instanceof Foo);
  out(o1.__proto__.constructor === Foo); // not Bar
  out(Object.getPrototypeOf(o1).constructor === Foo); // not Bar
})();

////////////////////

(function () {
  function Foo() {}
  
  function Bar() {}
  Bar.prototype = new Foo();
  Bar.prototype.constructor = Bar;
  
  const o1 = new Bar();
  out(o1 instanceof Bar, o1 instanceof Foo);
  out(o1.__proto__.constructor === Bar);
  out(Object.getPrototypeOf(o1).constructor === Bar);
})();

////////////////////

(function () {
  class Foo {
    constructor(p1) {
      this.p1 = p1;
    }
    f1() {
      return true;
    }
  }
  
  class Bar extends Foo {
    constructor(p1, p2) {
      super(p1);
      this.p2 = p2;
    }
    f2() {
      return true;
    }
  }
  
  let o1 = new Foo('ha');
  out(o1 instanceof Foo, o1.f1(), o1.p1 == 'ha');
  
  let o2 = new Bar('ho', 'he');
  out(o2 instanceof Foo, o2 instanceof Bar);
  out(o2.f1(), o2.f2(), o2.p1 === 'ho', o2.p2 === 'he')
})();
