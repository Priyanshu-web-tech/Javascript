// ON ARRAYS:
const coding = ["js", "ruby", "python", "java", "cpp"];

//!CallBack functions:Does not have name
//!Higher Order Function:->

// With simple function
// coding.forEach(function (item) {
//   console.log(item);
// });

// With arrow function
// coding.forEach((item) => {
//   console.log(item);
// });

// passing outer function
function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe); //Pass reference of function do not execure it here

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
