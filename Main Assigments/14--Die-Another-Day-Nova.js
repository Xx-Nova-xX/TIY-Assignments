


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
 /*       
var numTurns = 0;
var white = 0
    
    function getPlayer(){
      
      for(var black = 0; numTurns < 5; black++){
        black % 2 === 0;
        numTurns++;
        console.log("It's black's turn!");
      }
        if(white < 1000){
          console.log("It's white's turn!");
        }
        
    }
  */
  
 /* var turn = 0;
  
    
      while (turn % 2 === 0){
        turn++;
        console.log("It's black's turn");
      }
          turn++;
          console.log("It's white's turn");
          
          
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
              assert.equal(getPlayer(6), 'black');
          });
      });
      
  

      */
      
      
      
      
      
      
      
      
    
      
var numTurns = 0;
var turn = 0;
      
      function getPlayer(turn){
        
      if (turn % 2 === 0){
        numTurns++;
        console.log("It's black's turn!");
      }
        else{
          numTurns++;
          console.log("It's white's turn!");
        }
     
  
    var assert = require('assert');

describe('getPlayer()', function(){
    it('should cycle through black and white', function(){
        assert.equal(getPlayer(1), 'black');
        assert.equal(getPlayer(1), 'white');
        assert.equal(getPlayer(2), 'black');
        assert.equal(getPlayer(3), 'white');
        assert.equal(getPlayer(4), 'black');
        assert.equal(getPlayer(5), 'white');
    });

});


 }


/*

function test(actual, expected, success){
    if (success === undefined) success = 'pass!';

    assert.strictEqual(actual, expected);

    console.log(success);
}


//Tests//







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
*/