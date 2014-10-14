<strong>* .length </strong>= <em>arr.length</em>

<em>arr.length</em> - tells you how many elements are in an array

&nbsp;

var letters = [ ‘a’, ‘b’, ‘c’, ‘d’]; à letters.length = 4

&nbsp;

<strong> </strong>

<strong>* .copyWithin </strong> = <em>arr.copyWithin(target, start[, end = this.length])</em>

<strong> </strong>

arr.copyWithin – copies the sequence of array elements in the array.

- Target: tells you the start index position to copy to

- Start: index position where it starts copying to

- End: Optional. Where to end copying the elements from

&nbsp;

[1, 2, 3, 4, 5].copywithin(0, 3); à [4,5,3,4,5]

&nbsp;

<strong> </strong>

<strong>*.fill = </strong><em>arr.fill(value[, start = 0[, end = this.length]])</em>

&nbsp;

<em>arr.fill</em> – fills all array elements from start to end with a static value

- Value: static value to fill the array

- Start: Optional – index to start

- End: Optional – index to end

&nbsp;

[1, 2, 3].fill(4) à [4, 4, 4]

&nbsp;

&nbsp;

<strong>*.pop </strong>= <em>arr.pop()</em>

<em>arr.pop</em> – removes the last element of the array and returns that element

&nbsp;

var myCars = [‘Toyota’, ‘Lexus’, ‘Lambo’, ‘Bugatti’];

var popped = myCars.pop();

console.log(myCars); à [‘Toyota’, ‘Lexus’, ‘Lambo’,]

console.log(popped); à ‘Bugatti'

&nbsp;

&nbsp;

<strong>*.push </strong>= <em>arr.push(element1, …, element)</em>

<em>arr.push</em> – adds one or more elements to the end of an array and returns the new length of the array

- elementN: the elements to add to the array

&nbsp;

var sports = [‘basketball’, ‘hokey’];

var total = sports.push(‘football’, ‘swimming’);

console.log(sports): à ‘basketball’, ‘hockey’, ‘football’, ‘swimming’]

console.log(total); à 4

<strong>*.reverse = </strong><em>arr.reverse()</em>

<em>arr.reverse</em> - takes an array and lists it backwards.

&nbsp;

Var myArray = [‘one’, ‘two’, ‘three];

myArray.reverse();

console.log(myArray) à ‘three’, ‘two’, ‘one’

&nbsp;

&nbsp;

<strong>*.shift() </strong>= <em>arr.shift()</em>

<em>arr.shift</em> – removes the [0] index spot and shifts the values.

&nbsp;

var myFish = [‘angel’, ‘clown’, ‘mandarin’, ‘betta’];

console.log(‘myFish before: ‘ + myFish);

var shifted = myFish.shift();

console.log(‘myFish after: ‘ + myFish); à clown, mandarin, betta

console.log(‘Removed this element: ‘ + shifted); à angel

&nbsp;

&nbsp;

<strong>*sort() </strong> = <em>arr.sort)[compareFunction])</em>

<em>arr.sort</em> – sorts an array’s elements according to string Unicode code points. Can sort Objects by feeding it the value of one of their properties.

&nbsp;

- compareFunction: Optional. Specifies a function that defines the sort order                                     but if it’s undefined it goes by Unicode code order.

&nbsp;

Ex.1: Var fruit[‘apples’, ‘bananas’, ‘Cherries’];

fruit.sort(); à [‘Cherries’, ‘apples’, ‘bananas’];

&nbsp;

&nbsp;

<strong>*.splice()</strong> = <em>array.splice(index, howMany[, element1[, …[, elementN]]])</em>

<em>splice()</em> changes array elements by adding new ones &amp; removing old

&nbsp;

- index: index to begin changing the array. If &gt; array length

it starts at the length of the array

- howMany: integer indicating the number of old array elements to

remove.

- element<em>N</em>: the elements to add to the array. If none are specified splice

simply removes elements from the array

&nbsp;

var myFish = [ 'angel', 'clown', 'mandarin', 'surgeon' ];

var removed = myFish.splice(2, 0, 'drum'); à removes 0 elements from index 2

and inserts 'drum'

à myFish is [ 'angel', 'clown', 'drum', 'mandarin', 'surgeon' ]

&nbsp;

<strong>*.unshift() </strong>= <em>arr.unshift([element1[, …[, elementN]]])</em>

<em>unshift()</em> method adds one or more elements to the start of an array &amp; returns

new array length

&nbsp;

element<em>N</em>: elements to add to the start of the array

&nbsp;

var arr = [ 1, 2];

arr.unshift(0); à arr is [0, 1, 2]     //result of call is 3, the new array length

&nbsp;

arr.unshift(-2, -1); à = 5 à arr is [-2, -1, 0, 1, 2]

&nbsp;

&nbsp;

<strong>*.concat() </strong>= <em>var new_array = old_arry.concat(value1[, value2[, …[, valueN]]])</em>

<em>concat()</em> returns a new array made up of the original array to join the two.

&nbsp;

value<em>N</em>: arrays and/or values to concatenate into a new array

&nbsp;

var alpha = [ 'a', 'b', 'c'],

numeric = [ 1, 2, 3 ];

&nbsp;

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); à [ 'a', 'b', 'c', 1, 2, 3 ]

&nbsp;

&nbsp;

<strong>*.contains() </strong>= <em>array.contains(searchElement[, fromIndex])</em>

<em>.contains</em>: looks for an element in an array &amp; return a true or false value

&nbsp;

- searchElement: element to search for

&nbsp;

[1, 2, 3].contains(2); à true                                   [1,2,3].contains(3, 3); à false

[1, 2, 3].contains(4); à false                                  [1,2,3].contains(3, -1); àtrue

&nbsp;

&nbsp;

<strong>*.join() </strong><em>= str = arr.join([separator = ','])</em>

<em>join() </em>calls all elements of an array into a string

&nbsp;

var a = new Array('Wind, 'Rain', 'Fire');

var myVar1 = a.join(); à assigns 'Wind,Rain,Fire'

var myVar2 = a.join(',') à assigns 'Wind, Rain, Fire'

var myVar3 = a.join(' + ') à assigns 'Wind + Rain + Fire'

&nbsp;

&nbsp;

<strong>*.slice() </strong>= <em>arr.slice([begin[, end]])</em>

<em>.slice() </em>method removes elements in an array and holds them in a variable

&nbsp;

var fruits = [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ];

var citrus = fruits.slice(1, 3); à citrus = [ 'Orange', 'Lemon' ]

&nbsp;

<strong>*.toSource()</strong> = <em>arr.toSource</em>

<em>.toSource </em>returns a string representation of the source code of the array

&nbsp;

var alpha = new Array ( 'a', 'b', 'c' );

alpha.toSource(); à returns [ 'a', 'b', 'c' ]

&nbsp;

&nbsp;

<strong>*.toString() </strong>= <em>arr.toString()</em>

<em>.toString </em> returns a string that represents the elements of the specified array

&nbsp;

var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr'];

var myVar = monthNames.toString(); à assigns 'Jan,Feb,Mar,Apr' to myVar

&nbsp;

<strong>*.toLocaleString() </strong>= <em>arr.toLocaleString()</em>

<em>.toLocalString </em>returns a string that represents the elements of the array

&nbsp;

var number = 1337;

var date = new Date();

var myArr = [number, date, 'foo'];

var str = myArr.toLocaleString();

console.log(str); à '1.337,6.12.2013 19:37:35,foo' //in a German (de-DE) locale

with timezone Europe/Berlin

<strong>*.indexOf() </strong>= <em>arr.indexOf(searchElement[, fromIndex = 0])</em>

<em>.indexOf()</em> returns the first index where the specified array element can be found

&nbsp;

var array = [2, 5, 9];

var index = array.indexOf(2); à index is 0

index = array.indexOf(7); à index is -1

index = array.indexOf(9,2); à index is 2

index = array.indexOf(2, -1) à index is -1

&nbsp;

<strong>*lastIndexOf() </strong>= <em>arr.lastIndexOf(searchElement[, fromIndex = arr.length])</em>

<em>.lastIndexOf </em>returns the last index number where the element is in the array or -1 if it isn't an element in the array.

&nbsp;

var array = [2, 5, 9, 2];

var index = arr.lastIndexOf(2); à 3

index = arr.lastIndexOf(7); à -1

index = arr.lastIndexOf(2,3) à 3

index = array.lastIndexOf(2,2) à 0

&nbsp;

&nbsp;

<strong>*.forEach </strong>= <em>arr.forEach(callback[, thisARG])</em>

&nbsp;

executes a function you create once per array element

function logArrayElements(element, index, array){

console.log['a]' + index + '] = ' + element);

}

[2, 5, , 9].forEach(logArrayElements);

a[0] = 2

a[1] = 5

a[3] = 9

&nbsp;

&nbsp;

<strong>*.entries() </strong>= <em>arr.entries();</em>

<em>.entries() </em> returns a new Array Interator object that contains the key/value pairs for each index in the array.

&nbsp;

var arr = ['a', 'b', 'c'];

var eArr = arr.entries();

&nbsp;

console.log(eArr.next().value; à [0, 'a']

console.log(eArr.next().value; à [1, 'b']

console.log(eArr.next().value; à[2, 'c']

&nbsp;

&nbsp;

<strong>*.every() </strong>= <em>arr.every(callback[, thisArg])</em>

<em>.every()</em> tests to see if all elements in the array pass the test implimented by the function

&nbsp;

function isBigEnough(element, index, array) {

return element &gt;= 10;

}

var passed = [12, 5, 8, 130, 44].every(isBigEnough); à false

passed = [12, 54, 18, 130, 44].every(isBigEnough); à true

&nbsp;

&nbsp;

<strong>*.some() </strong>= <em>arr.some(callback[, thisArg])</em>

<em>.some()</em> tests to see if some array elements pass the test implimented by the function

&nbsp;

function isBigEnough(element, index, array) {

return element &gt;= 10;

}

var passed = [2, 5, 8, 1, 4].some(isBigEnough); à false

var passed = [12, 5, 8, 1, 4].some(isBigEnough); à true

&nbsp;

&nbsp;

<strong>*.filter() = </strong><em>arr.filter(callback[, thisArg])</em>

<em>.filter() </em>creates a new array with all the elements that pass the test parameters provided by the function

&nbsp;

function isBigEnough(element) {

return element &gt;= 10;

}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough); à filtered is [12, 130, 44]

&nbsp;

&nbsp;

<strong>*.find() </strong>= <em>arr.find(callback[, thisArg])</em>

<em>.find()</em> returns an array value if the element satisfies the test function, otherwise it is undefined

&nbsp;

function isPrime(element, index, array){

var start = 2;

while start = 2;

while(start &lt;= Math.sqrt(element)) {

if (element % start++ &lt; 1) {

return false;

}

}

return element &gt; 1;

}

console.log([4, 6, 8, 12].find(isPrime)); à undefined, not found

console.log([4, 5, 8, 12].find(isPrime)); à 5

&nbsp;

&nbsp;

<strong>*.findindex() </strong>= <em>arr.findIndex(callback[, thisArg])</em>

<em>.findindex()</em> returns and index in the array if testing function is satisfied, otherwise it   returns -1

&nbsp;

function isPrime(element, index, array) {

var start = 2;

while (start &lt;= Math.sqrt(element)) {

if (element % start++ &lt; 1){

return false;

}

}

return element &gt; 1;

}

console.log([4, 6, 8, 12].findIndex(isPrime)); à -1, not found

console.log([4, 6, 7, 12].findIndex(isPrime)); à 2

&nbsp;

&nbsp;

<strong>*keys() </strong>= <em>arr.keys()</em>

<em>.keys() </em>returns a new Array Interator that contains the keys for every index in the array

&nbsp;

var arr = [ 'a', 'b', 'c' ];

var earr = arr.keys();

console.log(eArr.next().value); à 0

console.log(eArr.next().value); à 1

console.log(eArr.next().value); à 2

&nbsp;

&nbsp;

<strong>*map() </strong><em>= arr.map(callback[, thisArg])</em>

<em>.map() </em>calls a function on every element and creates a new array with the results

&nbsp;

var numbers = [1, 4, 9];

var roots = numbers.map(Math.sqrt); à roots = [1, 2, 3], numbers stays the same

&nbsp;

var numbers = [1, 4, 9]; //ASCII encoding representation

var a = map.call('Hello World' , function(x) { return x.charCodeAt(0); });

à a = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

&nbsp;

&nbsp;

<strong>*reduce() </strong> = <em>arr.reduce(callback[, initialValue])</em>

<em>.reduce()</em> applies a function against an accumulator &amp; each value in the array from left to right has to reduce it to a single value

&nbsp;

var total = [0, 1, 2, 3].reduce(function(a, b) {

return a + b;

}); à 6

&nbsp;

var flattened = [[0,1], [2,3], [4,5]].reduce(function(a,b) {

return a.concat(b);

}); à flattened is [0,1,2,3,4,5]

&nbsp;

&nbsp;

<strong>*.reduceRight() </strong>= <em>arr.reduceRight(callback[, initalValue])</em>

<em>.reduceRight() </em>applies a function against an accumulator – each array element from right to left has to reduce it to a single value

&nbsp;

var total = [0,1,2,3].reduceRight(function(a,b) {

return a + b;

}); à 6

&nbsp;

var flattened = [[0,1], [2,3], [4,5]].reduceRight(function(a,b) {

return a.concat(b);

}, []); à flattened is [4,5,2,3,0,1]

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

<strong> </strong>

&nbsp;

<strong> </strong>

<strong> </strong>
