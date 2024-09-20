function multipleBy5(n) {
  return n * 5;
}

multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power); //everything in Javascript is Object
// console.log(multipleBy5.prototype); //give {} empty object i.e. this of the function(context of the function)

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`${this.username} has a score of ${this.score}`);
};

const chai = new createUser("Chai", 25);
const tea = new createUser("tea", 250);

chai.increment();
chai.printMe();

tea.increment();
tea.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/