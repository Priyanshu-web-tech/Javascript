const user = {
  username: "Priyanshu",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
  },
};

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage() //=>If we remove this,it will give error

// console.log(this);//=>gives empty object
//! But in browser,window object comes!!

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//=>will give undefined
console.log(this); //gives a chunk of information unlike empty {} as in gllobal scope
// }

// chai()

//!Arrow functions:

const chai = () => {
  let username = "Priyanshu";
  console.log(this.username); //Also does not work!
  console.log(this); //gives {}(same as in global scope) unlike normal functions
};

// chai()

// Implicit Return of Arrow function(when we have only one line of code,also return is not needed and the curly braces too):
// const addTwo=(num1,num2)=>num1+num2

const addTwo = (num1, num2) => num1 + num2;
// or const addTwo=(num1,num2)=>(num1+num2);

console.log(addTwo(1, 2));
const print = () => ({ username: "priyanshu" });

// console.log(print());
