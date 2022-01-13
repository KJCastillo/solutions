# solutions

repository containing solutions from coderbyte and codewars excercises for future reference
javascript questions


#CHEATSHEET functions
- Math.abs() -> takes a number and returns it as a positive number
- -Math.abs() -> takes a number and returns it as a negative number
- Math.pow(base, exponent) -> number to the 2nd power or whatever number you need
- .split("") -> takes a string and splits into individual characters into an array
- .split(" ") -> takes a string and splits it into words into an array
- .join("") or .join(" ") -> depending what .split() you used it joins back into a string
- .includes() -> checks if an array includes a certain value among its entries, returning true or false
- .reverse() -> reverses an array
- .sort() -> sorts an array alphabetically, not best for numbers
- .sort(a,b) -> .sort(function(a, b) {return a - b}) <- used to sort numbers from to low to high
- .sort(a,b) -> .sort(function(a, b) {return b - a}) <- used to sort numbers from to high to low
- .length -> checks length of array
- typeOf() -> returns a string indicating the type of the unevaluated operand
- .indexOf() -> returns the first index at which a given element can be found in the array, or -1 if it is not present
- .replace() -> takes two paramaters, first one checks if it's in string, then second replaces the first one param in string 
- .replace(/,/g, '') -> replaces empty spaces in string
- .replace(/\s/g,'') -> removes all spaces in string
- str.replace(/[aeiou]/gi, "")  -> replace vowels using regex

#var
- var letterNumber = /^[0-9a-zA-Z]+$/;
- var letterOnly = /^[A-Za-z]+$/;
- var x = /[A-M]/gi -> regex var, check for letters A thru M (can change letters
