// --symbols
require('traceur');
var BoardComponents = require('./board-components');

var pBoard = Symbol();

class MoarInput {
	constructor(board) {
		this[pBoard] = board;
	}

	get board() {
		return this[pBoard];
	}

	go() {
		var components = new BoardComponents(this.board);
		console.log(components.toArray());

	}
}

module.exports = MoarInput;	