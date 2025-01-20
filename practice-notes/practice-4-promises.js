//fetching data from api
//promise is an object that represents eventual completion
// promise has 3 states : pending, fulfilled, rejected

//creating a promise

// const promiseOne = new Promise((resolve, reject)=>{
//     //Do an async task
//     setTimeout(()=>{console.log("async is complete"); resolve()}, 3000)
// })
// promiseOne.then((val)=>console.log("Promise consumed"))

// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async 2");
//         resolve();
//     }, 2000)
// }).then(()=>console.log("second async is done"))

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({
//             name : "Narayan", 
//             age : 34,
//             likes : 344
//         })
//     }, 3000)
// })

// promiseFour.then((val)=>console.log(val))

//using the reject as well

// const promiseFive = new Promise((resolve, reject)=>{
//     const err = true 
//     if(!err) resolve({
//         username : "narayan",
//         userid : 3373,
//         videos : 12
//     }) 
//     else reject(`ERROR : something went wrong`)
// })

// promiseFive
// .then((Data) => {
//     let userData = Data
//     console.log("sending the username")
//     return userData.username
// })
// .then((username)=>{
//     console.log(`The name of this user was : ${username}`)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>console.log("Work is done"))

// using async await

// async function consumePromiseFive(){
//     try{
//         const res = await promiseFive 
//         console.log("printing the result")
//         console.log(res)
//     }catch(err){
//         console.log(err)
//     }
// }
// consumePromiseFive()

//using fetch api to get data from the internet

// using .then to fetch github profile data
fetch("https://api.github.com/users/narayan071")
.then((val)=> val.json()
)
.then((formatted)=> formatted.login)
.then((newVal) => {
    console.log(newVal)
})
.catch((err) => {
    console.log(`ERROR RECEIVED : ${err}`)
})



//using async await to fetch github profile data

const getData = async() =>{
    try{
        let res = await fetch("https://api.github.com/users/narayan071")
        const formattedRes = await res.json()
        console.log(formattedRes.login)
    }catch(err) {console.log(`ERROR MESSAGE : ${err}`);}
}

getData()