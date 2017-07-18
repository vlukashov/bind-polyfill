const bind = require('../src/bind');

describe("bind()", function() {
  describe("with 'this' parameter", function() {
    it("binds 'this' on class members", function() {
      class Accumulator {
        constructor(value) {
          this.value = +value || 0;
        }

        add(n) {
          this.value += +n || 0;
        }
      }

      const accumulator = new Accumulator(42);
      const addToAcc = bind(accumulator.add, accumulator);

      addToAcc(1);
      addToAcc(2);
      addToAcc(3);

      expect(accumulator.value).toBe(48);
    });

    it("binds 'this' on standalone functions", function() {
      const add = function (n) {
        this.value += +n || 0;
      }

      const accumulator = {
        value: 42
      };

      const addToAcc = bind(add, accumulator);

      addToAcc(1);
      addToAcc(2);
      addToAcc(3);

      expect(accumulator.value).toBe(48);
    });
  });
});
