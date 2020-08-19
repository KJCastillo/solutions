//create function to validate pin string, pin must be either 4 or 6 in length
//pin must only have numbers, if the function is passed a valid PIN string, return true, else return false - codewars

function validatePIN (pin) {
  let length = (pin.length === 6 || pin.length === 4)
  let numbers = pin.match(/^\d+$/)
  // match() goes through string to find param that matches
  // regex for numbers - /^\d+$/
  
  if (length && numbers) { return true} 
  else { return false }
}

//validatePIN("1234") === true
//validatePIN("12345") === false
//validatePIN("a234") === false
