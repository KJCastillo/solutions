//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
//It should look like this:
//Sam Harris => S.H
//patrick feeney => P.F

function abbrevName(name){
    let first = name.split("")
    let second = name.indexOf(" ") + 1
    
    return first[0].toUpperCase() + "." + first[second].toUpperCase()
}

abbrevName("Sam Harris") ("S.H");
