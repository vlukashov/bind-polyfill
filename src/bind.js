/**
 * Own implementation of a Function.prototype.bind polyfill.
 */
module.exports = function bind(fn, boundThis, ...boundArgs) {
  return (...args) =>
    Function.prototype.call.call(
      fn, boundThis, ...boundArgs, ...args);
};
