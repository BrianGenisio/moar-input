"use strict";
require('traceur');
var Server = require('./server');
var pBoard = Symbol();
var pServer = Symbol();
var MoarInput = function MoarInput(board) {
  this[pBoard] = board;
  this[pServer] = new Server(board);
};
($traceurRuntime.createClass)(MoarInput, {
  get board() {
    return this[pBoard];
  },
  go: function() {
    this[pServer].start();
  }
}, {});
module.exports = MoarInput;

//# sourceMappingURL=index.js.map