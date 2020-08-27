//Write a function called "sumDigits".
//Given a number, "sumDigits" returns the sum of all its digits.
//If the number is negative, the first digit should count as negative.

function sumDigits(num) {
  let num1 = num.toString().match(/-?\d/g)
  //make num into string and use match to keep negative integer
  let results = 0
  num1.map(x => results += Number(x))
  //map through string, name x into Number and sum into results
  return results
}

//var output = sumDigits(1148) = 14
//var output = sumDigits(-316) = 4
