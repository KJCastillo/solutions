//write a function that returns both the minimum and maximum number of the given list/array - codewars

function minMax(arr){
  let sorts = arr.sort((a,b) => { return a - b })
  //sort() method in this manner sorts array from smallest to largest
  return [arr[0], arr[arr.length-1]]
  //return first element of array which is the smallest, then last element which is the largest
}

//minMax([1,2,3,4,5])   == [1,5]
//minMax([2334454,5])   == [5, 2334454]
//minMax([1])           == [1, 1]
