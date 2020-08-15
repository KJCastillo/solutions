//add two smallest numbers in array - codewars

function sumTwoSmallestNumbers(numbers) {  
  let a = Math.min(...numbers)
  //finds smallest number
  let b = numbers.indexOf(a)
  //finds index of smallest number
  let r = numbers.splice(b, 1)
  //removes smallest number in order to find second smallest number next
  //used .splice() to remove -> first paramater is indexOf smallest number, second paramater is how many elements to remove
  let c = Math.min(...numbers)
  //finds second smallest number
  return parseInt(r) + parseInt(c)
  // returns sum of both smallest number, parseInt() to make into intergers since variable r would return string
}

//sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
//sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
//sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
//sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
