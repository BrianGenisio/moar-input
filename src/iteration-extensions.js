module.exports = {
  arrayIterator: function(array) {
    var index = 0; 
    var current;

    return {
      next: function() {
        if(index < array.length) {
          current = array[index++];

          return {
            value: current,
            done: false
          }
        } 

        return {
          value: undefined,
          done: true
        }
      }
    };
  },
  extend: function(iteratorClass) {
    iteratorClass.prototype.iterate = function(callback) {
      for(var component of this) {
        callback(component);
      }
    };

    iteratorClass.prototype.toArray = function() {
      var result = [];
      this.iterate(item => result.push(item));
      return result;
    };

    return iteratorClass;
  }
};
