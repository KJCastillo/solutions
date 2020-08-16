//there is a bus moving in the city, and it takes and drop some people in each bus stop.
//you are provided with an array and each integer array has two items which represent number of people get into bus (The first item) 
//and number of people get off the bus (The second item) in a bus stop.
//your task is to return number of people who are still in the bus after the last bus station (after the last array)
//even though it is the last bus stop, the bus is not empty and some people are still in the bus - codewars

var number = function(busStops){
  let on = 0
  for (let x in busStops){
    on += busStops[x][0] - busStops[x][1]
  } return on
}

//number([[10,0],[3,5],[5,8]]) = 5
//number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) = 17
//number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) = 21
