const bind = require('../src/bind');

describe("bind()", function() {
  describe("with broken parameters", function() {
    it("throws a TypeError when 'fn' is null or undefined", function() {
      expect(bind(null, {})).toThrowError(TypeError, /is not a function/);
      expect(bind(undefined, {})).toThrowError(TypeError, /is not a function/);
    });

    it("throws a TypeError when 'fn' is not a function", function() {
      expect(bind(1, {})).toThrowError(TypeError, /is not a function/);
      expect(bind({}, {})).toThrowError(TypeError, /is not a function/);
      expect(bind('string', {})).toThrowError(TypeError, /is not a function/);
      expect(bind([1, 2, 3], {})).toThrowError(TypeError, /is not a function/);
      expect(bind(true, {})).toThrowError(TypeError, /is not a function/);
    });

    it("works when this arg is undefined", function() {
      expect(bind(() => 42)()).toBe(42);

      expect(bind(function() {
        return this.x = 42;
      })()).toBe(42);

      expect(bind(function() {
        "use strict";
        return this.x = 42;
      })).toThrowError(TypeError);
    });
  });
});
