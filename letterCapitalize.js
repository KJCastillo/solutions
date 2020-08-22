//take the str parameter being passed and capitalize the first letter of each word
//words will be separated by only one space - coderbyte

function LetterCapitalize(str) { 
  let word = str.split(" ");
  //split str into single words
  for (let i=0; i<word.length; i++){
  //loop through word variable
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  //word[i] takes the first letter of the first word and upper cases it
  //then concat the remainder part of the word[i] using slice after the first letter
  }
    
  return word.join(' ');
}

//console.log(LetterCapitalize('hello world'))  = Hello World
