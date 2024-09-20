// const userEmail = "priyanshusharma6666@gmail.com";

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

//! Falsy Values:
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN

//! Truthy Values:
// []
// "0"
// 'false'
// " "
// {}
// function(){}

//! important:
// false==0 =>true
// false=='' =>true
// 0=='' =>true

// Nullish Coalescing Operator (??):null undefined

let val1;
// val1 = 5 ?? 10;    =>5
// val1 = null ?? 10;     =>10
// val1 = undefined ?? 10;    =>15
// val1 = null ?? 10 ?? 20;     =>10 i.e. first value that fitted



console.log(val1);
