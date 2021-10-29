//return largest and smallest numbers found in a string - codewars

function highAndLow(numbers){
  let arr = numbers.split(" ")
  //split numbers in string, makes them into array in order to test
  let large = arr[0]
  let small = arr[0]
  for (let i in arr){
    if (parseInt(large) < parseInt(arr[i])) {
      //parseInt() converts the input string into an integer
      large = arr[i]
      //this tests for largest possible number
    } if (parseInt(small) > parseInt(arr[i])){
      small = arr[i]
      // this tests for smallest possible number
    }
  }return large + " " + small
  //concatenate numbers
}

//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
