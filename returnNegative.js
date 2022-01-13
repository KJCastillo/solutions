// In this simple assignment you are given a number and have to make it negative.
// The number can be negative already, in which case no change is required.

function makeNegative(num) {
  if (num < 0){
    return num
    //if number already negative, return it
  } else {
    return parseFloat('-' + num)
    //if number postive, add negative sign in front and parseFloat to turn string into number
  }
}

//alt solution
function makeNegative(num) {
  return -Math.abs(num);
}
