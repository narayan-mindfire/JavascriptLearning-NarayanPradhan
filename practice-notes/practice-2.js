//destructuring
//destructure properties with the same name, this makes the order of destructuring not important
const obj = {
    firstName : "Narayan",
    lastName : "Pradhan", 
    age : 32
}
let {lastName, firstName} = obj;
console.log(firstName)
//aliasing the property name is also possible; 
let {lastName : lname} = obj;
console.log(lname)

//error handling in js
//error handling in js is very similar to all other languages, its simple try, catch, and finally
//while if we find someviolations in try we throw an error(message/signal or whatever to the catch block)
//the catch block catches the error message thrown from the try block, 
//finally the finally block runs regardless of either the try or the catch block runs

function add(a, b){
    try{
        if(a > 30 || b > 30) throw "the values should be less than 30"
        console.log( a+b)
    }
    catch(err){
        console.log("The error message that was received was: "+err)
    }
    finally{
        console.log("thank you for using our function")
    }
}
add(30, 31)