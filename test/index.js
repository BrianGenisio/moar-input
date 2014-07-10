var MoarInput = require('../dist/index.js');

module.exports = {
    constructor_stores_board: function (test) {
    	var moarInput = new MoarInput({foo: 'bar'});
        test.equals(moarInput.board.foo, 'bar');
        test.done();
    }
};