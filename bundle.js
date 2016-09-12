'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var Marmott = createCommonjsModule(function (module) {
/*

  main class
 */
var Marmott;

module.exports = {
  a: Marmott = (function() {
    function Marmott() {}

    return Marmott;

  })(),
  b: 51
};
});

var main = createCommonjsModule(function (module) {
var a;

a = Marmott;

alert(a.b);
});

module.exports = main;