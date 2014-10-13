//Let's Build Conway & take over the world, one cube at a time. 

var board = [
    ["false","false","false"],   //This board is the representation of one 9x9 cell in the Conway game. Each cell has neighbors that will need to be;
    ["false","false","false"],   //checked out & noted before moving trough the array. 
    ["false","false","false"], 
    ];
    
    
        
    var cellStatus = false;   //starts out the cell status as false
      function conway(cell, neighbots){ //calls a function to gather the cells and the neighbor cells
            var liveCells = 0; //starts out with 0 live cells before checking conditions
            neighbots.forEach(function(value, each){
                if (value === true){
                liveCells++;
                }
                if (cell === true){
                    if (liveCells < 2){
                    cellStatus = false;
                }
                if (liveCells < 4){
                    cellStatus === true;
                }
                else if(liveCells > 3){
                    cellStatus === false;
                }
                else{
                    if (liveCells === 3){
                    cellStatus === true;
                    }
                        else{
                        cellStatus === false;
                        }   
                 }
}
});

                    return cellStatus;
                    }
                    

  
    
    var neighbots = [ ]; //These are going to be the coordiantes of each neighbors of each cell. 
    function neighbotsLive(board, x, y){ 
        
        if(x === 0 && y === 0){
            neighbots = [ board[0][1]], [ board[1][1]], [ board[1][0]];
        }
        if(x === 0 && y === 1){
            neighbots = [ board[0][0], board[2][0], board[1][0], board[2][0], board[3][0]];
        }
        if(x === 0 && y === 2){
            neighbots = [ board[1][1], board[0][1], board[1][2]];
        }
        if(x === 1 && y === 0){
            neighbots = [ board[0][0], board[0][1], board[1][1], board[2][0], board[2][1]];
        }
        if(x === 1 && y === 1){
            neighbots = [ board[0][0], board[0][1], board[0][2], board[1][0], board[1][2], board[2][0],board[2][1], board[2][2]];
        }
        if(x === 1 && y === 2){
            neighbots = [ board[0][1], board[0][2], board[1][1], board[2][1], board[2][2]];
        }
        if(x === 2 && y === 0){
            neighbots = [ board[1][0], board[1][1], board[2][1]];
        }
        if(x === 2 && y === 1){
            neighbots = [ board[1][0], board[1][1], board[1][2], board[2][0], board[2][2]]; 
        }
        if(x === 2 && y === 2){
            neighbots = [ board[1][1], board[2][1], board[1][2]];
        }
        
    }
      
    neighbots.forEach(conway);
      

        function tick(board){
            var newBoard = [];
            
            board.forEach(function(value, index){
                value.forEach(function(x,y){
                    newBoard.push(conway(board[index][y], neighbotsLive(board,index,y)));
                });
            });
            
        var row1 = newBoard.splice(0, 3);
        var row2 = newBoard.splice(0, 3);
        board = [row1, row2, newBoard];
        return board;
}

///Testing 1, 2, 3...

        console.log("Got here!");

    /*    var assert = require("assert");
    
        describe('neighbotsLive', function(){
            it("should return a list of neighbor cells in array form", function(){
                assert.deepEqual(neighbotsLive(board, 0, 0),([board[0][1], board[1][0], board[1][1]]));
                });
            });
        describe('conway', function(){
            it("should analyze the list of neighbors for live and dead cells", function(){
                assert.deepEqual(conway(board[0][0], board[0][1], board[1][0], board[1][1]]), false);
            });
        });
        describe('tick', function(){
            it("should create a new board and apply the rules from the conway function", function(){
                assert.deepEqual(tick([
                [false, false, false],
                [false, false, false],
                [false, false, false],
            ]), tick(board2));
            });
        });
        
*/

var assert = require('assert');


describe('neighbotsLive', function(){
  it('should return an array of neighbor values given a cell', function(){
    assert.Equal(neighbotsLive(board[0][0]), ([board[0][1], board[1][0], board[1][1]]));
  });
});

describe('conway', function(){
  it('should return the value of a cell based on its neighbors', function(){
    assert.equal(conway(board[0][0], [board[0][1], board[1][0], board[1][1]]), false);
  });
});

describe('tick', function(){
  it('should return a new board after applying rules from conway', function(){
    assert.deepEqual(tick([
      [ false, false, false ],
      [ false, false, false ],
      [ false, false, false ],
    ]), tick(board2));
  })
})

var board2   = [
                [false, false, false],
                [false, true , false],
                [false, false, false],
                ]
var board3   = [
                [false, false, false],
                [false, true,  false],
                [false, true,  false],
                ]
var board4   = [
                [true,  false, false],
                [false, true,  false],
                [false, false,  true],
                ]
var board5   = [
                [false, true, false],
                [false, true, false],
                [false, true, false],
                ]
var board6   = [
                [false, true, false],
                [true,  true,  true],
                [false, true, false],
                ]
var board7   = [
                [true, true, true],
                [true, true, true],
                [true, true, true],
                ]
                


