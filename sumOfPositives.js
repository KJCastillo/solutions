// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  //blank var
  arr.forEach(e => e >= 0 ? sum += e : 0)
  //for each item, if it is postive add to sum, if not return 0
  return sum
  //return sum of all positve integers
}
