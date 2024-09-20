class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return "123";
  }
}

const priyanshu = new User("priyanshu");
// console.log(priyanshu.createId()); // Error: createId is a static method

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();