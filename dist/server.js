"use strict";
var express = require('express');
var BoardComponents = require('./board-components');
var Server = function Server(board) {
  this.app = express();
  this.components = new BoardComponents(board);
  this.configure();
};
($traceurRuntime.createClass)(Server, {
  configure: function() {
    var $__0 = this;
    this.app.get('/components', (function(request, response) {
      return response.send($__0.components.toArray());
    }));
  },
  start: function() {
    this.app.listen(3000);
  }
}, {});
module.exports = Server;

//# sourceMappingURL=server.js.map