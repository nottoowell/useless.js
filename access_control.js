////////////////////////////////////////
// access control

(function () {
  function Foo() {
    let _x;
    
    this.getValue = () => _x;
    this.setValue = value => { _x = value; };
  }
  
  const foo = new Foo();
  foo.value = 42;
  out(foo.value);
})();

////////////////////

(function () {
  function Foo() {
    let _x;
    
    Object.defineProperty(this, 'value', {
      get: () => _x,
      set: value => {
        if (! Number.isInteger(value)) {
          throw new TypeError('should be a number');
        }
        _x = value;
      }
    });
  }
  
  const foo = new Foo();
  try {
    foo.value = '42';
  } catch (ex) {
    out(ex.message);
    foo.value = 42;
  }
  out(foo.value);
})();

////////////////////

(function () {
  class Foo {
    constructor() {
      this._x = 0;
    }
    get value() {
      return this._x;
    }
    set value(value) {
      this._x = value;
    }
  }
  
  const foo = new Foo();
  foo.value = 42;
  out(foo.value);
})();

////////////////////

(function () {
  const foo = { x: 0 };
  const bar = new Proxy(foo, {
    get: (target, key) => {
      if (key == 'value') {
        return target['x'];
      }
    },
    set: (target, key, value) => {
      if (key == 'value') {
        target['x'] = value;
      }
    }
  });
  
  bar.value = 42;
  out(bar.value, foo.x); //-> 42 42
})();
