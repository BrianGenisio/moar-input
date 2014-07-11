"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var BoardComponents = require('./board-components');
var Server = function Server(board) {
  this.app = express();
  this.components = new BoardComponents(board);
  this.configure();
};
($traceurRuntime.createClass)(Server, {
  configure: function() {
    var $__0 = this;
    this.app.use(bodyParser.json());
    this.app.get('/components', (function(request, response) {
      return response.send($__0.components.toArray());
    }));
    this.app.post('/components/:id/:action', (function(request, response) {
      response.send($__0.components.act(request.params.action, request.body));
    }));
    this.app.use(express.static((__dirname + "/public")));
  },
  start: function() {
    var port = arguments[0] !== (void 0) ? arguments[0] : 3000;
    console.log(("Listening on localhost:" + port));
    this.app.listen(port);
  }
}, {});
module.exports = Server;

//# sourceMappingURL=server.js.map