////////////////////////////////////////
// output

function out() {
  console.log.apply(null, ['>'].concat([].slice.call(arguments)));
}

function out(x) {
  var args = Array.from(arguments);
  args.unshift('>>>');
  console.log.apply(null, args);
}
