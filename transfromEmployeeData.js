//Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

function transformEmployeeData(array) {
  return array.map(a => {
    //map through both arrays in the original array
    let obj = {}
    //create blank obj
    a.map(b => {
    //now map through each array within both arrays  
      obj[b[0]] = b[1]
    //give obj the value of each array  
    })
    return obj
  })
}

let arr = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

console.log(transformEmployeeData(arr))
