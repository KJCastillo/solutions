//Each value represents a meeting room. Your job? Find the first empty one and return its index 
//(There may be more than one empty room in some test cases).
//'X' --> busy 'O' --> empty
//If all rooms are busy, return 'None available!'.


function meeting(x){

  for (let i in x){
  //loop through array
    if (x[i] === "O"){
      return x.indexOf(x[i])
  //if instance of loop is "O" return the index
    } if (!x.includes("O")){
  //if the array does not include "O" return the string  
      return "None available!"
    }
  }
}

//meeting(['X', 'O', 'X']), 1
//meeting(['O','X','X','X','X']), 0
//meeting(['X','X','X','X','X']), 'None available!'
