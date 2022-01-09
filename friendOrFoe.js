//Make a program that filters a list of strings and returns a list with only your friends name in it.
//friends name only has 4 letts in it.

function friend(friends){
  let arr = []
  for(let i =0; i<friends.length; i++){
    if (friends[i].length == 4){
      arr.push(friends[i])
    }
  } return arr
}

//friend(["Ryan", "Kieran", "Mark"], ["Ryan", "Mark"]
