 //build a program that takes an value, "integer" and returns a list of its multiples up to another value, "limit", in an array
 //if limit is a multiple of integer, it should be included as well. postive numbers only - codewars
 
 function findMultiples(integer, limit) {
  let results = []
  for (let i = integer; i<=limit; i+=integer){
    result.push(i)
  } return result
 }
 
//findMultiples(5, 25) = [5, 10, 15, 20, 25]
//findMultiples(1, 2) = [1, 2]
// findMultiples(5, 7) = [5]
