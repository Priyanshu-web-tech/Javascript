// const tinderUser=new Object() =>Singleton Object
const tinderUser={} //=>Non Singleton Object

c=tinderUser.id="123abc"
tinderUser.name="Sammy"
// console.log(tinderUser);

const regularUser={
    email:"ps@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Priyanshu",
            lastname:"Sharma",
        }
    }
}

// console.log(regularUser)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3={obj1,obj2} //=>Same arry problem
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2};
// console.log(obj3);


// console.log(Object.keys(tinderUser));
// =>returns array of keys
// console.log(Object.values(tinderUser));
//=>returns array of values
// console.log(Object.entries(tinderUser));
// =>returns arrays for subarray(key and value)
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Priyanshu"
}

// destructuring
const {courseInstructor}=course
console.log(courseInstructor)

//custom name
const {courseInstructor:instructor}=course
