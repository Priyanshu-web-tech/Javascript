// var ->It is a global declaration

// let and const are local scope,
// let V/s const->Only difference is that in the same scope,let declared values can be changed,while const can't

let a = 200;
const b = 40;
var c = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c); //=>This will show 30 which is not a good thing as it should have stayed in its scope

//!Basic Closure Definition->When inner functions is able to access global scope variables/functions then it is called Closure
function one() {
  const username = "Priyanshu";

  function two() {
    const website = "youtube";
    console.log(username);
  }

//   console.log(website); =>gives error

  two();
}

// one();
//!+++++++++++IMPORTANT++++++++++++++++
//function called before define
addone(5) //=>this works fine
function addone(num){
    return num+1;
}
// addone(5) =>works fine


// This type of definiton is generally reffered as expression
//expression function called before define
// addTwo(5) //=>This gives error
const addTwo=function(num){
    return num+2
}
// addTwo(5) =>works fine