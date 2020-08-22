//write a function called sumDigits that returns the sum of all the digits in a given number.
//for example:5646 => 5+6+4+6 => 21 - 4Geeks

function sumDigits(num) {
 let nums = (num.toString()).split('').map((i) => { return Number(i); })
  //make into string in order string, split to make them solo, then map through them to return them into integers
  return nums.reduce((a,b) => a + b, 0)
  //reduce method to find sum
}

//console.log(sumDigits(5646)) = 21
//console.log(sumDigits(11111)) = 5
