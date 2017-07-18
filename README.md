# A polyfill for Function.prototype.bind()

This repo is meant for educational purposes rather than for production use. The polyfill itself is in `src/bind.js`, and the tests for it are in the `spec/` folder.

## Running tests

`npm test` (make sure you run `npm install` first)


## More details

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) provides a reasonable implementation for a `Function.prototype.bind()` polyfill. The [Chapter 2](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md#everything-in-order) of the ["this & Object Prototypes"](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) book in the [You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS) series explains the details about it.
