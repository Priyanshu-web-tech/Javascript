// Primitive Data types->Call by value
// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 4444444444444444444444n;
// bigint

// Non Primitive orReference Type->Call by reference

// Array,Objects,Functions
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "Priyanshu",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

/*
Types of:-
a.)Primitive datatypes:
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint

n.)Non-primitive datatypes:
Array - object
Function - function(object)
Object - object

*/

/*
 Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory
// Stack(Primitive),Heap(Non-Primitive)

let myName="PS";
let homeName=myName;
homeName="KS";

// console.log(myName) =>PS
// console.log(homeName) =>KS

let userOne={
    name:"Priyanshu",
    roll:12,
}

let userTwo=userOne;

userTwo.name="k"

// console.log(userOne) =>{ name: 'k', roll: 12 }
// console.log(userTwo); =>{ name: 'k', roll: 12 }

// ACTUAL DATA ALSO CHANGES IN HEAP MEMORY AS IT PASSES REFERENCES INSTEAD OF COPY AS IN STACK!

