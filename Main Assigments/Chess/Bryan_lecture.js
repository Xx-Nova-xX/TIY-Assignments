var expect = require('chai').expect

var ralph = { name: 'Ralph', gender: 'm'}
var fabi = { name: 'Fabi', gender: 'f' }
var dave = { name: 'Dave', gender: 'm' }

ralph.gender;
ralph['gender'];

var pluck = function(collection, property) {
    var plucked = [ ];
    collection.forEach(function(element, index, array){
      plucked.push(element[property]);  
    })
    return plucked;
};

describe('the pluck function', function(){
    it('should give back an array of strings when the property being plucked is a string', function() {
        var collection = [ ralph, fabi, dave ]
        expect(pluck(collection, 'gender')).to.deep.eq(['m', 'f', 'm']);
    });
});

var remove = function(collection, callback) {
    var removed = [];
    collection.forEach(function(element, index, array){
        if (callback(element) === true){
        removed.push(element);
        }
    })
    return removed;
    }

describe('the remove function', function() {
    it('returns an array of numbers for which a callback funciton is true', function(){
        var collection = [ 1, 2, 3, 4]
        var callback = function(n) { return true }
        expect(remove(collection, callback)).to.deep.eq([1, 2, 3, 4]);
    });
    it('returns the even numbers of an array when the callback is true only for even functions', function() {
        var collection = [1,2,3,4];
        var callback = function(n) {
            return n % 2 === 0
                return true;
            }
        
    });
});
        








/*
var ralph = { name: 'Ralph', gender: 'm'}
var fabi = { name: 'Fabi', gender: 'f' }
var dave = { name: 'Dave', gender: 'm' }

ralph.gender;
ralph['gender'];

var pluck = function(collection, property) {
    var plucked = [ ];
    collection.forEach(function(element, index, array){
      plucked.push(element[property]);  
    })
    return plucked;
};

describe('the pluck function', function(){
    it('should give back an array of strings when the property being plucked is a string', function() {
        var collection = [ ralph, fabi, dave ]
        expect(pluck(collection, 'gender')).to.deep.eq(['m', 'f', 'm']);
    });
});
*/