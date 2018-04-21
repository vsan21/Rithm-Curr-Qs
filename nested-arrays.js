//B) NESTED ARRAYS
//Part 1:

//1. write a function called printEvens that console.logs all the even numbers
let nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens() {
  for(let i=0; i<nestedArr.length; i++) {
    for(let j=0; j<nestedArr[i].length; j++) {
      if((nestedArr[i][j]) % 2 === 0) {
        console.log(nestedArr[i][j]);
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
  for(let i=0; i<nestedArr.length; i++) {
    for(let j=0; j<nestedArr[i].length; j++){
      for(let k=0; k<nestedArr[i][j].length; k++) {
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
  for(let i=0; i<num; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

rotate([1,2,3], 1); // [3,1,2]
rotate([1,2,3], 2); // [2,3,1]
rotate([1,2,3], 3); // [1,2,3]

//2. //Write a function called makeXOGrid which takes in two parameters, rows and amount, and returns an array of arrays with the number of values in each subarray equal to the amount parameter, and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

function makeXOGrid (rows, amount) {
  let finalArr = [];
  let startsWithX = true;

  //make our rows based on # of rows given
  for(let i=0; i<rows; i++) {
    let newRow = [];

    for(let j=0; j<amount; j++) {
      if(startsWithX) {
        newRow.push("X");
      } else {
        newRow.push("O");
      }

      //changing between true/false
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
