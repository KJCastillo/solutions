//You will be given an array of numbers.
//For each number in the array you will need to create an object.
//The object key will be the number, as a string. The value will be the corresponding character code, as a string.
//Return an array of the resulting objects.

function numObj(s){
  
  return s.map(i => { 
    let obj = {}
    obj[i] = String.fromCharCode(i)
    return obj
  })
 //map and call blank obj inside, call obj dynamically, return obj
}

//console.log(numObj([118, 117, 120])) 
//[ { '118': 'v' }, { '117': 'u' }, { '120': 'x' } ]
