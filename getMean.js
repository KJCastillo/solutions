//Return the average of the given array rounded down to its nearest integer. codewars

function getAverage(marks){
  let length = marks.length;
  let sum = 0;
  for (let x in marks){
    sum += marks[x]
  } return Math.floor(sum / length)
}

//getAverage([2,2,2,2]),2)
