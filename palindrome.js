//take the str parameter being passed and return the string true if the parameter is a palindrome 
//(the string is the same forward as it is backward) otherwise return the string false 
//for example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string - coderbyte

function Palindrome(str) { 
  let rep = str.replace(/\s/g,'')
  //remove all spaces in string first to compare at the end
  let split = rep.split("")
  //split string individually
  let reverse = split.reverse()
  //reverse string
  let join = reverse.join("")
  //join string back together
  return rep === join
  //compare and return 
}
   
//console.log(Palindrome('oovoo')) = true
//console.log(Palindrome('kevin')) = false
