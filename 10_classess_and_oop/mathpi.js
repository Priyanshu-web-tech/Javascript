const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nahi bani");
  },
};

const descripter2 = Object.getOwnPropertyDescriptor(chai, "name");

console.log(descripter2);

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false, //now this value will not come in for in loop
});

const descripter3 = Object.getOwnPropertyDescriptor(chai, "name");

console.log(descripter3);

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") console.log(`${key}: ${value}`);
}