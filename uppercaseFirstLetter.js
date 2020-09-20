//take a string and return it with every first letter capitalized - codewars

String.prototype.toJadenCase = function () {
  return this.split(" ").map( x => x[0].toUpperCase() + x.substring(1, this.length -1 )).join(' ')
  //split the string into words, map through each word to upper case the first letter(postion 0), concat the sub string which are in lower case and join words
};

//var str = "How can mirrors be real if our eyes aren't real";
//Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
