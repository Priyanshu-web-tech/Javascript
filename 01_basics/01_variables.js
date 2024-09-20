const accountId = 144553
// accountId=2 //not allowed,const-> can't be changed

let accountEmail="priyanshusharma6666@gmail.com"
// valid in a scope only and used nowadays
var accountPassword="12345"
// var is not generally used due to block scope and functional scope problem i.e. updation were allowed to do in same scope

accountCity="Jaipur"
// this method is also not used

let accountState;
// by default "undefined" is assigned if no value is assigned

accountEmail="3343@ps.com"
accountPassword="3222"
accountCity="Delhi"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// gives content in table form