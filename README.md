# Marmott(Ajax)2

[![Join the chat at https://gitter.im/dimitrinicolas/marmottajax](https://badges.gitter.im/dimitrinicolas/marmottajax.svg)](https://gitter.im/dimitrinicolas/marmottajax?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> Powerful AJAX actions intelligent library

> Our philosophy: library should not be a combain. It should do one thing and do it perfect.
> And it is client-side JS. It should be small as it can be.
> There are modules to make it more functional (inspired by Vim)

Now in intensive development. See roadmap in issues.

# The API below refers to original branch https://github.com/dimitrinicolas/marmottajax
# Actually this branch is under construction and probably will have another API.

![Logo](image.jpg "logo")

## Usage

The different methods that can be used with this library are: `get`,` post`, `put`, `update`, `delete`.

Has two builds: as AMD module or just as a variable. See more in the bottom.

You also can pass just file input or form DOMElement, or even any DOMElement, where '.marmottajax' could be found, which will be ajax forms.

Signatures:
```javascript
marmottajax('url') // It's GET. Just checkout. Only case when You can write URL outside of Options Object.
marmottajax({url: '/some_url'})
marmottajax({url: '/some_url', method: 'POST', parameters: {a:1, b:{c:1, d:7}, e:[1,2,3]})  // Query string or POST parameters.
marmottajax({url: '/some_url', method: 'GET', json: true, watch: 200}).change(function(new_data){}) // Watching for a file/data.
marmottajax({url: '/some_url', parameters: document.querySelector('#fileupload')})
marmottajax({parameters: document.querySelector('form')})   // Url will be taken from `action` attribute, if `url` isn't passed.
marmottajax({ajax_forms_in: document.querySelector('div#several_forms'), success: function(){}})   // Only `success`, not `then`!

/* All except the last one can be declared with `.then`, `.error` Promises and `success`, `error` parameters on your taste.
    If both are presented, both are invoked.
*/

```

*Samples*
```javascript
/**
 * Simply get file content
 */

marmottajax("text-file.txt").then(function(content) {
    // content
});

/**
 * Post
 */

marmottajax({
    url: "post.php",
    method: "post",
    parameters: {
        image: 8,
        by: "click"
    }
}).then(function(result) {
    // result
}).error(function(message) {
    // message
});

/**
 * Get Json
 */

marmottajax({
    url: "data.json",
    json: true
}).then(function(result) {
    // result
}).bind(document.getElementById("console"));

/**
 * Watch changes on file
 */

var watcher = new marmottajax({
    url: "data.json",
    json: true,
    watch: 200
}).change(function(result) {
    // result
});

// Change interval time of `watcher`
setTimeout(function() {
    watcher.changeTime(1000);
}, 800);


/**
 * Pass complex data
 */

 marmottajax({
    url: "/post.asm",
    method: "post",
    parameters: {
        love: {
            animal: 'Marmotte',
            action: "stroke"
        },
        hate: ['ie6', 'ie7', 'one, who framed Roger Rabbit']
    }
}).then(function(response_data) {
    // result
})



/**
 * Pass a file. Workis like the same as in jQuery, but lighter.
 * IE9+ in theory. Tested in Chrome.
 */

 var file_in_DOM = document.querySelector('input[type="file"]')

 marmottajax({
    url: "/file_uload.rb",
    method: "file",
    data: file_in_DOM,
    filename: 'the_image'   // Optional! If not presented, uses just 'file' automatically.

}).then(function(response_data) {
    // result
})
 
```

## Contributing

MarmottAjax requires some development dependencies :

 - NodeJs : [nodejs.org](http://nodejs.org/)
 - Gulp : `npm i -g gulp`
 - And some modules : `npm i`

 - Start `gulp` command and you can start to edit the code
 - Start `gulp requirejs --modulename` command for generate requirejs module wi name = `modulename`

## License

MIT
