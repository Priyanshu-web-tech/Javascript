const marvel_heros = ["thor","Ironman","Spiderman"]

const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// this will push 2nd array as standalone single array element into the 1st array


// Correct way to merge

// !1.)Using Concat (but not that handy ,also limited to 2 variables only hence not much used)
const newHeros=marvel_heros.concat(dc_heros)
// console.log(newHeros)

// !2.Spread Operator-ES6 ->More preffered(multiple entries allowed)
const allNewHeros=[...marvel_heros,...dc_heros]
// console.log(allNewHeros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //=>Infinity specifies depth
// console.log(real_another_array)


/** CHECK FOR ARRAY AND CONVERT TO ARRAY */
// To check
console.log(Array.isArray("Priyanshu"))

// To convert
//!Using from
console.log(Array.from("Priyanshu"))
console.log(Array.from({name:"xyz"})) //=>Returns empty array(Important for interview)

//!Using of
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))


