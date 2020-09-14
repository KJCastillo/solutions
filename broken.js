//The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
//Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
//Given a string of binary, return the version the photocopier gives you as a string.

function broken(x){

  let rev = x.split("")
  let arr = []
  //split parameter and have an empty array
  
  for (let i in rev){
    if (rev[i] === "0"){
    //loop through the rev variable that contains the split array
      arr.push("1")
    } else {
      arr.push("0")
    //push the iterations into the blank array
    }
  }
  
  return arr.join("")
  //join the arr to return in a string
}

//alternate solution
return x.split('').map(a => a == "0" ? "1" : "0").join('');

//broken("1"), "0"
//broken("10000000101101111110011001000"), "01111111010010000001100110111"
//broken("100010"), "011101"
