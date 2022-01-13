// In this kata, you will be given an array. Each value represents a meeting room. Your job? 
//  Find the first empty one and return its index 
// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"



function meeting(x){
  for(let i = 0; i<x.length; i++){
    //loop thru array
    if (x[i] === "O"){
      return x.indexOf(x[i])
 //if position of i is equal to O, return index positon of i
    } if (!x.includes('O')){
      return "None available!"
  //if array x does not include O, return none available
    }
  }
}

function meeting(x){
return !x.includes('O') ? 'None available!' : x.indexOf('O')
  //if array does not include O, return 'None available; else return the index position of O
}
