//a function that must take in input array, containing the names of people who like an item. 
//it must return the display text as shown in the examples - codewars

function likes(names) {
  let len = names.length - 2
  // var made for length in last instance
  if (names.length === 0){ return "no one likes this"};
  if (names.length === 1){ return names[0] + " likes this"};
  if (names.length === 2){ return names[0] + " and " + names[1] + " like this"};
  if (names.length === 3){ return names[0] + ", " + names[1] + " and "+ names[2] + " like this"};
  if (names.length >= 4){ return names[0] + ", " + names[1] + " and " + len  + " others" + " like this"};
  //this instance has to check for 4 or more names.
}

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
//likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
//likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
//likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
