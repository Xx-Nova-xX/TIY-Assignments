##JavaScript Code Breakdown Assignment Xx-Nova-Xx
______________________________________________________________________________

Part 1: 

*If/Else Statement (Conditional Statement)*
<pre><code>
```javascript

                          if(this.playSounds=!true){
                              this.playSounds = false;
                              this.soundButton.frameName = 'soff';
                          }
                          else{
                              this.playSounds == true;
                              this.soundButton.frameName = 'so';
                          }
                          
```
</pre></code>

*== (equals)
*if (conditional command)
*else (conditional command)
*; (block end)
*!= (not equal)

______________________________________________________________________________
*booleen statement*
<pre><code>
```javascript

                     this.canMove=false;
                     Boolean(y);
```
</pre><code>

*this.canMove (variable)
*=false (booleen output)
__________________________________________________________________________


*If/Then Statement*
<pre><code>

```javascript
                       
                          if ( (score >= 10) && (outcome <= 100) ) {
                          System.out.println("Keep it going!");
                                                                        }
                                                                        
```
</pre></code>
                                                                        
*>= (Greater than or equal to operator)
*"Keep it going!" (string)
*&& ("and" logical operator)

____________________________________________________________________________

*Variable Length*
<pre><code>
```javascript

                     var length = this.snake.length;
 
```
</pre></code>

*var length (variable length command)
*this.snake.length (value)

______________________________________________________________________________
             
<br>
<br>
             
             
PART 2: 
______________________________________________________________________________

*Assigned To*

<pre><code>
```javascript

var numPassengers = 0

```
</pre></code>
" = " means "assigned to"
______________________________________________________________________________

*Console.Log && "\n"*
<pre><code>
```javascript

console.log("\"Old Faithful\" at Yellowstone National Park \nAverage eruption height today: " + avgHeight + "\nNumber of eruptions: " + numEruptions);

```
</pre></code>

"console.log" = print contents to the console
"\n" = new line
______________________________________________________________________________

*While Loop && decrease function*

<pre><code>
```javascript

while(num > 0) {
  console.log(num);
  num--;
}
```
</pre></code>

"while loop" - takes in a condition and while it is true it runs the parameters
"num--" - decreases the variable's worth by 1 on each pass
______________________________________________________________________________

*Variables &  <=,*

<pre><code>

```javascript

var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while(monthNumber <= monthsToPrint) {
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}

```
</pre></code>

"variable numSheep = 4" = calling the variable numSheep and giving it the value of 4
"<=" = less than or equal to

______________________________________________________________________________

*Boolean, alert(), if/else*

<pre><code>

```javascript

var parkIsOpen = false;
if(parkIsOpen){
  alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
  alert("Sorry, the Badlands are particularly bad today. We're closed!");
}
```
</pre></code>

______________________________________________________________________________
"varParkIsOpen = false" = booleen value or true/false<br>
"alert()" = pop up a box to alert the user<br>
"if/else" = dual conditions statement = if the first set of conditions are true in the if, it runs - if not, it runs the    conditions in "else"

______________________________________________________________________________

*prompt() &&  confirm()*

<pre><code>

```javascript


var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");

```
</pre></code>

- 'prompt' = pops a box up that asks the user for input
- 'confirm' = pops a box up that asks for confirmation on a prompt function

_____________________________________________________________________________

*multiply or astrisk*

<pre><code>

```javascript

function multiplyTrio(a, b, c){
  return a*b*c;
  
```
</pre></code>

"*" = multiply operator

_____________________________________________________________________________

*array index*

<pre><code>

```javascript

list[3] = 4;
  
```
</pre></code>

When using [] around a number you are calling the index of an array

_____________________________________________________________________________

*==, 'string', .length, & return*

<pre><code>

```javascript

function numStrings(list) {
  var count = 0;
  for (var i = 0; i < list.length; i++){
    if( typeof list[i] == "string" ){
      count++;
    }
  }
  return count;
}
  
```
</pre></code>

- '==' means it is equal to
- .length = add this to a element to find out the length of it
- 'string' = is a represnataion of word or sentences
- return = tells the program to end the loop and/or return a value

_____________________________________________________________________________

_____________________________________________________________________________

*array list*

<pre><code>

```javascript

var list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
```
</pre></code>

array list = a list of objects, numbers, strings that is kept in order and can be pulled from, added to, taken away from etc.


_____________________________________________________________________________

