//HIGHER-ORDER FUNCTIONS/CALLBACKS

//PRACTICE:
//1. Write a function called "each" which accepts 2 parameters: array, callback function. The each function should loop over the array passed to it and run the callback function on each element in it.
function each (arr, fn) {
  for(let num of arr) {
    //this is where the callback function is being invoked (and passed "num")
    //we don't want to use "return" here because it will stop the loop
    fn(num);
  }


each([1,2,3,4], function(val){
    console.log(val);
});
// 1
// 2
// 3
// 4

//EXERCISE:
//1. Write a function called "map" which accepts 2 parameters: array, callback function. The map function should return a new array with the result of each value being passed to the callback function.
function map (arr, fn) {
  let newArr = [];
  for(let num of arr) {
    let value = fn(num);
    newArr.push(value);
  }
  return newArr;
}

describe('', function() {
  it('', function() {
    expect(map([1,2,3,4], function(val){
        return val * 2;
    })).toEqual([2,4,6,8])
  });
});

//2. Write a function called "reject" which accepts 2 parameters: array, callback function. The reject function should return a new array with all of the values that do not return true to the callback.
function reject (arr, fn) {
  let newArr = [];
  for(let num of arr) {
    if(fn(num) === false) {
      newArr.push(num);
    }
  }
  return newArr;
}

describe('', function() {
  it('', function() {
    expect(reject([1,2,3,4], function(val){
        return val > 2;
    })).toEqual([1,2])
  });
  it('', function() {
    expect(reject([2,3,4,5], function(val){
        return val % 2 === 0;
    })).toEqual([3,5])
  });
});

//TIMERS:
//1. What is the difference between "setTimeout" and "setInterval" --> they both are use to tell a code to execute after a specific amount of time. In addition, they both accept a callback function and a time (in milliseconds). The difference:
//setTimeout --> runs the callback function to be executed once
//setInterval --> runs the callback function to be executed an infinite amount of times, until the timer clears (i.e. implementing clearInterval or clearTimeout)

//2. What is the difference between using setInterval and a loop? --> setInterval executes code after a specific amount of time and will continue to run until there is a clear. With loop, it will execute code currently on the stack and put any asynchronous events (i.e. setTimeout) in a queue to be executed once the stack is clear.

//3. Why is it so important to store the result of setInterval and setTimeout in a variable. --> it is particularly very important with setInterval because it will keep running the callback function until you stop it (i.e. clear)

//4. What does asynchronous mean in the context of setTimeout and setInterval? --> they are functions that accept callback functions, and callback functions allow us to manage asynchronous code. In other words, these functions are put
