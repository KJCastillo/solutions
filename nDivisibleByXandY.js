//create function that checks if n is divisible by x and y - codewars

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false
}

//isDivisible(3,3,4) = false
//isDivisible(12,3,4) = true
