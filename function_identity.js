////////////////////////////////////////
// function identity

function Zoo(name) {
  this.name = name;
}
Zoo.prototype.greet = function () {
  out('Hello', this.name);
}
function greet() {
  out('Hello', this && this.name || 'World');
}

(function () {
  let z1 = new Zoo('Jack');
  let z2 = new Zoo('Jill');
  
  out(z1.greet === z2.greet); // true
  
  z1.greet = greet.bind(z1);
  z2.greet = greet.bind(z2);
  
  out(z1.greet === z2.greet); // false
})();
