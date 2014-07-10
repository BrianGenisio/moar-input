var express = require('express');
var BoardComponents = require('./board-components');

class Server {
  constructor(board) {
    this.app = express();
    this.components = new BoardComponents(board);
    this.configure();
  }

  configure() {
    this.app.get('/components', (request, response) => response.send(this.components.toArray()) );
  }

  start() {
    this.app.listen(3000);
  }
}

module.exports = Server;