//check for anagram

var isAnagram = function(test, original) {
  let a = test.toLowerCase().split("").sort().join("")
  //split strings into array, sort() for abc order, join back up
  let b = original.toLowerCase().split("").sort().join("")
  
  return a == b
};
