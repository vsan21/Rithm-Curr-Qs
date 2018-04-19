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
function displayCities() {
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
function displayHometownData() {
  let hometown = instructorData.additionalData.moreDetails.hometown;
  for(let key in hometown) {
    console.log(hometown[key]);
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
  let changedMoreObjects = instructorData.additionalData.moreDetails;
  delete changedMoreObjects[key];
  return changedMoreObjects;
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

for(let i=0; i<primeNumbersArray.length; i++) {
  console.log(primeNumbersArray[i]);
}

//2. Use a for-loop, console.log all of the even Fibonnaci numbers
let fibonnaciArray = nestedData.innerData.numberData.fibonnaci;

for(let i=0; i<fibonnaciArray.length; i++) {
  if(fibonnaciArray[i]%2 === 0) {
    console.log(fibonnaciArray[i]);
  }
}

//3. Console.log the value "second" inside the order array
console.log(nestedData.innerData.order[1]);

//4. Invoke the addSnack funtion and add the snack "chocolate"
nestedData.innerData.addSnack('chocolate');

//5. Inside of the addSnack function, what does "this" refer to?
//"this" inside the addSnack function refers to the current object, which is the innerData object. ***When you are unsure, you can console.log(this) to find out.

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

function addSpeaker(speakerName) {
  nestedObject.speakers.push({
    name: speakerName
  });
  return nestedObject.speakers;
}

addSpeaker("Vivian");

//2. function called addLanguage that adds a language to the language object. The language object you add should have a key with the name of language and the value of another object with a key of "hello" and value of however you spell "hello" in the language you add.
function addLanguage (newlanguage, helloInLanguage) {
  nestedObject.data.languages[newlanguage] = {
    hello: helloInLanguage
  };
  return nestedObject.data.languages;
}

addLanguage('hawaiian', 'aloha');

//3. function called addCountry that adds a European country to the countries object. The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
function addCountry(newCountry, capital, population) {
  nestedObject.data.continents.europe.countries[newCountry] = {
    capital: capital,
    population: population
  };
  return nestedObject.data.continents.europe.countries;
}

addCountry('england', 'London', 53000000);
