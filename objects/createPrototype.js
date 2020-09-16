//The dogbreeder says he wont pay you, until he can make every dog object .bark(). Even the ones already done with your constructor. 
//"Every dog barks" he says. He also refuses to rewrite them, lazy as he is.
//You can't even count how much objects that bastard client of yours already made. He has a lot of dogs, and none of them can .bark().
//function Dog(name, breed, sex, age){
//    this.name  = name;
//    this.breed = breed;
//    this.sex   = sex;
//    this.age   = age;
//}

Dog.prototype.bark = function() {
  return 'Woof!'
}
