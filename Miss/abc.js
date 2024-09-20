const student = {
  name: "John",
  printNameAndAge: function (age, lives = "India") {
    console.log(`${this.name} is ${age} years old and lives in ${lives}`);
  },
};

student.printNameAndAge(25); //John is 25 years old and lives in India

const student2 = {
  name: "ABC",
};

// !Call
student.printNameAndAge.call(student2, 25); //ABC is 25 years old
// Explanation:
// `call` invokes the function immediately, with the first argument setting `this` and the subsequent arguments passed individually.

// !Apply
student.printNameAndAge.apply(student2, [25, "Mumbai"]); //ABC is 25 years old
// Explanation:
// `apply` invokes the function immediately as well, but the second argument is an array.
// Here, `[25,Mumbai]` is passed as the argument for `age`. This is useful when you have arguments already in an array format.

// !Bind
const printNameAndAge = student.printNameAndAge.bind(student2, 25);
printNameAndAge(); //ABC is 25 years old
// Explanation:
// `bind` returns a new function with `this` set to `student2`, and also binds the argument `25` as the `age`.
// When the function is later invoked, it uses the bound `this` and `age` values.
