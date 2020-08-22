//take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3)
//separate the number of hours and minutes with a colon - coderbyte

function TimeConvert(num) {
  let hour = Math.floor(num/60)
  //Math.floor to round num down after finding hour
  let min = num % 60
  //num % 60 will find the min
  return hour + ":" + min
  //concat variables
}

//console.log(TimeConvert(120)) = 2:0
//console.log(TimeConvert(99)) = 1:39
