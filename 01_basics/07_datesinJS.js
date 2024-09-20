// Dates

let myDate =  new Date()
// typeof Date is object
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// let myCreatedDate=new Date(2023,0,23)
// months start from 0 in JavaScript

// let myCreatedDate=new Date("2024-01-14")
let myCreatedDate=new Date("01-14-2024")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// Convert in seconds(Important)
// console.log(Math.floor(Date.now()/1000));

let newDate =  new Date()
console.log(newDate);
console.log(newDate.getMonth());


// We can alter default properties of date like this
newDate.toLocaleString('default',{
    weekday : "long",
})




