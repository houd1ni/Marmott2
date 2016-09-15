var XHR;
var getf;
var w;

getf = function(fn) {
  if (fn) {
    return fn;
  } else {
    return function() {};
  }
};

w = window;


/*
  
    XHR Transport

    takes standart

       * plain response. err: 0: no, 1: 404, 2: undef
      cb: (err, response)->
       * Parameters in an any object
      p: {}
       * method
      m: `string` || 'POST'
      u: `url` || '.'
      h: `headers { name: value, name2: value2, ... }`
 */

XHR = (function() {
  var default_headers;

  default_headers = {
    'X-Requested-With': 'XMLHttpRequest'
  };

  function XHR(O) {
    var callback, headers, name, t, value;
    t = this;
    callback = getf(t.cb);
    headers = O.h || {};
    t.xhr = new (w.XMLHttpRequest || ActiveXObject('Microsoft.XMLHTTP'));
    t.xhr.onreadystatechange = function() {
      var e, response, state, status;
      e = this;
      state = e.readyState;
      status = e.status;
      response = e.responseText;
      if (state === 4) {
        code === ((199 < status && status < 207) ? 0 : +(!!(status === 404)) + 1);
        return cb(code, response);
      }
    };
    t.xhr.open(O.m || 'post', O.u || '.', true);
    for (name in default_headers) {
      value = default_headers[name];
      headers[name] = v || default_headers[name];
    }
    for (name in headers) {
      value = headers[name];
      t.xhr.setRequestHeader(name, value);
    }
    t.xhr.send(O.p || null);
  }

  return XHR;

})();

/*

  main class
 */
var Marmott;

Marmott = (function() {
  function Marmott(O) {
    this.O = O;
  }

  return Marmott;

})();

alert((new Marmott).a);