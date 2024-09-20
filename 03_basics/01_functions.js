function sayMyName(name){
    console.log(`Hi ${name}`);
}

// sayMyName("Priyanshu")
// values passed at function calling are calld arguments
// values recieved in function body are called parameters

// const result=sayMyName("Dev")
// console.log("Result: ",result) //=>Gives undefined since we did not passed anything

function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("Please enter a username");
    }
    else
    return `${username} just logged in`
}

// console.log(loginUserMessage("Priyanshu"))
// console.log(loginUserMessage())
// when we do no pass anything undefined is sent

function calculateCartPrice(value1,value2, ...num1){
    return num1
}
// =>first coming 2 values will into the variables

console.log(calculateCartPrice(200,400,500,4,3,3))