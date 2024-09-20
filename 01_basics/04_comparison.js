// console.log("2">1); =>true
// console.log("02">1); =>true

// console.log(null>0) =>false
// console.log(null==0) =>false
// console.log(null>=0) =>true

// it is cause equality check and comparisons check work differently,comparion operators convert null to a number that's why >=0 and >0 is true & false

// console.log(undefined>0) =>false
// console.log(undefined==0) =>false
// console.log(undefined>=0) =>false

// ===(Strict check)
// console.log("2"==2); =>Only checks value->true
// console.log("2"===2) =>check value+type ->false