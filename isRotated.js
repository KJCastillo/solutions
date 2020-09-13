//Is one string a rotated version of another?
// String 1: 'hello world'
// String 2: 'orldhello w'
// --> true

function isRotated(str1, str2)
{
  let str = str1 + str1 + str1
  //concat string so it includes the string more than twice to test
  if (str.includes(str2)){
  //check concat string if it inludes str2
    return true
  } else {
    return false
  }
}

//console.log(isRotated('test test', "test t"))
