//Given a sequence of numbers, find the largest pair sum in the sequence
//[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
//[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

function largestPairSum(numbers)
{
  numbers.sort(function(a,b){return b-a})
  return numbers[0] + numbers[1]
}

largestPairSum([10,14,2,23,19]) 42
