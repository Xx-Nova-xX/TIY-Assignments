
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

 var playerColor = 0;
 var createPlayer = function(firstName, lastName) {
     return {
         
         firstName : firstName, 
         lastName : lastName,
     }
     if (playerColor === 0){
         playerColor == "black";
         return playerColor;
     }
      else if( playerColor === 1) {
          playerColor == "white";
      }
          
     
     return "Welcome " + firstName + " " + lastName + ". Your color is " + playerColor + ".";
         

 }   
     
 
     
var assert = require('chai').assert;
    
    describe('createPlayer', function() {
       it('should be a function', function() {
           assert.isFunction(createPlayer().solveFor, 'function');
       })
    });
    
    
    
    
    
     
     
  /*   Object.defineProperty (player,firstName),
         value: firstName, 
         return player;
     };
     
     Object.defineProperty (player, lastName) {  
        value : lastName;
     });
     
     Object defineProperty (player, color),
         value : color
     });
    } 
}
     
     
 }  */