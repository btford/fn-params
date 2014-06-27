
var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG = /^\s(.+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

module.exports = function (fn) {
  if (typeof fn !== 'string') {
    fn = fn.toString();
  }

  var fnText = fn.replace(STRIP_COMMENTS, '');
  var argDecl = fnText.match(FN_ARGS);
  return argDecl[1].split(',').map(function (arg) {
    return arg.trim();
  });
};
