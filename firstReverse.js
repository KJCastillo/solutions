//take the str parameter being passed and return the string in reversed order
//for example: if the input string is "Hello World and Coders" then your program should return the string sredoC "dna dlroW olleH" - coderbyte

function FirstReverse(str) { 
  let a = str.split('')
  //split the string, makes it into an array
  a.reverse()
  //reverse the array 
  return a.join().replace(/,/g, '')
  //join everything back together but replace the the empty spaces
}

//console.log(FirstReverse("Coderbyte")) = "etybredoC"
