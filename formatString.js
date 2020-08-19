//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand - codewars

function list(names){
  if (!names.length)
    return '';
  //if no names exist, return blank string
  if (names.length === 1)
    return names[0].name;
  //if one name exist return single name
 let lastPerson = names.pop();  
  return names.map(p => p.name).join(', ') + " & " + lastPerson.name;
  //pop last element, then map to return just the name, join(", ") to convert into string with a comma, concatenate ampersand and lastPerson
}

//list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) returns 'Bart, Lisa & Maggie'
//list([ {name: 'Bart'}, {name: 'Lisa'} ]) returns 'Bart & Lisa'
//list([ {name: 'Bart'} ]) returns 'Bart'
//list([]) returns ''
