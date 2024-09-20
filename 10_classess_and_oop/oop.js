const user = {
  username: "John",
  loginCount: 8,
  SignedIn: true,

  getUserDetails() {
    console.log(
      `Username is ${this.username} and has logged in ${this.loginCount} times`
    );
  },
};

// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Hi ${this.username}`);
  };
  return this; //even if we do not return this, it will return this
}

const userOne = new User("John", 8, true);
const userTwo = new User("Ram", 6, false);
console.log(userOne.constructor);

// If new is not used then 2nd object overwrites the first object

// when we use new keyword, it creates a new empty object then constructor function is called and binds this to the object and then returns the object
