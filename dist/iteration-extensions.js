"use strict";
module.exports = {
  arrayIterator: function(array) {
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
  },
  extend: function(iteratorClass) {
    iteratorClass.prototype.iterate = function(callback) {
      for (var $__0 = this[Symbol.iterator](),
          $__1; !($__1 = $__0.next()).done; ) {
        var component = $__1.value;
        {
          callback(component);
        }
      }
    };
    iteratorClass.prototype.toArray = function() {
      var result = [];
      this.iterate((function(item) {
        return result.push(item);
      }));
      return result;
    };
    return iteratorClass;
  }
};

//# sourceMappingURL=iteration-extensions.js.map