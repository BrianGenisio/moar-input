"use strict";
var $__1;
var componentConfig = require("./component-config");
var typeName = require("./type-name");
var iterationExtensions = require("./iteration-extensions");
function isComponent(value) {
  return typeName(value) in componentConfig;
}
function getComponent(name, value) {
  var result = {
    name: name,
    type: typeName(value)
  };
  var properties = componentConfig[typeName(value)].properties;
  for (var $__4 = properties[Symbol.iterator](),
      $__5; !($__5 = $__4.next()).done; ) {
    var property = $__5.value;
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
($traceurRuntime.createClass)(BoardComponents, ($__1 = {}, Object.defineProperty($__1, "update", {
  value: function(component) {
    this.board.repl.context[component.name][component.value ? 'on' : 'off']();
    return component;
  },
  configurable: true,
  enumerable: true,
  writable: true
}), Object.defineProperty($__1, Symbol.iterator, {
  value: function() {
    var boardContext = this.board.repl.context;
    return iterationExtensions.arrayIterator((function() {
      var $__2 = 0,
          $__3 = [];
      for (var $__4 = Object.keys(boardContext)[Symbol.iterator](),
          $__5; !($__5 = $__4.next()).done; ) {
        var name = $__5.value;
        if (isComponent(boardContext[name]))
          $__3[$__2++] = getComponent(name, boardContext[name]);
      }
      return $__3;
    }()));
  },
  configurable: true,
  enumerable: true,
  writable: true
}), $__1), {});
module.exports = iterationExtensions.extend(BoardComponents);

//# sourceMappingURL=board-components.js.map