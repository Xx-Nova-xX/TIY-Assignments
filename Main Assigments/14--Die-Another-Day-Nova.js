
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

  
  var evenOdd = 0;
  var isBlack = "Black's Turn!";
  var isWhite = "White's Turn!";

        
   function whichTurn(evenOdd){
     while(evenOdd <= 10){
       
       if(evenOdd % 2 === 0){
           console.log(evenOdd + " " + isBlack);
           evenOdd++;
           return(isBlack);
       }
           else{ evenOdd % 2 !== 0 
               console.log(evenOdd + " " + isWhite);
               return(isWhite);
           }
   }
   }
    whichTurn(0);
    whichTurn(1);
    whichTurn(2);
    whichTurn(3);
    whichTurn(4);
    whichTurn(5);
    whichTurn(6);
    whichTurn(7);
    whichTurn(8);
    whichTurn(9);
    whichTurn(10);
   
   
   
   
     

     
  
  
  
  
   
  
   

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


/*   function getPlayer(){
      
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
      
  */   