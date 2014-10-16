
var board = [
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],    
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            [' ', ' ', ' ','  ','  ','  ','  ','  '],
            [' ', ' ', ' ','  ','  ','  ','  ','  '],
            [' ', ' ', ' ','  ','  ','  ','  ','  '],
            [' ', ' ', ' ','  ','  ','  ','  ','  '],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
            ];

  
  
     function getPlayer(){
      
     for(var turn = 0; turn <= 10; turn++){
       console.log(turn);
        if(turn % 2 === 0){
            console.log("It's black's turn");
            return "It's black's turn";
        
        } else {
            console.log("It's white's turn");
            return "It's white's turn";
         }
        }
     
   
    var assert = require('assert');

      describe('getPlayer()', function(){
          it('should cycle through black and white', function(){
              
              assert.equal(getPlayer(0), "It's black's turn");
              assert.equal(getPlayer(1), "It's white's turn");
              assert.equal(getPlayer(2), "It's black's turn");
              assert.equal(getPlayer(3), "It's white's turn");
              assert.equal(getPlayer(4), "It's black's turn");
              assert.equal(getPlayer(5), "It's white's turn");
              assert.equal(getPlayer(6), "It's black's turn");
          });
      });
      
   

  /*      
var turn = 0;
      
      function getPlayer(){
        
      if (turn % 2 === 0){
        turn++;
        console.log("It's black's turn!");
      }
        else{
          turn++;
          console.log("It's white's turn!");
        }
     
      }
      
    var assert = require('assert');

describe('getPlayer()', function(){
    it('should cycle through black and white', function(){
        
        assert.equal(getPlayer(0), 'black');
        assert.equal(getPlayer(1), 'white');
        assert.equal(getPlayer(2), 'black');
        assert.equal(getPlayer(3), 'white');
        assert.equal(getPlayer(4), 'black');
        assert.equal(getPlayer(5), 'white');
    });

});



*/
