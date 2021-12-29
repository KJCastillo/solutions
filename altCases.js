//Write function alternateCase which switch every letter in string 
//from upper to lower and from lower to upper. 
//E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
  let a = s.split("")
  let b = []
  for (let i=0; i<a.length; i++){
    if (a[i] === a[i].toLowerCase()){
     b.push(a[i].toUpperCase())
    } else if (a[i] === a[i].toUpperCase()){
      b.push(a[i].toLowerCase())
    } 
  } return b.join("")
}

alternateCase("Hello World"), "hELLO wORLD"
