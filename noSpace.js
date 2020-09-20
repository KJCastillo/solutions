//Write a function that removes the spaces from the values and returns an array showing the space decreasing - codewars

function spacey(array){
  let space = ""
  return array.map( (x) => space += x)
  // return in this manner to show the space decreasing.
  // returning variable will show final result
}

//['kevin', 'has','no','space'] returns [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
//['this','cheese','has','no','holes'] rreturns ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);
