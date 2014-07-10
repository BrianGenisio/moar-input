"use strict";
require('traceur');
var pBoard = Symbol();
var MoarInput = function MoarInput(board) {
  this[pBoard] = board;
};
($traceurRuntime.createClass)(MoarInput, {get board() {
    return this[pBoard];
  }}, {});
module.exports = MoarInput;

//# sourceMappingURL=index.js.map