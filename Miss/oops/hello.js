class BankAccount {
    // Private fields
    #balance;
  
    constructor(accountHolder, initialBalance) {
      this.accountHolder = accountHolder;
      this.#balance = initialBalance; // Using a private field for balance
    }
  
    // Public method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited $${amount}. New balance is $${this.#balance}`);
      } else {
        console.log('Deposit amount must be greater than zero.');
      }
    }
  
    // Public method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew $${amount}. New balance is $${this.#balance}`);
      } else {
        console.log('Insufficient funds or invalid amount.');
      }
    }
  
    // Public method to check balance
    checkBalance() {
      console.log(`The balance for ${this.accountHolder} is $${this.#balance}`);
    }
  
    // Private method (only accessible inside the class)
    #calculateInterest(rate) {
      return this.#balance * rate;
    }
  
    // Public method to apply interest
    applyInterest(rate) {
      const interest = this.#calculateInterest(rate);
      this.#balance += interest;
      console.log(`Interest applied at rate ${rate}. New balance is $${this.#balance}`);
    }
  }
  
  // Create an instance of BankAccount
  const account = new BankAccount('Alice', 1000);
  
  // Accessing public methods
  account.deposit(500);
  account.withdraw(200);
  account.checkBalance();
  account.applyInterest(0.05);
  
  // Trying to access private fields or methods will result in an error
  // Uncommenting the lines below will cause errors:
  // console.log(account.#balance);        // SyntaxError: Private field '#balance' must be declared in an enclosing class
  // account.#calculateInterest(0.05);     // SyntaxError: Private field '#calculateInterest' must be declared in an enclosing class
  