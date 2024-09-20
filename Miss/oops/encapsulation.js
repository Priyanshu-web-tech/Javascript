class Account {
  //   locale = navigator.language;
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  // Public Interface
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
      return this;
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1.getMovements());
// console.log(acc1.#pin); // Uncaught SyntaxError: Private field '#pin' must be declared in an enclosing class

//! Chaining methods(Returning this from all methods),EG:
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

