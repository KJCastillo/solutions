//input =  [(18, 20), (45, 2), (61, 12), (37, 6), (21, 21), (78, 9)]
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const openOrSenior = data => {
  let arr = [];
  for(i=0; i<data.length; i++){
    //loop through array
    if(data[i][0]>=55 && data[i][1]>7){
      //in position 0 then in position 1
      arr.push("Senior");
    }else{
      arr.push("Open");
    }
  }
  return arr
}
