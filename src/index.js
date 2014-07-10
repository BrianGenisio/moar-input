// --symbols
require('traceur');
var Server = require('./server');

var pBoard = Symbol();
var pServer = Symbol();

class MoarInput {
	constructor(board) {
		this[pBoard] = board;
		this[pServer] = new Server(board);
	}

	get board() {
		return this[pBoard];
	}

	go() {
		this[pServer].start();
	}
}

module.exports = MoarInput;	