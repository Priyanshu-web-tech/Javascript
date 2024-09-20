// Immediately Invoked Functon Expressions (IIFE)

//*Even though this purpose can be achieved by making a function and calling them directly,but global scope may pollute this task

(function chai(){
    //named IIFE
    console.log('DB DONNECTED');
})();

//!Any new IIFE will give error if we do not write semicolon(;) after the  definition of its previos IIFE

(()=>{
    console.log("DB Connected TWO")
})();

// With params

((name)=>{
    console.log(`DB Connected TWO ${name}`)
})('Priyanshu')