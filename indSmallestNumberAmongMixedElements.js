//Write a function called "findSmallestNumberAmongMixedElements".
//Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.
//Notes:
//* If the given array is empty, it should return 0.
//* If the array contains no numbers, it should return 0.

function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0){return 0}
  let num = []
  for (let x in arr){
    if (typeof arr[x] === "number"){
      num.push(arr[x])
   //moves all numbers to a new array   
    }
  }
  
 if (num.length === 0){ return 0 }  
  let num1 = num[0]
  for (let i in num){
    if (num1 > num[i]){
      num1 = num[i]
  //checks what number is smallest    
    }
  }
  return num1
}

//var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
//console.log(output); // --> 4
