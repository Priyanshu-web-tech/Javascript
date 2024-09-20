// ON ARRAYS:

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
}

// ON OBJECTS
const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(key, ":-", myObject[key]);
}

// ON MAPS:
//!If we try to apply this on map then nothing appears since it returns key and map does not have them

// ON STRINGS:
const myName = "Priyanshu";

for (const letter in myName) {
  console.log(letter);
}
