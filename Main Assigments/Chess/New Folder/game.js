


    return [
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


/*
@constructor Chess: Setup a board with Pieces representing an initial chessboard.
@method getPlayer()
@return String either "White" or "black" representing current player
@method move(piece, destination): Move piece to destination and...?
@param Piece piece to move
@param Position destination to move piece to
@method opening(): Advance the board to Catalan Opening, Closed Variation
@method display()
@return String representation of board
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
, , , , , , ,
, , , , , , ,
, , , , , , ,
, , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r
@constructor Position(x,y): Represent a position on a chessboard with coordinates
usage: new Position(1,1)
@property Number x coordinate
@property Number y coordinate
@constructor Piece(name, color): Represent a chesspiece on the board with name and color and appropriate starting position
usage: new Piece('Queen', 'black')
@method getName()
@return String name of Piece, e.g. 'Queen', 'Pawn'
@method getColor():
@return String player 'black' or 'white'
@method setPosition(position): Set Piece to position on board
@param Position position
@method toString()
@return String representation of Piece
example: "Q" === String(new Piece("Queen", "white"))
example: "r" === String(new Piece("Rook", "black"))
var boardBegin = [
R = { name: 'Rook', color: 'black', position: [[0,0],[0,7]] },
B = { name: 'Bishop', color: 'black', position: },
N = { name: 'Knight', color: 'black', position:
},
K = {
name: 'King',
color: 'black',
position:
},
Q = {
name: 'Queen',
color: 'black',
position:
},
P = {
name: 'Pawn',
color: 'black',
position:
},
r = {
name: 'Rook',
color: 'white',
position: [[0,0],[0,7]]
},
b = {
name: 'Bishop',
color: 'white',
position:
},
n = {
name: 'Knight',
color: 'white',
position:
},
k = {
name: 'King',
color: 'white',
position:
},
q = {
name: 'Queen',
color: 'white',
position:
},
p = {
name: 'Pawn',
color: 'white',
position:
},
];
boardBegin.forEach(function(value, index){
pieces.push(boardBegin[index] = new Piece(boardBegin[index].name, boardBegin[index].color));
//console.log(value.position = boardBegin[index].position);
//console.log(Rook);
});
*/