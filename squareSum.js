//Complete the square sum function so that it squares each number passed into it and then sums the results together. codewars

function squareSum(numbers){
  let sum = 0;
  numbers.map(x => sum += Math.pow(x, 2))
  return sum
}

//squareSum([0, 3, 4, 5]), 50)
