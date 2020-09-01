//Write a function 'transformFirstAndLast' that takes in an array, and returns an object with: 
//1) the first element of the array as the object's key, and 
//2) the last element of the array as that key's value.

//Example input: ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
//Example output: {  Queen : 'Beyonce' }

function transformFirstAndLast(array) {
  let obj = {}
  //create blank object
  obj[array[0]] = array[array.length - 1]
  //create dynamic object name and give the key the value of the last array property
  return obj
  //return object
}

//var output = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
//console.log(transformFirstAndLast(output)) - {  Kevin : 'Spacey' }
