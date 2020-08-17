//sort array of numbers from smallest to largest
// if array is empty or null, return [] - codewars

function solution(nums){
  if (nums === [] || nums === null){return []};
  return nums.sort((a, b) => a - b);
}

//console.log(solution(null)) = [];
//console.log(solution([3, 36, 9, 1, 23,]) = [1, 3, 9, 23, 36]
//console.log(solution([]) = []
