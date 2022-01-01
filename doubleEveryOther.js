//Write a function that doubles every second integer in a list, starting from the left.
//doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]

function doubleEveryOther(a) {
 return a.map(function(e, index){
   //map thru array, e paramater for every instance in array, index for index position
   if (index % 2 !==0){
     //index that is not in a even position gets altered
     return e * 2
   } else {
     return e
   }
 })
}
