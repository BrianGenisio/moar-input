var MoarInput = require('../dist/index.js');

module.exports = {
    setUp: function (callback) {
        this.moarInput = new MoarInput({foo: 'bar'});
        callback();
    },

    constructor_stores_board: function (test) {
        test.equals(this.moarInput.board.foo, 'bar');
        test.done();
    }
};