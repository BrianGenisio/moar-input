var typeName = require('../dist/type-name.js');

function Dummy () {}

module.exports = {
  class_gets_class_name: function (test) {
  	test.equals(typeName(new Dummy()), 'Dummy');
    test.done();
  },

  object_gets_Object: function(test) {
  	test.equals(typeName({}), 'Object');
  	test.done();
  },

  null_gets_empty: function(test) {
  	test.equals(typeName(null), '');
  	test.done();
  }
};