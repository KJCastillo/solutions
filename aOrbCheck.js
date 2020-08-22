//take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string
//at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b)
//otherwise return the string false - coderbyte

function ABCheck(str) { 
  let three = str.split("")
  //split string individually
  for (i=0; i<three.length; i++){
  //loop through varaible
   if (three[i] == "a" && three[i+4] == "b" || three[i] == "b" && three[i+4] == "a"){
   //check if a and b are seperated by 3 places
      return true
    }
  }
    return false
}

//console.log(ABCheck("lane borrowed")) = true
//console.log(ABCheck(""apps broken")) = false
