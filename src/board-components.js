var componentConfig = require("./component-config");
var typeName = require("./type-name");
var iterationExtensions = require("./iteration-extensions");

function isComponent(value) {
	return typeName(value) in componentConfig;
}

function getComponent(name, value) {
	var result = { name };
	var properties = componentConfig[typeName(value)].properties;

	for(var property of properties) {
		result[property] = value[property]
	}

	if(!result.id) {
		result.id = name;
	}

	return result;
}

class BoardComponents {
	constructor(board) {
		this.board = board;
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














