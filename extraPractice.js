//Challenge 1: Write a function called createStudent, which accepts two parameters, firstName and lastName. The function should return an object with the keys firstName and lastName and the values should be each of the strings.
function createStudent (firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName
  }
}

//C1.1: Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students (Tim Garcia, Matt Lane, Elie Schoppik)
var tim = createStudent('Tim', 'Garcia');
var matt = createStudent('Matt', 'Lane');
var elie = createStudent('Elie', 'Schoppik');

var students = [tim, matt, elie];


//C1.2: Write a function called findStudentByFirstName, which accepts one parameter, name. This function should iterate through the students array you just made. If the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization
function findStudentByFirstName (name) {
  let lowerCasedName = name.toLowerCase();
  for(let person of students) {
    if(person.firstName.toLowerCase() === lowerCasedName) {
      return true;
    }
  }
  return false;
}



findStudentByFirstName('TIM'); // true
findStudentByFirstName('MMMaaaTTTtttTTT'); // false

//C2: Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.
function extractEveryThird (arr) {
  let newArr = [];
  for (let i=2; i<arr.length; i+=3) {
    newArr.push(arr[i]);
  }
  return newArr;
}


extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]

//C3: Write a function called countEvensAndOdds which accepts an array as a parameter. Start with an object that holds the count of even numbers and the count of odd numbers. Return this object.
function countEvensAndOdds (arr) {
  let count = {
    oddCount: 0,
    evenCount: 0
  }
  for (let num of arr) {
    if(num % 2 === 0) {
      count.evenCount++;
    } else {
      count.oddCount++;
    }
  }
  return count;
}

countEvensAndOdds([1,2,3,4]); //{oddCount: 2, evenCount: 2}
countEvensAndOdds([1,2,3,4,5,6,7]); //{oddCount: 4, evenCount: 3}

//C4: Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.
function onlyCapitalLetters (str) {
  let newStr = '';
  for(let i=0; i<str.length; i++) {
    if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      newStr += str[i];
    }
  }
  return newStr;
}

onlyCapitalLetters("Amazing"); //"A"
onlyCapitalLetters("nothing"); //""

//HOISTING: What does the following code output:
//1.
var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName(); // 'Tim' because JS works from inside then out.

//2.
function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName();

console.log(firstName) // ReferenceError because you are trying to access a local scoped variable

//3.
console.log(firstName)
var firstName = "Elie"

// Undefined because variable declaration is hoisted and the declaration itself is undefined.
//var firstName;
//console.log(firstName);

//4.
console.log(firstName)
firstName = 'Elie'

// ReferenceError because firstName is not defined

//5.
function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}

sayHi(); // 'Hi undefined' --> undefined because of variable declaration hoisting.

//6.
function sayHi(){
    return 'Hi ' + firstName;
    firstName = 'Elie'
}

sayHi(); // ReferenceError because firstName is not defined.

//7.
sayHi(); //'Hi' because with function declaration, everything is hoisted.

function sayHi(){
    return 'Hi!';
}

//8.
sayHi(); //TypeError, sayHi is not a function. Because of variable declaration hoisting, it starts off as undefined, and you are trying to invoke something that is not initially a function.
//var sayHi;
//sayHi();

var sayHi = function(){
    return 'Hi!';
}

//Functions exercise:
//1. Create a function called printDay. It takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay (num) {
  let dates = {
    1: Sunday,
    2: Monday,
    3: Tuesday,
    4: Wednesday,
    5: Thursday,
    6: Friday,
    7: Saturday
  }
  if(num < 1 || num > 7) {
    return;
  }
  return dates[num];
}


printDay(4); // "Wednesday"
printDay(41); // undefined

//2. Create a function called singleLetterCount. It takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
function singleLetterCount (word, char) {
  let count = 0;
  let lowerCasedChar = char.toLowerCase();
  for(let i=0; i<word.length; i++) {
    if(word[i].toLowerCase() === lowerCasedChar) {
      count++;
    }
  }
  return count;
}

singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2

//3. Create a function called multipleLetterCount. It takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
function multipleLetterCount (str) {
  let countObj = {};
  for(let i=0; i<str.length; i++) {
    if(!(str[i] in countObj)) {
      countObj[str[i]] = 1;
    } else {
      countObj[str[i]]++;
    }
  }
  return countObj;
}

multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

//4. Create a function called arrayManipulation. It takes in four parameters (array, command, location, and value).
  //If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
    //If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
      //If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
      //If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

function arrayManipulation (array, command, location, value) {
  if(command === 'remove') {
    if(location == 'end') {
      return array.pop();
    } else {
      return array.shift();
    }
  } else if (command === 'add') {
    if(location === 'beginning') {
      array.unshift(value);
    } else {
      array.push(value);
    }
  }
  return array;
}

arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

//4. Create a function called isPalindrome. It takes one parameter, a string, and returns true or false if it is a palindrome.

//Longer way:
function isPalindrome (str) {
  let middle = Math.floor(str.length / 2);
  for(let i=0; i<middle; i++) {
    if(str[i] === str[str.length-1-i]) {
      return true;
    }
  }
  return false;
}


// //Shorter way:
// function isPalindrome (str) {
//   return str.split('').reverse().join('') === str;
// }

//Recursion way:
function firstCharacter (str) {
  return str.slice(0, 1);
}

function lastCharacter (str) {
  return str.slice(str.length-1, str.length);
}

function middleCharacter (str) {
  return str.slice(1, str.length-1);
}

function isPalindrome (str) {
  //Base Case: 0 or empty string = true
  if (str.length === 0 || str.length === '') {
    return true;
  }
  //Recursive Case:
  if(firstCharacter(str) === lastCharacter(str)) {
    return isPalindrome(middleCharacter(str));
  }
  return false;
}


isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome(''); // true
isPalindrome('a'); // true

////////////////////////////////////////////////////////////////////////////////////////////////
//NESTED DATA STRUCTURES (OBJECTS & ARRAYS)

//A) NESTED OBJECTS
//Part 1: Writing functions
var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

// 1. function called displayCities that console.logs all the values in the citiesLivedIn array
function displayCities () {
  let cities = instructorData.additionalData.moreDetails.citiesLivedIn;
  for(let i=0; i<cities.length; i++) {
    console.log(cities[i]);
  }
}

displayCities();
// "Seattle"
// "Providence"
// "New York"

//2. function called displayHometownData that console.logs all the values inside of the hometown object
function displayHometownData () {
  let homeTown = instructorData.additionalData.moreDetails.hometown;
  for(let key in homeTown) {
    console.log(homeTown[key]);
  }
}

displayHometownData();
// "West Orange"
// "NJ"

//3. function called addDetail. It takes in two parameters, a key and a value, and adds those to the moreDetails object. Return the moreDetails object.
function addDetail (key, value) {
  let addTomoreDetails = instructorData.additionalData.moreDetails;
  addTomoreDetails[key] = value;
  return addTomoreDetails;
}

addDetail('isHilarious', true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
addDetail('previousAparments', ['Mission', 'North Beach', 'Nob Hill']);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/

//4. function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object
function removeDetail (key) {
  let remove = instructorData.additionalData.moreDetails;
  delete remove[key];
  return remove;
}

removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/

//Nested Objects Exercise:
//Part 2:
let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
};

//1. Use a for-loop, console.log all the numbers of the primeNumbers array
let primeNumbersArray = nestedData.innerData.numberData.primeNumbers;
for(let num of primeNumbersArray) {
  console.log(num);
}

//2. Use a for-loop, console.log all of the even Fibonnaci numbers
let fibonnaciArray = nestedData.innerData.numberData.fibonnaci;
for(let num of fibonnaciArray) {
  if(num % 2 === 0) {
    console.log(num);
  }
}

//3. Console.log the value "second" inside the order array
console.log(nestedData.innerData.order[1]);

//4. Invoke the addSnack funtion and add the snack "chocolate"
nestedData.innerData.addSnack('chocolate');

//5. Inside of the addSnack function, what does "this" refer to?
//"this" refers to the current object which in this case is innerData.

//Part 3:
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
};

//1. function called addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
function addSpeaker (newSpeaker) {
  nestedObject.speakers.push({name: newSpeaker});
  return nestedObject.speakers;
}

addSpeaker("Vivian");

// [ { name: 'Elie' },
//   { name: 'Tim' },
//   { name: 'Matt' },
//   { name: 'Vivian' } ]

//2. function called addLanguage that adds a language to the language object. The language object you add should have a key with the name of language and the value of another object with a key of "hello" and value of however you spell "hello" in the language you add.
function addLanguage (newlanguage, helloInLanguage) {
  nestedObject.data.languages[key] = {
    hello: value
  };
  return nestedObject.data.languages;
}

addLanguage('hawaiian', 'aloha');

// {
//   spanish: { hello: 'Hola' },
//   french: { hello: 'Bonjour' },
//   hawaiian: { hello: 'aloha' }
// }

//3. function called addCountry that adds a European country to the countries object. The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
function addCountry (country, city, pop) {
  nestedObject.data.continents.europe.countries[country] = {
    capital: city,
    population: pop
  }
  return nestedObject.data.continents.europe.countries;
}

addCountry('england', 'London', 53000000);

// {
//   switzerland: { capital: 'Bern', population: 8000000 },
//   england: { capital: 'London', population: 53000000 }
// }

//B) NESTED ARRAYS
//Part 1:

//1. write a function called printEvens that console.logs all the even numbers
let nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens () {
  for(let i=0; i<nestedArr.length; i++) {
    for (let j = 0; j < nestedArr[i].length; j++) {
      if(nestedArr[i][j] % 2 === 0) {
        console.log(nestedArr[i][j])
      }
    }
  }
}

printEvens();
//2, 4, 6, 8, 10, 12

//2. Write a function called sumTotal that returns the sum of all numbers in the given array.
let nestedArr = [ [[1,2],[3,4]] , [[5,6]] ];

function sumTotal() {
  let sum = 0;
  for (let i = 0; i < nestedArr.length; i++) {
    for (let j = 0; j < nestedArr[i].length; j++) {
      for (let k = 0; k < nestedArr[i][j].length; k++) {
        sum += nestedArr[i][j][k];
      }
    }
  }
  return sum;
}

sumTotal(); // 21

//Nested Array Exercises:
//1. write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning
function rotate (arr, num) {
  for (let i=0; i<num; i++) {
    arr.shift(arr.pop());
  }
  return arr;
}

rotate([1,2,3], 1); // [3,1,2]
rotate([1,2,3], 2); // [2,3,1]
rotate([1,2,3], 3); // [1,2,3]

//2. //Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the amount parameter, and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".
function makeXOGrid (rows, columns) {
  let finalArr = [];
  let startsWithX = true;

  for(i=0; i<rows; i++) {
    let newRow = [];

    for(let i=0; i<columns; i++) {
      if(startsWithX) {
        newRow.push('X');
      } else {
        newRow.push('O');
      }
      startsWithX = !startsWithX;
    }
    finalArr.push(newRow);
  }
  return finalArr;
}

makeXOGrid(1,4);

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3,2);

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3,3);
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/
