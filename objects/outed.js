//Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, 
//you need to assess the overall happiness rating of the group. 
//If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
//Happiness rating will be total score / number of people in the room.
//Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

function outed(meet, boss){
let results = 0
let finalResults = 0
let len = Object.keys(meet).length
//checks for length of an Object

for (let x in meet){
  results += meet[x]
  //loops through an object and returns the key value
  //sum to results var
}
  
  results += meet[boss]
  //sum the key value for the boss parameter
  finalResults = results / len
  //finalResults var is now the results divided by the length
  
  if (finalResults <= 5 ){
    return "Get Out Now!"
  } else {
    return "Nice Work Champ!"
  }
}
