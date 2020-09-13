//You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.
// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){
  let scores = {
  "accounts": 1,
  "finance": 2,
  "canteen": 10,
  "regulation": 3,
  "trading": 6,
  "change": 6,
  "IS": 8,
  "retail": 5,
  "cleaning": 4,
  "pissing about": 25
};
//make scores into object
  
  let results = 0
  for (let x in staff){
  //loop through staff object
    results += scores[staff[x]]
  //add to results, calling the scores object with the loop iterations value
  }
  
  if (results <=80){
    return "kill me now"
  } else if (results < 100 && results > 80){
    return "i can handle this"
  } else {
    return "party time!!"
  }
  
}
