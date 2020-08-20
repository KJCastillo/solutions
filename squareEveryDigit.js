//square every digit of a number
//for example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1 - codewars

function squareDigits(num){
  let nums = num.toString().split('')
  //make num into string to be able to split individually
  let numss = nums.map(x => Math.pow(x, 2))
  //map through to square every digit
  let numsss = numss.join("")
  //join back together
  return parseInt(numsss) 
  //return correctly by making into an integer again
}

//squareDigits(9119) = 811181
