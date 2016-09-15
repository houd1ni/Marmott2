getf = (fn)-> if fn then fn else ->
w = window

###
  
    XHR Transport

    takes standart

      # plain response. err: 0: no, 1: 404, 2: undef
      cb: (err, response)->
      # Parameters in an any object
      p: {}
      # method
      m: `string` || 'POST'
      u: `url` || '.'
      h: `headers { name: value, name2: value2, ... }`


###


class XHR

  default_headers =
    'X-Requested-With':' XMLHttpRequest'

  constructor: (O)->
    t = this
    callback = getf t.cb
    headers = O.h || {}

    t.xhr = new (w.XMLHttpRequest || ActiveXObject('Microsoft.XMLHTTP')
    )
    t.xhr.onreadystatechange = ->
      e = this    # event
      state =  e.readyState
      status = e.status
      response = e.responseText   # Blobz ??!
      if state == 4
        code == if 199<status<207 then 0 else +!!(status==404)+1
        cb code, response
    t.xhr.open (O.m || 'post'), (O.u || '.'), true
    
    for name, value of default_headers
      headers[name] = v || default_headers[name]
    for name, value of headers
      t.xhr.setRequestHeader name, value

    t.xhr.send(O.p || null)
    


`export { XHR }`
