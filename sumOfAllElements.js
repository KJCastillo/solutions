//Write a function called "getSumOfAllElementsAtProperty".
//Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key. 
//Notes:
//* If the array is empty, it should return 0.
//* If the property at the given key is not an array, it should return 0.
//* If there is no property at the key, it should return 0.

function getSumOfAllElementsAtProperty(obj, key) {
  if(typeof obj[key] !== 'object' || obj.key === {}){ return 0}
  //checks if obj[key] is an object or if its empty to return 0
  let results = 0;
  for (let x in obj[key]){
    results += obj[key][x]
  //loop through obj[key] at position x and sum to results  
  }
  return results
}

//var obj = {  key: [4, 1, 8] };
//var output = getSumOfAllElementsAtProperty(obj, 'key');
//console.log(output) = 13
