class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  // getter
  get password() {
    return this._password.toUpperCase();
  }

  // setter
  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("priyanshu@123.ai", "abc");
console.log(hitesh.email);
