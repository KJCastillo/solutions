//Write a function called "findShortestWordAmongMixedElements".
//Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.
//Notes:
//* If there are ties, it should return the first element to appear in the given array.
//* Expect the given array to have values other than strings.
//* If the given array is empty, it should return an empty string.
//* If the given array contains no strings, it should return an empty string.

function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0){ return ""}  
  let str = []
  for (let x in arr){
    if (typeof arr[x] === 'string'){
      str.push(arr[x])
    //loop and check if string, if yes then push into new array to have array of only strings
    }
  }
  if (str.length === 0){ return ""}
  let str1 = str[0]
  for (let i in str){
    if (str[i].length < str1.length){
      str1 = str[i]
   //loop through array of only string to check what is the smallest word   
    }
  } return str1
}

//var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
//console.log(output); // --> 'two'
