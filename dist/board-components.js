"use strict";
var componentConfig = require("./component-config");
var typeName = require("./type-name");
function isComponent(value) {
  return typeName(value) in componentConfig;
}
function getComponent(name, value) {
  var result = {name: name};
  var properties = componentConfig[typeName(value)].properties;
  for (var $__3 = properties[Symbol.iterator](),
      $__4; !($__4 = $__3.next()).done; ) {
    var property = $__4.value;
    {
      result[property] = value[property];
    }
  }
  if (!result.id) {
    result.id = name;
  }
  return result;
}
var BoardComponents = function BoardComponents(board) {
  this.board = board;
};
($traceurRuntime.createClass)(BoardComponents, {getComponents: function() {
    var boardContext = this.board.repl.context;
    return (function() {
      var $__1 = 0,
          $__2 = [];
      for (var $__3 = Object.keys(boardContext)[Symbol.iterator](),
          $__4; !($__4 = $__3.next()).done; ) {
        var name = $__4.value;
        if (isComponent(boardContext[name]))
          $__2[$__1++] = getComponent(name, boardContext[name]);
      }
      return $__2;
    }());
  }}, {});
module.exports = BoardComponents;

//# sourceMappingURL=board-components.js.map