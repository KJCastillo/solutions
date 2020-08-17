//create a function called hello that returns "Hello, Name!" to a given name
//if name is not given (or passed as an empty String) return "Hello, World!" - codewars

function hello(name) {    
   if (name) { 
       return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1, name.length).toLowerCase() + "!"
   } else {  
     return "Hello, World!"
   }
}

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String
