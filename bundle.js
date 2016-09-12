/*

  main class
 */
var Marmott;

Marmott = (function() {
  var class1;

  function Marmott() {
    return class1.apply(this, arguments);
  }

  class1 = Marmott.a = 44;

  return Marmott;

})();

alert((new Marmott).a);