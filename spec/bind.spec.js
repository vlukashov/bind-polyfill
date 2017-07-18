const bind = require('../src/bind');

describe("bind()", function() {
  it("is a function", function() {
    expect(bind).toBeDefined();
    expect(typeof bind).toBe('function');
  });

  describe("with non-this paramters", function() {
    it("binds the first of two parameters", function() {
      const add = (a, b) => a + b;
      const add5 = bind(add, null, 5);

      expect(add5(1)).toBe(6);
    });

    it("binds several parameters", function() {
      const add = (a, b) => a + b;
      const add5to10 = bind(add, null, 5, 10);

      expect(add5to10()).toBe(15);
    });
  });
});
