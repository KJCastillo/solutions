//create a function unique_in_order which takes a sequence and returns a list of items without any elements 
//with the same value next to each other and preserving the original order of elements - codewars

var uniqueInOrder=function(iterable){
  let arr = []
  for (let x in iterable){
    if (iterable[x] !== iterable[x-1]){
      arr.push(iterable[x])
    } 
  } return arr
 }

//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]
