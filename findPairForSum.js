//Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

function findPairForSum(array, number)
{
  let results = [];
  //make blank array
  for (i = 0; i < array.length; i++){
  //loop once to find find first interger
    for (j = i + 1; j < array.length; j++){
  //loop again but starting at different index to find second integer
      if (array[i] + array[j] === number){
        results.push(array[i], array[j]);
   //if they sum up to the number, push into blank array
      }
    }
  } return results;
}

//var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
//console.log(pair); // --> [4, 5]
