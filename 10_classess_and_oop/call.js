function SetUsername(username) {
  // Complex DB  calls
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this,username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.co", "1234");
console.log(chai);
