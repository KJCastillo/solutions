//given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'
//return the resulting string - codewars

function fakeBin(x){
 return x.split("").map(i => i < 5 ? 0 : 1).join("")
 //split - map - join
}

//fakeBin('45385593107843568') = '01011110001100111'
//fakeBin('509321967506747') = '101000111101101'
