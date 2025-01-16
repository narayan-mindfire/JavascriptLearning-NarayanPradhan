//String Manipulation Tool

let str = "narayan works at at Mindifre"

//function to change to uppercase
const toUpper = (str) => str.toUpperCase()
//funtion to change to lowercase
const toLower = (str) => str.toLowerCase()
//function to find the length of the string
const findLength = (str) => str.length 
//function to replace certain words in the string
const replaceWord = (str, replaceOld, newString) => str.replaceAll(replaceOld, newString) //taking global str
//function to count the number of words in the string
const countWord = (str, word) => {
    let iterator = str.matchAll(word)
    return Array.from(iterator).length
}
//function to reverse a string
const reverseString = (str) => str.split("").reverse().join("")

//testing
console.log("to convert the string to uppercase -> ")
console.log(toUpper(str))
console.log("to convert the string to lowercase -> ")
console.log(toLower(str))
console.log("to find the length of the string -> ")
console.log(findLength(str))
console.log("to replace words in the given string -> ")
console.log(replaceWord(str, "works", "eats"))
console.log("to count the number of words -> ")
console.log(countWord(str, "works"))
console.log("to reverse a string -> ")
console.log(reverseString(str))
