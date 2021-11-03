//take the str parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo) 
//assume numbers and punctuation symbols will not be included in the string - coderbyte

function AlphabetSoup(str) { 

  let a = str.split("")
  //split string individually
  let b = a.sort()
  //sort method will make them in alphabetical order
  let c = b.join("")
  //join string back together
  return c
}

//console.log(AlphabetSoup(coderbyte)) = bcdeeorty
