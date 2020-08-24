//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places.
//Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it - codewars

function sortArray(array) {
  let odds = []
  
  for(let x in array){
    if (array[x] % 2 !== 0){
      odds.push(array[x])
    }
  }
  //remove odd elements into new array
  
  odds.sort((a,b) => {return a-b})
  //sort odd elements in new array
  
  for (var i = 0; i < array.length; i++) {
    if (array[i]%2 !== 0) {
      array[i] = odds.shift();
  //loop through array, replace any odd values with sorted odd values
    }
  } return array
}

//sortArray([5, 3, 2, 8, 1, 4]), = [1, 3, 2, 8, 5, 4]
//sortArray([5, 3, 1, 8, 0]) = [1, 3, 5, 8, 0]
