//Write a function 'fromListToObject' which takes in an array of arrays 
//and returns an object with each pair of elements in the array as a key-value pair.

function fromListToObject(array) {
  let obj = {}
  //define blank object
  for (let x in array){
    for (let i in array){
  //loop through array twice to get items from both positions  
      obj[array[i][0]] = array[i][1]
  //call object dynamically and assign key-value pair    
    }
  } return obj
}

//let output = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
//console.log(fromListToObject(output))
//{
//  make : 'Ford'
//  model : 'Mustang',
//  year : 1964
//}
