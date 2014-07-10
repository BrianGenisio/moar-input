"use strict";
require('traceur');
var BoardComponents = require('./board-components');
var pBoard = Symbol();
var MoarInput = function MoarInput(board) {
  this[pBoard] = board;
};
($traceurRuntime.createClass)(MoarInput, {
  get board() {
    return this[pBoard];
  },
  go: function() {
    var components = new BoardComponents(this.board);
    console.log(components.getComponents());
  }
}, {});
module.exports = MoarInput;

//# sourceMappingURL=index.js.map