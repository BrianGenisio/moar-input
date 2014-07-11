"use strict";
var $__1;
var componentConfig = require("./component-config");
var typeName = require("./type-name");
var iterationExtensions = require("./iteration-extensions");
function isComponent(value) {
  return typeName(value) in componentConfig;
}
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if (result === null)
    result = [];
  return result;
}
function getAction(name, value) {
  return {
    name: name,
    params: getParamNames(value[name])
  };
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
  result.actions = (function() {
    var $__2 = 0,
        $__3 = [];
    for (var $__6 = Object.keys(Object.getPrototypeOf(value))[Symbol.iterator](),
        $__7; !($__7 = $__6.next()).done; ) {
      var name = $__7.value;
      $__3[$__2++] = getAction(name, value);
    }
    return $__3;
  }());
  return result;
}
var BoardComponents = function BoardComponents(board) {
  this.board = board;
};
($traceurRuntime.createClass)(BoardComponents, ($__1 = {}, Object.defineProperty($__1, "context", {
  get: function() {
    return this.board.repl.context;
  },
  configurable: true,
  enumerable: true
}), Object.defineProperty($__1, "act", {
  value: function(action, component) {
    var j5Component = this.context[component.name];
    var actionFunction = j5Component[action];
    var paramNames = getParamNames(actionFunction);
    var parameters = (function() {
      var $__2 = 0,
          $__3 = [];
      for (var $__4 = paramNames[Symbol.iterator](),
          $__5; !($__5 = $__4.next()).done; ) {
        var name = $__5.value;
        $__3[$__2++] = component.params[name];
      }
      return $__3;
    }());
    actionFunction.apply(j5Component, parameters);
    return getComponent(component.name, this.board.repl.context[component.name]);
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