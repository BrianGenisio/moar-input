"use strict";
module.exports = function arrayIterator(array) {
  var index = 0;
  var current;
  return {next: function() {
      if (index < array.length) {
        current = array[index++];
        return {
          value: current,
          done: false
        };
      }
      return {
        value: undefined,
        done: true
      };
    }};
};

//# sourceMappingURL=array-iterator.js.map