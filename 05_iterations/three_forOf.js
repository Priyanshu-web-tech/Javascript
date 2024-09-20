// ON ARRAYS:
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

//ON MAPS , Maps->Similar to Objects,Diff->Only unique values,maintains order
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");

for (const [key, val] of map) {
  console.log(key, ":-", val);
}

// ON OBJECTS:
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
//!->not applicable like this

// ON STRINGS:
const myName = "Priyanshu";

for (const letter of myName) {
  console.log(letter);
}
