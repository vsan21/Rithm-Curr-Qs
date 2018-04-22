//CLOSURE

//1. What is a closure?
//A closure is when a function is able to access variables from an outer function that has already been returned.
    //exists when inner function is returned && inner function makes use of the outer function's variables

//2. List two reasons why closures are useful.
//a) Create "private" variables
//b) Gives us the chance to access those private variables from another function

//3. What is a module?
//A module is a piece of code that is encapsulated and can be reused quite easily

//4. Why do we call arguments an array-like-object?
//They create an array from what you pass in, and you can index into them like arrays. The difference here is that you cannot use Array methods on arguments.

//5. Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.

function createCounter () {
  var count = 0;
  return function() {
    return ++count;
  }
}

var firstCounter = createCounter();
firstCounter();   //1
firstCounter();   //2

var secondCounter = createCounter();
secondCounter();  //1
secondCounter();  //2

firstCounter();   //3
//the second doesn't affect the first, each have their own "count" variable with different values. 
