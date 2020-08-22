//add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 
//because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000 - coderbyte

function SimpleAdding(num) { 
  let a = 0
  for (let i=0; i<= num ; i++){
  //loop through num
    a += i
  //a will equal first number then will be sum every new number until loop ends  
  }  
  return a; 
}

//console.log(SimpleAdding(45)) = 1035
