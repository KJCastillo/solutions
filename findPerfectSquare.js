//test if number passed is a perfect square, if it is find next perfect square number. perfect square is if number is sqrt it will return a whole number. 
//if number passed is not a perfect square return -1. - codewars

function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 === 0){
  //test if number is a perfect square
    return Math.pow(Math.sqrt(sq) + 1, 2)
    // finds the next integral perfect square after the one passed as a parameter
  } else {
    return -1
  }
}

//findNextSquare(121) --> returns 144
//findNextSquare(625) --> returns 676
//findNextSquare(114) --> returns -1 since 114 is not a perfect
