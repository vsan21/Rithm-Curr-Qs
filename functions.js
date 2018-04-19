//FUNCTIONS

//Challenge 1: Write a function called createStudent, which accepts two parameters, firstName and lastName. The function should return an object with the keys firstName and lastName and the values should be each of the strings.


//C1.1: Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students (Tim Garcia, Matt Lane, Elie Schoppik)
var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie];

//C1.2: Write a function called findStudentByFirstName, which accepts one parameter, name. This function should iterate through the students array you just made. If the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization
function findStudentByFirstName(name){
    var lowerCasedName = name.toLowerCase();
    for(var i = 0; i < students.length; i++){
        if(students[i].firstName.toLowerCase() === lowerCasedName){
            return true;
        }
    }
    return false;
}

findStudentByFirstName('TIM'); // true
findStudentByFirstName('MMMaaaTTTtttTTT'); // false

//C2: Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.
function extractEveryThird(arr){
    var newArr = [];
    for(var i = 2; i < arr.length; i += 3){
        newArr.push(arr[i]);
    }
    return newArr;
}
extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]

//C3: Write a function called countEvensAndOdds which accepts an array as a parameter. Start with an object that holds the count of even numbers and the count of odd numbers. Return this object.
function countEvensAndOdds(arr){
    var countObj = {
        oddCount: 0,
        evenCount: 0
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            countObj.evenCount++;
        } else {
            countObj.oddCount++;
        }
    }
    return countObj;
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

//Functions exercise:
//1. Create a function called printDay. It takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay (num) {
  let dates = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  };
  if(num<1 || num>7) {
    return;
  }
  return dates[num];
}

printDay(4); // "Wednesday"
printDay(41); // undefined

//2. Create a function called singleLetterCount. It takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
function singleLetterCount (str1, str2) {
  let lowerCasedChar = str2.toLowerCase();
  let count = 0;
  for(let i=0; i<str1.length; i++){
    if(str1[i].toLowerCase() === lowerCasedChar) {
      count++;
    }
  }
  return count;
}

singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2

//3. Create a function called multipleLetterCount. It takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
function multipleLetterCount (string) {
  let obj = {};
  for(let i=0; i<string.length; i++) {
    if(!(string[i] in obj)) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  return obj;
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
    if(location === 'end') {
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

function isPalindrome (str) {
  let middle = Math.floor(str.length / 2);
  for(let i=0; i<middle; i++) {
    if(str[i].toLowerCase() === str[str.length-1-i].toLowerCase()) {
      return true;
    }
  }
  return false;
}

//Shorter way:
// function isPalindrome (string) {
//   return string.toLowerCase().split('').reverse().join('') === string.toLowerCase();
// }

//Recursion way:
function firstChar (str) {
  return str.slice(0,1);
}

function lastChar (str) {
  return str.slice(str.length-1);
  //or str.slice(-1);
}

function middleChar (str) {
  return str.slice(1, -1);
}

function isPalindrome (str) {
  //Base Case:
  if(str.length === 0 || str.length === 1) {
    return true;
  }

  //Recursive Case:
  if(firstChar(str) === lastChar(str)) {
    return isPalindrome(middleChar(str));
  }
  return false;
}

isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome(''); // true
isPalindrome('a'); // true
