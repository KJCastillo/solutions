// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg

function cookingTime(eggs) {
  let pot = 8;
  let time = 5;
  
  return Math.ceil(eggs / pot) * time
  //Math.ceil rounds to the nearest number
  //so you divide egges by pot, it'll round it up, then multiply that by the time it takes to cook
}
