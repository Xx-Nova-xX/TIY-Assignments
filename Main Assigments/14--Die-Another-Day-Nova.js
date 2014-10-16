


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
            
            
    /*  ['0,0','0,1','0,2','0,3','0,4','0,5','0.6','0,7']
        ['1,0',                                         ]
        ['2,0',                                         ]
        ['3,0',                                         ]
        ['4,0',                                         ]
        ['5,0',                                         ]
        ['6,0',                                         ]
        ['7,0',                                         ] */
        
var numTurns = 0;
    
    function getPlayer(){
      
      for(var black = 2; numTurns < 8000; black++){
        black % 2 === 0;
        numTurns++;
        console.log("It's black's turn");
      }
      
      for(var white = 3; numTurns < 8000; white++){
      numTurns++;
      console.log("It's white's turn!");
      }
      
    }
  
  
   

/*

function test(actual, expected, success){
    if (success === undefined) success = 'pass!';

    assert.strictEqual(actual, expected);

    console.log(success);
}


//Tests//



 */

    var assert = require('assert');

    describe('getPlayer', function(){
    var S;
    
    beforeEach(function(){
        S = solution();
    });

    describe('getPlayer', function(){
        it('should tell the user if it is black or whites turn', function(){
            assert.isFunction(getPlayer());
        
          
        });
        
          if (success === undefined) success = 'pass!';
  
           assert.strictEqual(actual, expected);
           console.log(success);

           });
 
  
});



