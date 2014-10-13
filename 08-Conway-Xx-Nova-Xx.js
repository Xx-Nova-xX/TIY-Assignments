//Let's Build Conway & take over the world, one cube at a time. 

var board = [
    ["false","false","false"],   //This board is the representation of one 9x9 cell in the Conway game. Each cell has neighbors that will need to be;
    ["false","false","false"],   //checked out & noted before moving trough the array. 
    ["false","false","false"], 
    ];
    
    var neighbots = []; //These are going to be the coordiantes of each neighbors of each cell. 
    function neighbotsOfLive(board, x, y){ 
        
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
    
    var cellStatus = false;   //starts out the cell status as false
      function conway(cells, neighbots){ //calls a function to gather the cells and the neighbor cells
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