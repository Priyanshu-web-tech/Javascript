const name="priyanshu"
const repoCount=50

// console.log(name+repoCount+"Value") =>outdated

// String Interpolation ->Template Strings
// console.log(`Hello my name is ${name}`)

const gameName =  new String("Priyanshu-PS")
// console.log(gameName[0]);
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('i'));

const newString =gameName.substring(3,4) //works similar to slicing in python(leaves end character),if negative value passed it will be treated as 0
// console.log(newString);

const anotherString =gameName.slice(-8,4)
// console.log(anotherString);
// also accepts negative indexing,similar to python

const newStringOne="      priyanshu        "
console.log(newStringOne.trim());
// removes spaces from left and right

const url="https://Priyanshu.com/Priyansu%Sharma"

//**JS does not accepts spaces in url,hence it converts it into %20

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))