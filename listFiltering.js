//filter out non-numbers

function filter_list(l) {
  let arr = []
 //make blank array
  for(let i =0; i<l.length; i++){
    //loop thru original array
    if(typeof l[i] == 'number'){
      //check if type of l[i] is a number
      arr.push(l[i])
      //if it is push that into the blank array
    }
  } return arr
}

//ALTERNATE SOLUTION

function filter_list(l) {
 return l.filter(v => typeof v == "number")
  //filter thur array, give a new param, arrow function, check if that param is number, filter will return array based on that
}
