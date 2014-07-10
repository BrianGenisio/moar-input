var BoardComponents = require('../dist/board-components.js');

function Led() {};

var mockBoard = {};

module.exports = {
  setUp: function(callback) {
    mockBoard = {
      repl: {
        context: {
          myLED: new Led()
        }
      }
    };

    this.boardComponents = new BoardComponents(mockBoard);
    callback();
  },

  getComponents_finds_known_components: function(test) {
    var components = this.boardComponents.getComponents();

    test.equals(components.length, 1);
    test.equals(components[0].name, "myLED");
    test.done();
  },

  getComponents_exposes_known_properties: function(test) {
    mockBoard.repl.context.myLED.value = 1;
    mockBoard.repl.context.myLED.id = 1234;
    var components = this.boardComponents.getComponents();

    test.equals(components[0].value, 1);
    test.equals(components[0].id, 1234);

    test.done();
  },

  getComponents_hides_unknown_properties: function(test) {
    mockBoard.repl.context.myLED.extraStuff = "extra";
    var components = this.boardComponents.getComponents();

    test.ok(!components[0].extraStuff);

    test.done();
  },

  defaults_id_to_name: function(test) {
    var components = this.boardComponents.getComponents();

    test.equals(components[0].id, "myLED");

    test.done();
  }
};