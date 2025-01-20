//we're going to learn about asynchronous js here
//default js is synchronous (single threaded -> no multithreading)
// understanding of the event loop of js is important for this

//callbacks
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);


  // dates in js
  //date is an object and dates are calculated from jan 1 1970 in millisecond
  let myDate = new Date()
  console.log(String(myDate))
  console.log(typeof myDate)

let mynewDate = new Date(2023, 0, 23); // months are from 0
console.log(String(mynewDate.to))
let mynewDAte1 = new Date("01-14-2023")
console.log(String(mynewDAte1))

let timeStamp = Date.now()
console.log(timeStamp.toLocaleString);
// console.log(timeStamp.getTsime())
// console.log("About to print hello in 3 sec")
// setTimeout(()=>console.log('3'), 0)
// setTimeout(()=>console.log('2'), 1000)
// setTimeout(()=>console.log('1'), 2000)
// const stopMe = setTimeout(()=>console.log("hello"), 3000)
// setTimeout(()=>{clearTimeout(stopMe); console.log("sorry no hello for you")}, 2000)
// ^^
// ||
// remove the commented code above to stop the timeout to print the hello

//setInterval -> runs in an interval time 

const sInterval = setInterval(()=>console.log("hello"), 2000)

setTimeout(()=>clearInterval(sInterval), 6500 )