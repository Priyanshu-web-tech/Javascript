// singleton->Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Priyanshu",
  "full name": "Priyanshu Sharma",
  [mySym]: "mykey1", //=>normal define is not allowed
  age: 21,
  location: "Jaipur",
  email: "priyanshusharma6666@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.name);
// console.log(JsUser["name"]); //=>can be used for both strings and non strings defined also UNLIKE DOT (it gives error)
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

// disable changes in the object,changes will not be made,but no error will come:
// Object.freeze(JsUser)
// console.log(JsUser)

JsUser.greeting = function () {
  console.log("Hello Js USer");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js USer ${this.name}`);
};

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

