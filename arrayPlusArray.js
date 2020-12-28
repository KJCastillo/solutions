//find the sum of 2 arrays. codewars

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  let sum2 = 0;
  arr1.map(x => sum += x)
  arr2.map(i => sum2 += i)
  return sum + sum2
}

//arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
