moar-input
==========

A browser-based UI for interfacing with johnny-five hardware.

This is really just a proof of concept at this time.  It supports Led and Piezo components.  Just create a `MoarInput`
server and `go()`.  You can see your hardware and interact with it at http://localhost:3000.  This will be more 
configurable in the future.

```
var five = require("johnny-five");
var MoarInput = require('../moar-input');
var board = new five.Board();

board.on("ready", function() {

  var led = new five.Led(11);
  var piezo = new five.Piezo(13);

  // Inject led object into REPL session
  this.repl.inject({
    led: led,
    piezo: piezo
  });

  new MoarInput(board).go();
});
```
