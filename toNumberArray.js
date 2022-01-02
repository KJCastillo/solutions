//Create a function that takes as a parameter a sequence of numbers 
//represented as strings and outputs a sequence of numbers.
//ie:["1", "2", "3"] to [1, 2, 3]

function toNumberArray(stringarray){
  return stringarray.map(e => parseFloat(e))
  //map through array and parseFloat to make them into integers while keeping decimal points
}
