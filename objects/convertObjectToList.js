//Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this: 
// Argument:
// {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }
// Return value:
// [['name', 'Holly'], ['age', 35], ['role', 'producer']]

function convertObjectToList(obj) {
  let list = []
  //create blank array
  for (let x in obj){
  //loop through obj
    let arr = []
  //create temp arr  
    arr.push(x)
  //push x which is the key in this case  
    arr.push(obj[x])
  //push obj[x] which is the value in this case  
    list.push(arr)
  //push the temp arr into the original blank array
  } return list
}

let output = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

console.log(convertObjectToList(output))
