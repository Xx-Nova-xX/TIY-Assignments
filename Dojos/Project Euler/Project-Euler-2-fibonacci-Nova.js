/* === PRODUCTION CODE === 
/*Problem 2
   * Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
   * By starting with 1 and 2, the first 10 terms will be:
   * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

   * By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
   * find the sum of the even-valued terms.*/


function solution(){
    return {
       solveFor: function(limit){ /* perform magic... */ },
       fibonacci: function(limit){/* . . . */ },
       filterEvens: function(list){ /* . . . */ },
       sum: function(list){
           var sumEvens = list.reduce(function(a,b) {
               return a + b;
           });
           return sumEvens;
        } //END sum
    }
} 



    assert = require('chai').assert;
    
    
    describe('sum', function(){
        it('should return a function', function() {
        assert.isFunction(solution().sum, 'function');   
        });
        it('should sum an array of numbers', function(){
           assert.strictEqual(solution().sum([1,2,3]), 6);
        });
        /*it( 'should return even numbers', function() {
        assert.equal(filterEvens(2), 2);
        });
        it('should return an array of evens', function() {
        assert.deepEqual(fibonacci.filter(filterEvens), [ 2, 8, 34 ]);
        });*/
        
    });

   