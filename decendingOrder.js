//Your task is to make a function that can take any non-negative integer as an argument 
//and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.
//Input: 145263 Output: 654321

function descendingOrder(n){
  let a = n.toString().split("")
  a.sort(function(a,b){return b-a})
  return parseInt(a.join(""))
}

descendingOrder(123456789), 987654321
