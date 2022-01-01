//Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
//Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
//ex => -456 -> -654

function reverseNumber(n) {
  if (n <0){
    //check if number is negative
    return parseInt("-" + n.toString().split("").reverse().join(""))
    //if so return as an integer but add negative sign in front
  } else {
    return parseInt(n.toString().split("").reverse().join(""))
    //if not return number as an integer after made to string, split, reversed and put back together
  }
}
