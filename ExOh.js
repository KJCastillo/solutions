//take the str parameter being passed and return the string true if there is an equal number of x's and o's
//otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers
//for example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's - coderbyte

function ExOh(str) { 
  let a = str.split("")
  //split string individually
  let xCount = 0;
  let oCount= 0;
  //create variable to hold 'x' and 'o' counts
  for (i=0;i<a.length;i++){
  //loop through string
    if (a[i]== "x"){
      xCount += 1
   //if a in position [i] is x then increase xCount
    } else if (a[i]=="o"){
      oCount += 1
    //if a in position [i] is o then increase oCount
    } 
  } 

  if (xCount === oCount){
  //compare variables
      return true
    } else {
      return false
    }

}
   
 
//console.log(ExOh(xooxxxxooxo")) = false
//console.log(ExOh("xoxoxxoo")) = true
