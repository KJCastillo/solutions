//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//Write a function which takes a list of strings and returns each line prepended by the correct number.

var number=function(array){
  let results = array.map(function(letter, index){return (index + 1) + ": " + letter})
  return results
}

number(["a", "b", "c"]), ["1: a", "2: b", "3: c"],
