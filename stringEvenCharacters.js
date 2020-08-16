//function to return only the characters in a even index position
//if the string is smaller than two characters or longer than 100 characters, the function should return "invalid string" - codewars

function evenChars(string) {
 if (string.length < 2 || string.length > 100){
   return "invalid string"
 } else {
   return string.split("").filter(function(item, index){ return index % 2})}
   // split string to make characters individual and filter through index
}

//evenChars("a") = "invalid string"
//evenChars ("abcdefghijklm") = ["b", "d", "f", "h", "j", "l"]
