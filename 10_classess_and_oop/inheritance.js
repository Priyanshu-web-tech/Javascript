class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`${this.username} added new course`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.addCourse();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai instanceof Teacher)
console.log(chai instanceof User)

