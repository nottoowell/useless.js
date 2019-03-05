////////////////////////////////////////
// function vs. var

(function () {
  out(func); //-> function func() {}
  
  var func = 3;
  
  out(func); //-> 3
  
  function func() {}
  
  out(func); //-> 3
})();
