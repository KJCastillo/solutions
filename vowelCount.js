//take the str string parameter being passed and return the number of vowels the string contains 
//(ie. "All cows eat grass and moo" would return 8)
//do not count y as a vowel for this challenge - coderbyte

function VowelCount(str) { 
  let a = str.toLowerCase()
  //make str all lower case
  let b = a.split("")
  //split str individually
  let sum = 0
  //this will hold var for the vowel count
  for (i=0;i<b.length;i++){
  //loop through variable b
    if (b[i].match(/a|e|i|o|u/g)){
  //if variable b in position [i] matches a vowel
      sum += 1
   //increase the count
    }
  } return sum
}

//console.log(VowelCount("coderbyte")) = 3
//console.log(VowelCount("Heaven Castles")) = 5
