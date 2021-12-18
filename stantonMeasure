//The Stanton measure of an array is computed as follows: count the number of 1s in the array. 
//Let this count be n. The Stanton measure is the number of times that n appears in the array.
//Write a function which takes an integer array and returns its Stanton measure.

//Example
//The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

function stantonMeasure(array){
  let n = 0
  let m = 0
  for(let i = 0; i<=array.length; i++){
    if (array[i] == 1){
      n++
    }
  } for (let j = 0; j<=array.length; j++){
    if (array[j] == n){
      m++
    }
  }
  return m
}

//stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]) = 3
