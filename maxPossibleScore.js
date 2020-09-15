//Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) an array of new questions. 
//The function should return the test's maximum possible score as an integer, where questions that are new are worth double points.
//maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"]); // 1 * 2 + 2 + 3 * 2 = 10

function maxPossibleScore(obj, arr) {
  let score = 0;
  let newQ = arr.map(String)
  //arr.map(String) makes the array into a String
  
  for (let x in obj){
    if (newQ.includes(x)){
  //now that the array is a string, you check if it includes the x key while it is looping the obj  
      score += (obj[x] * 2)
    } else {
      score += obj[x]
    }
  }
  
   return score
}
