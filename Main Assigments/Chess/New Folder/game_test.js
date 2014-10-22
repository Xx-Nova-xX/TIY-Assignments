var chai = require('chai')
    assert = chai.assert,
    expect = chai.expect;

var chess = require('./chess.js');

describe('The Chess Constructor', function(){
    var game;
    it('should be a function', function(){
        expect(chess.Chess).to.be.a(function());
    });
    
    beforeEach(function(){
        game = new chess.Chess;
    });


it('should start with an initial starting position', function (){
    assert.equal(game.display(), [
        "    a   b   c   d   e   f   g   h",
        "  +---+---+---+---+---+---+---+---+",
        "1 | r | n | b | q | k | b | n | r |",
        "  +---+---+---+---+---+---+---+---+",
        "2 | P | P | P | P | P | P | P | P |",
        "  +---+---+---+---+---+---+---+---+",
        "3 |   |   |   |   |   |   |   |   |",
        "  +---+---+---+---+---+---+---+---+",
        "4 |   |   |   |   |   |   |   |   |",
        "  +---+---+---+---+---+---+---+---+",
        "5 |   |   |   |   |   |   |   |   |",
        "  +---+---+---+---+---+---+---+---+",
        "6 |   |   |   |   |   |   |   |   |",
        "  +---+---+---+---+---+---+---+---+",
        "7 | P | P | P | P | P | P | P | P |",
        "  +---+---+---+---+---+---+---+---+",
        "8 | R | N | B | Q | K | B | N | R |",
        "  +---+---+---+---+---+---+---+---+"
    ].join("\n");

};
].join("\n")
);
});
chess.opening();

});