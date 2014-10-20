var Chess = require("/ChessBoard-class-dojo.js").Chess;
var newPosition = require("/ChessBoard-class-dojo.js").Position;
var Piece = require("/ChessBoard-class-dojo.js").Piece;

var assert = require('chai').assert;

describe('Position', function() {
   it('should have a function Position()',  function(){
        assert.isFunction(Piece, "NOOOOOO!"); 
    });
   it('should test x/y coordinates', function(){
        var aPosition = new newPosition(2,3);
        assert.strictEqual(aPosition.x, 2); 
    });
});

describe('Piece', function() {
    it('should have a function Position()',  function(){
        assert.isFunction(Piece, "Stupid!");
    });
});
describe('Chess', function() {
    it('should have a function Chess()',  function(){
        assert.isFunction(Chess, "Stupid!");
    });
});



