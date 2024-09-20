// array

const myArr=[1,2,3,3,4]
// Here array can be heterogenous and can be of variables size

const myHeros=["shaktiman","naagraj"]

// Array methods
myArr.push(6);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9); //insert element in start of the array
console.log(myArr);

myArr.shift(9); //delete element form the start of the array
console.log(myArr);

console.log(myArr.includes(9)); 
console.log(myArr.indexOf(9)); //=>if not found return -1 else index!!

const newArr=myArr.join();
console.table([newArr,typeof newArr])

/*
SPLICE v/s SLICE (Important)!!! 

SLICE->Do not affect actual array and just takes out element from starting index to ending(not taken)
SLICE->Affects actual array and takes out element from starting index to ending(including) and these elements are removed from original array

*/


console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);

console.log("B ",myArr);
const myn2=myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);



