//.forEach
//1: Write a function called "printFirstAndLast" which accepts an array and console.logs a new string with the first character and the last character of each value.

function printFirstAndLast (arr) {
  arr.forEach(function(val) {
    console.log(val[0] + val[val.length-1]);
  })
}

printFirstAndLast(['awesome','example','of','forEach'])

// ae
// ee
// of
// fh

//2: Write a function called "addKeyAndValue" which accepts 3 parameters: array (of objects), key, and value (boolean). Add the key and value to each object. Return the object.

function addKeyAndValue(arr, key, value) {
  let newArr = [];
  arr.forEach(function(val){
    val[key] = value;
    newArr.push(val);
  })
  return newArr;
}

addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true)

/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/

//.map
//1. Write a function called "valTimesIndex" which accepts an array of numbers, and returns a new array with each value multiplied by the index it is at.

const valTimesIndex = (arr) => {
  return arr.map(function(val, index) {
    return val*index;
  })
}

describe(''. function() {
  it('', function() {
    expect(valTimesIndex([1,2,3])).toEqual([0,2,6])
  });

  it('', function() {
    expect(valTimesIndex([5,10,15])).toEqual([0,10,30])
  });
})

//2. Write a function called "extractKey" which accepts two parameters: array of objects, name of a key. Return an array with just the values for that key.

const extractKey = (arr, key) => {
  return arr.map(function(val) {
    if(key in val) {
      return val[key];
    }
  })
}

describe(''. function() {
  it('', function() {
    expect(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")).toEqual(["Elie", "Tim", "Matt"])
  });
})

//.filter
//1. Write a function called "filterLetters" which accepts an array of letters, and returns the number of occurrences of a specific letter. This function should be case-insensitive.

const filterLetters = (arr, letter) => {
  let count = 0;
  let newArr = arr.filter(function(val) {
    return val.toLowerCase() === letter.toLowerCase();
  })
  newArr.forEach(function(el) {
    count++;
  })
  return count;
}

describe(''. function() {
  it('', function() {
    expect(filterLetters(["a","a","b","c","A"], "a")).toBe(3)
  });

  it('', function() {
    expect(filterLetters(["a","a","b","c","A"], "z")).toBe(0)
  });

  it('', function() {
    expect(filterLetters(["a","a","b","c","A"], "B")).toBe(1)
  });
})

//2. Write a function called "filterKey" which accepts 2 parameters: array of object, key. Return an array with only those objects which have a truthy value for that key.

const filterKey = (arr, key) => {
  return arr.filter(function(val) {
    return val[key] === true;
  })
}

describe(''. function() {
  it('', function() {
    expect(filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")).toEqual([{name: "Tim", isInstructor:true, isHilarious:true}])
  });
})

//.reduce
//1. (Same as .map #2) Write a function called "extractKey" which accepts two parameters: array of objects, name of a key. Return an array with just the values for that key.

function extractKey(arr, key) {
  return arr.reduce(function(acc, next){
    if(key in next) {
      acc.push(next[key]);
    }
    return acc;
  }, []);
}

describe(''. function() {
  it('', function() {
    expect(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")).toEqual(["Elie", "Tim", "Matt"])
  });
})

//2. (Same as .filter #1) Write a function called "filterLetters" which accepts an array of letters, and returns the number of occurrences of a specific letter. This function should be case-insensitive.

function filterLetters (arr, letter) {
  let count = 0;
  let newArr = arr.reduce(function(acc, next){
    if(next.toLowerCase() === letter.toLowerCase()) {
      acc.push(next);
    }
    return acc;
  }, []);
  newArr.forEach(function(el) {
    count++;
  })
  return count;
}

describe(''. function() {
  it('', function() {
    expect(filterLetters(["a","a","b","c","A"], "a")).toBe(3)
  });

  it('', function() {
    expect(filterLetters(["a","a","b","c","A"], "z")).toBe(0)
  });

  it('', function() {
    expect(filterLetters(["a","a","b","c","A"], "B")).toBe(1)
  });
})
