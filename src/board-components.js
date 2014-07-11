var componentConfig = require("./component-config");
var typeName = require("./type-name");
var iterationExtensions = require("./iteration-extensions");

function isComponent(value) {
	return typeName(value) in componentConfig;
}

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;

function getParamNames(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '')
  var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES)
  if(result === null)
     result = []
  return result
}

function getAction(name, value) {
	return { name, params: getParamNames(value[name]) };
}

function getComponent(name, value) {
	var result = { name, type: typeName(value) };
	var properties = componentConfig[typeName(value)].properties;

	for(var property of properties) {
		result[property] = value[property]
	}

	if(!result.id) {
		result.id = name;
	}

	result.actions = [ for (name of Object.keys(Object.getPrototypeOf(value))) getAction(name, value) ];

	return result;
}

class BoardComponents {
	constructor(board) {
		this.board = board;
	}

	act(action, component) {
		this.board.repl.context[component.name][action]();
		return getComponent(component.name, this.board.repl.context[component.name]);
	}

	[Symbol.iterator]() {
		var boardContext = this.board.repl.context;

		return iterationExtensions.arrayIterator(
			[ for (name of Object.keys(boardContext)) 
					if(isComponent(boardContext[name])) 
						getComponent(name, boardContext[name]) ]
		);
	}
}

module.exports = iterationExtensions.extend(BoardComponents);














