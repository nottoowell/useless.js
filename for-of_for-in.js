////////////////////////////////////////
// for of
// modification during iteration

(function for_of() {
  let a = [1,2,3];
  for (let x of a) {
    out(x); //-> 1 2 4 3
    if (x == 2) {
      a.splice(x,0,4);
    }
  }
})();

////////////////////////////////////////
// for in
// modification during iteration

(function for_in() {
  let a = [1,2,3];
  for (let i in a) {
    let x = a[i];
    out(x); //-> 1 2 4
    if (x == 2) {
      a.splice(x,0,4);
    }
  }
})();
