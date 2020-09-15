//Depending on the number of passes in the game (y), and the present you unwrap (x), return as follows:
//x == goodpresent --> return x with num of passes added to each charCode (turn to charCode, add y to each, turn back)
//x == crap || x == empty --> return string sorted alphabetically
//x == bang --> return string turned to char codes, each code reduced by number of passes and summed to a single figure
//x == badpresent --> return 'Take this back!'
//x == dog, return 'pass out from excitement y times' (where y is the value given for y).

function present(x, y){

  if (x === "goodpresent"){
    let a = x.split("").map(i => i.charCodeAt() + y)
    //split string, map through array to get char code and add y char code
    return a.map(j => String.fromCharCode(j)).join("")
    //map through array of char codes, make into letters and join back into a string
  } 
  
  if (x === "crap"  || x === 'empty' ){
    return x.split("").sort().join("")
    // split string, sort alphabetically, join back into string
  }
  
  if (x === "bang"){
    let b = 0
    let a = x.split("").map(i => i.charCodeAt() - y)
    //split string, map through to convert array into char code, subtract char code by y
    a.map(j => b += j)
    //map through array of char codes, sum into b variable to return one number
    return b
  } 
  
  if(x === "badpresent"){
    return "Take this back!"
  }
  
  if(x === "dog"){
    return "pass out from excitement " + y + " times"
  }
}

//present('badpresent', 3), 'Take this back!'
//present('goodpresent', 9), 'pxxmy{n|nw}'
//present('crap', 10), 'acpr'
