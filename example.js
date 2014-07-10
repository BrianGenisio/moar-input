var five = require("../johnny-five");
var MoarInput = require('./');
var board = new five.Board();

board.on("ready", function() {

  var led = new five.Led(13);

  // Inject led object into REPL session
  this.repl.inject({
    led: led
  });

  new MoarInput(board).go();
});