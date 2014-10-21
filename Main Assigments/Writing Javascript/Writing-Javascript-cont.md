______________________________________________________________________________                                         
*40. var obj = { a: 1 }; var copy = Object.assign({}, obj);*                                                               
<pre><code>                                                                                                            
```javascript                                                                                                          
*  Symbol: var                                                                                                         
     - Type: keyword                                                                                                   
     - Type: variable                                                                                                  
     - Meaning: creates an identifier                                                                                  
     - Operands: obj         
     
*  Symbol: obj                                                                                                         
     - Type: variable object                                                                                           
     - Type: va                                                                                                        
     - Meaning: holds the information for the obj variable                                                             
     - Operands: function operands(){                                                                                  

*  Symbol: =                                                                                                           
     - Type: operator                                                                                                  
     - Type: is assigned to                                                                                            
     - Meaning: shows that one object is assigned to another                                                           
     - Operands: function operands(){                                                                                  
    
*  Symbol: { }                                                                                                         
     - Type: empty library                                                                                             
     - Type: curly braces                                                                                              
     - Meaning: it holds the keys for the library                                                                      
     - Operands: a: 1  
    
*  Symbol: a: 1                                                                                                        
     - Type: library key identifiers                                                                                   
     - Type: keys                                                                                                      
     - Meaning: thse are coordinates to find keys in a library                                                         
     - Operands: function operands(){                                                                                  
```                                                                                                                    
</pre></code>                                                                                                          
______________________________________________________________________________                                         
*41. var copy = Object.assign({}, obj);*                                                                                   
<pre><code>                                                                                                            
```javascript                                                                                                          
                                                                                                                       
*  Symbol: a: 1                                                                                                        
     - Type: library key identifiers                                                                                   
     - Type: keys                                                                                                      
     - Meaning: thse are coordinates to find keys in a library                                                         

*  Symbol: var                                                                                                         
     - Type: variable                                                                                                  
     - Type: variable                                                                                                  
     - Meaning: holds a place for information in functions & objects                                                   

*  Symbol: copy                                                                                                        
     - Type: variable                                                                                                  
     - Type: variable copy                                                                                             
     - Meaning: represents the value of copy                                                                           
    
*  Symbol: =                                                                                                           
     - Type: is assigned to                                                                                            
     - Type: equal sign                                                                                                
     - Meaning: assigns a variable to a value                                                                          
     - Operands: var copy & Object.assign   
     
*  Symbol: Object.assign                                                                                                                             
     - Type: method                                                                                                                                  
     - Type: object dot assign                                                                                                                       
     - Meaning: copies properties from a source object to a target object                                                                            
     - Operands: function operands(){                                                                                                                
```                                                                                                                    
</pre></code>                                                                                                          
______________________________________________________________________________                                         
*42. Object.create = (function() {*                                                                                                                     
<pre><code>                                                                                                                                          
```javascript                                                                                                                                        
                                                                                                                                                     
*  Symbol: Object.create                                                                                                                             
     - Type: method                                                                                                                                  
     - Type: object dot create                                                                                                                       
     - Meaning: creates a new object out of the given object & property by user                                                                      

*  Symbol: =                                                                                                                                         
     - Type: assignment operator                                                                                                                     
     - Type: equal sign, is assigned to                                                                                                              
     - Meaning: assigns a value to a variable                                                                                                        
                                                                                                               
*  Symbol: function()                                                                                                                                
     - Type: function                                                                                                                                
     - Type: anonymous function                                                                                                                      
     - Meaning: an object that always returns a value                                                                                                
                                                                                                            
```                                                                                                                                                  
</pre></code>                                                                                                                                        
______________________________________________________________________________                                                                       
*43. var str = "Hello World!" var res = str.valueOf();*                                                                                                                          
<pre><code>                                                                                                                                          
```javascript                                                                                                                                        
                                                                                                                                                     
*  Symbol: var str                                                                                                                                   
     - Type: variable & variable name                                                                                                                
     - Type: value str                                                                                                                               
     - Meaning: it declares a variable and can also be used to give it a value                                                                       

*  Symbol: =                                                                                                                                         
     - Type: assignment operator                                                                                                                     
     - Type: is assigned to                                                                                                                          
     - Meaning: it assigns a value to a variable 
     
*  Symbol: 'Hello World!'                                                                                                                            
     - Type: string                                                                                                                                  
     - Type: string                                                                                                                                  
     - Meaning: a group of characters, numbers or symbols that is put together inside quotation marks  

*  Symbol: str.valueOf()'                                                                                                                            
     - Type: method                                                                                                                                  
     - Type: dot value of                                                                                                                            
     - Meaning: returns a non-string representation of the object
                                                                                                                                                   
```                                                                                                                                                  
</pre></code>                                                                                                                                        
______________________________________________________________________________
*44. var proto = {}; var obj= Object.create(proto); Object.getPrototypeOf(obj) === proto; // true;*                                                      
<pre><code>                                                                                                                                          
```javascript                                                                                                                                        
                                                                                                                                                     
*  Symbol: { };                                                                                                                                      
     - Type: empty dictionary                                                                                                                        
     - Type: dictionary                                                                                                                              
     - Meaning: it holds keys that are accessed by .     

*  Symbol: Object.create(proto)                                                                                                                      
     - Type: method                                                                                                                                  
     - Type: object dot create being passed the variable proto                                                                                       
     - Meaning: creates a new object with the specified protype object and properties

*  Symbol: Object.getPrototypeOf(obj)                                                                                                                
     - Type: method                                                                                                                                  
     - Type: object dot getPrototype being passed the obj variable                                                                                   
     - Meaning: returns the prototype of the specified object      

*  Symbol: ===                                                                                                                                       
     - Type: assignment operator                                                                                                                     
     - Type: triple equals or strict equals                                                                                                          
     - Meaning: compares two sides for exact similarities and returns true if they are the same   

*  Symbol: //                                                                                                                                        
     - Type: comment                                                                                                                                 
     - Type: single line comment                                                                                                                     
     - Meaning: allows you to type comments on that line after the // 
```                                                                                                                                                  
</pre></code>                                                                                                                                        
______________________________________________________________________________  
*45. var o = Object.freeze(obj);*                                                                                                                        
<pre><code>                                                                                                                                          
```javascript                                                                                                                                        
                                                                                                                                                     
*  Symbol: Object.freeze(obj)                                                                                                                        
     - Type: method                                                                                                                                  
     - Type: object dot freeze                                                                                                                       
     - Meaning: freezes the object - can't be changed, value or name - has to keep the same properties                                               
```                                                                                                                                                  
</pre></code>                                                                                                                                        
______________________________________________________________________________                                                                       
*46. var arr = ["a", "b", "c"]; console.log(Object.keys(arr))*                                                                                           
<pre><code>                                                                                                                                          
```javascript                                                                                                                                        
                                                                                                                                                     
*  Symbol: var arr = ['a', 'b', 'c']                                                                                                                 
     - Type: array                                                                                                                                   
     - Type: it's an array with three string elements                                                                                                
     - Meaning: array holds a list of strings or items and can be called by index, which begins at 0                                                 

*  Symbol: console.log()                                                                                                                             
     - Type: return text to console - returns the value of whatever is in the brackets                                                               
     - Type: console dot log                                                                                                                         
     - Meaning: it lets you put a string into the parameter brackets to be returned at the end of a function or statement                                                                                                                                                    
     
*  Symbol: Object.keys(arr)                                                                                                                          
     - Type: method                                                                                                                                  
     - Type: object dot keys with the array arr in it's parameters                                                                                   
     - Meaning: returns an array of objects taken from an objects enumerable properties, same order as a for...in loop   
```                                                                                                                                                  
</pre></code>                                                                                                                                        
______________________________________________________________________________
*47. var o = {}; o.constructor === Object;*                                                                                                              
<pre><code>                                                                                                                                          
```javascript                                                                                                                                        
                                                                                                                                                     
*  Symbol: {}                                                                                                                                        
     - Type: empty dictionary                                                                                                                        
     - Type: holds keys to call                                                                                                                      
     - Meaning: a dictionary holds keys to use with OOP                                                                                              
                                                                                                                                                     
*  Symbol: o.constructor                                                                                                                             
     - Type: method                                                                                                                                  
     - Type: o dot constructor                                                                                                                       
     - Meaning: returns a reference to an object's function that created the prototype, it's a reference to the function, not the name of the function                                                                                                                                                             

*  Symbol: === Object                                                                                                                                
     - Type: operator and an Object                                                                                                                  
     - Type: triple equal/strict equal and Object is a representation                                                                                
     - Meaning: this means that the o.constructor type is an Object                                                                                                                                                     
```                                                                                                                                                  
</pre></code>                                                                                                                                        
______________________________________________________________________________  
*48. var a = []; a.constructor === Array; // true*                                                                                                       
<pre><code>                                                                                                                                          
```javascript                                                                                                                                        
                                                                                                                                                     
*  Symbol: []                                                                                                                                        
     - Type: array                                                                                                                                   
     - Type: empty array                                                                                                                             
     - Meaning: this is an empty array, arrays hold items starting at 0 index                                                                        

*  Symbol: a.constructor                                                                                                                             
     - Type: method                                                                                                                                  
     - Type: constructor method                                                                                                                      
     - Meaning: this takes a type of variable and checks to see what type it is  
```                                                                                                                                                  
</pre></code>                                                                                                                                        
______________________________________________________________________________
*49. var n = new Number(3); n.constructor === Number; // true*                                                                                           
<pre><code>                                                                                                                                          
```javascript                                                                                                                                        
                                                                                                                                                     
*  Symbol: var n = new Number(3)                                                                                                                     
     - Type: assignment from variable to value                                                                                                       
     - Type: Number creation                                                                                                                         
     - Meaning: called variable n and it is assigned to a new Number with the value of 3                                                             

*  Symbol: n.constructor                                                                                                                             
     - Type: method constructor                                                                                                                      
     - Type: this checks to see what type of variable 'n' is                                                                                         
     - Meaning: checks to see the type for the declared variable 
```                                                                                                                                                  
</pre></code>                                                                                                                                        
______________________________________________________________________________ 
*50. var obj = { a: 1 }; var copy = Object.assign({}, obj);*                                                                                             
<pre><code>                                                                                                                                          
```javascript                                                                                                                                        
                                                                                                                                                     
*  Symbol: var obj = {a:1}                                                                                                                           
     - Type: variable calling a key from a dictionary                                                                                                
     - Type: variable obj  & key a:1                                                                                                                 
     - Meaning: gives obj the value of the a:1 key  

*  Symbol: Object.assign                                                                                                                             
     - Type: copies values from an object to another one                                                                                             
     - Type: object dot assign                                                                                                                       
     - Meaning: copies enumerable and own values from a source object to a target object 
```                                                                                                                                                  
</pre></code>                                                                                                                                        
______________________________________________________________________________                                                                                                                      
                                                                                                                                                    