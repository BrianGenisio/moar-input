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

    this.app.use(express.static(`${__dirname }/public`));
  }

  start(port = 3000) {
    console.log(`Listening on localhost:${port}`);
    this.app.listen(port);
  }
}

module.exports = Server;  