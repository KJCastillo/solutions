//the main idea is to count all the occurring characters in a string. 
//if you have a string like aba, then the result should be {'a': 2, 'b': 1} - codewars

function count (string) {   
  let obj = {}
  for (let x of string){
    if (obj[x]){
      obj[x] += 1
    } else {
      obj[x] =1
    }
  } return obj
}

//count("aba") = { a: 2, b: 1 }
