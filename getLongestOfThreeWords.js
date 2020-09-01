//Write a function called "getLongestOfThreeWords".
//Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 
//Notes:
//* If there is a tie, it should return the first word in the tie.

function getLongestOfThreeWords(word1, word2, word3) {
  let n = [word1, word2, word3]
  //place words in an array
  let n1 = n[0]
  //n1 equals the first element in the array to compare from the start
  for (let x in n){
    if (n1.length < n[x].length){
      n1 = n[x]
   //change value on comparisons   
    }
  } return n1
}

//var output = getLongestOfThreeWords('these', 'three', 'words');
//console.log(output); // --> 'these'
