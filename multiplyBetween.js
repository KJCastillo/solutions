//Write a function called "multiplyBetween".
//Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.
//Notes:
//* The product between 1 and 4 is 1 * 2 * 3 = 6.
//* If num2 is not greater than num1, it should return 0.

function multiplyBetween(num1, num2) {
  if (num2 <= num1) {
    return 0;
  //if num2 is greater than num1 then there is no range  
  }
  
  let product = 1
  for (let i = num1; i < num2; i++){
  //i starts at num1 and must be less than num2 so it can multiply the given range
    product *= i
  } return product
}

//var output = multiplyBetween(2, 5);
//console.log(output); --> 24
