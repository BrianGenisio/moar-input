// --symbols
require('traceur');

var pBoard = Symbol();

class MoarInput {
	constructor(board) {
		this[pBoard] = board;
	}

	get board() {
		return this[pBoard];
	}
}

module.exports = MoarInput;	