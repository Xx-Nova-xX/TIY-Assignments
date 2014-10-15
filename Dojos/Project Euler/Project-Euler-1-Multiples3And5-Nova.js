/*Problem 1
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
    The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000
*/


var sum = 0; //variable for the sum of all the numbers 

    for (var multipleMaybe = 0; multipleMaybe < 1000; multipleMaybe++) { //multipleMaybe is numbers 1-999 to be passed through 
                                                                        //it starts at 0, checks to see if it is 0-999 and then adds one 
        if(multipleMaybe % 3 === 0 || multipleMaybe %  5 === 0) { //if multipleMaybe is divided by 3 or 5 with a remainder of 0 send to 
        sum += multipleMaybe;            //this is like saying sum = multipleMaybe + multipleMaybe each pass
        }
    }
        console.log(sum); //logs the final total of the multiples
        
        