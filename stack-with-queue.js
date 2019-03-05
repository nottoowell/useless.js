// Queue로 Stack 구현

// Queue
function Q() {
  this.data = [];
}
Q.prototype = {
  push: function (x) {
    this.data.push(x);
    return this;
  },
  pop: function () {
    return this.data.shift();
  }
}

let q = null;

q = new Q();
q.push(1).push(2).push(3);
out(q.pop(), q.pop(), q.pop()); // 1 2 3

q = new Q();
q.push(1).push(2).push(3);
out(q.pop()); // 1
q.push(4);
out(q.pop(), q.pop(), q.pop()); // 2 3 4

// Stack
function S() {
  this.q = new Q();
}
S.prototype = {
  push: function (x) {
    let q = this.q;
    let r = new Q();
    let e = q.pop();
    while (e !== undefined) {
      r.push(e);
      e = q.pop();
    }
    q.push(x);
    e = r.pop();
    while (e !== undefined) {
      q.push(e);
      e = r.pop();
    }
    return this;
  },
  pop: function () {
    return this.q.pop();
  }
}

let s = null;

s = new S();
s.push(1).push(2).push(3);
out(s.pop(), s.pop(), s.pop()); // 3 2 1

s = new S();
s.push(1).push(2).push(3);
out(s.pop(), s.pop()); // 3 2
s.push(4).push(5);
out(s.pop(), s.pop(), s.pop()); // 5 4 1
