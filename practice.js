//global functions
console.log("-------- global funciton output ---------")
let a = 3
const makeDouble = () => {
    a += a
    return a
}
console.log(a)
console.log(makeDouble()) // there is a change in a itself, so it changed it from its reference itself
console.log(a)

console.log("--------- closure output -----------")
//closures : makes it possible for functions to have private variables, now this is done through keeping the variables in the scope 
// of the parent function which is a self invoking function that runs once to initialize the private variables and returns the function
// we need , this returned function can be stored in a variable and called, this returned function will have access to the private variables
// and will have the ability to update them exclusively

const add = (
    function (){
        let counter = 0
        return function (){
            counter+=1;
            return counter;
        }
    }
)()  //invoking the parent function while assigining it to add, the returned function is stored as add

console.log(add())
console.log(add())
console.log(add())

console.log("---------- array code --------")
// js arrays
// js arrays are heterogeneous (unlike that of swift), 
//supports methods like .push, toString-> converts the array into a string
// can be declared using Array contructor
// caution !! if you put a single number in the array constructor it takes that as the length of the array and sets undefined values for each of the values
let arr1 = new Array('now', 'then', 'when')
let arr = [1, 2, "alien", ['random', 'nested', 'array']];
arr.push("last entry")
for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}
console.log(typeof(arr.toString()))

//flatten a nested array using array.flat()
const flatarr = arr.flat()
for(let i = 0; i<flatarr.length; i++){
    console.log(flatarr[i])
}
//array splice and slice -> slice returns a new array as part of the array it was applied on, splice is used to modify the original array
// by inserting and removing elements from certain positions
arr1.splice(0, 1, 'not now', "now then") // insert position at 0 and remove 1 element, insert the elemtn "not now" and "now then"
console.log(arr1)

//array slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits)
const citrus = fruits.slice(2, 4); //upper limit is not inclusive
console.log(citrus)

//arrays have search methods like: indexOf, lastIndexOf, includes (returns boolean)
console.log(fruits.includes("Banana"))
console.log(fruits.lastIndexOf("Apple"))

//operations on array - sorting, sort() and reverse() makes alters the original array while toSort() and toReverse() returns a copy of the array modified
console.log(fruits.toSorted())
fruits.sort().reverse()
console.log(fruits)

//array.sort() compares the strings hence 25 would be greater than 100, have to implement custom comparator function
let numarr = [1,5,2,6,4,22,100]
console.log(numarr.toSorted())
console.log(numarr.toSorted((a, b) => a-b)) //if the returned value is -ve then a before b +ve then swap as a > b else no change of order
//finding minimum in an array: 
console.log(Math.min.apply(null, numarr)) //similarly max value can be found using Math.max.apply

//exercise - lets sort an array of objects: 

let arrobj = [
    {namae : "narayan", age : 32},
    {namae : "biplab", age : 22},
    {namae : "ayushman", age : 22},
    {namae : "aniket", age : 31},
    {namae : "ajit", age : 18},
    {namae : "suraj", age : 43},
]
console.log(arrobj.toSorted((ob1, ob2)=> ob1.age - ob2.age))
//sorting by multiple fields (I want to sort alphabeticall if the ages match) -> make use of s1.localeCompare(s2) -> -1 if s1 comes before s2 
//+1 if comes after else 0
console.log(arrobj.toSorted((a, b)=>{
    if(a.age === b.age) return a.namae.localeCompare(b.namae);
    return a.age-b.age; 
}))


console.log("------------ array iteration and related(higher order functions) ------------")
//iterating arrays, manipulating them and accumulate/reduce them
//foreach, map, filter, reduce -> these functions take callback functions as arguments hence called higher order functions
// the callback functions take the following as argument: item value, item index, array
const numbers = [45, 4, 9, 16, 25];
let ttl = ""
numbers.forEach((val, idx) => {ttl += val+" "})
console.log(ttl)
// map -> maps values of the array and returns a new array of the same size
let doublenum = numbers.map((val)=>val*2)
console.log(doublenum)
//filter -> filters out elements from the original array and returns a new array that contains elements that qualify
let filteredarr = numbers.filter((val)=>val> 10)
console.log(filteredarr)
//reduce -> reduces the array into a single value, its callback takes a new arg in the beginnnig 
// which is the accumulator(I think its initialized automatically to the base value of 0 or equivaluent (gotta check!))
const sum = numbers.reduce((acc, val) => acc+=val)
console.log(sum)

//there are new additional functions like these: every and some they reduce the array to a boolean
//every gives true if all the elements of the array qualifies to some condition
//some gives true if some of the elements of the array qualifies to the condition

//keys(), entries()
let itr = fruits.keys();
for(const key of itr) console.log(key)
// entries give an iterator key value of index and value from the array while traversing it
itr = fruits.entries()
for(const [idx, val] of itr) console.log(`${idx} : ${val}`);

//... -> as the spread operator, it expands an iterable into the next breakable form (characters from strings, values from array and so on)
// it basically opens up an iterable (shorter to write)
const strarr = ["narayan", "biplab", "aniket", "ajit", "suraj", "cheeranjib"]
const chararr = [...strarr[0], ...strarr[1], ...strarr[2]]
console.log(chararr)

console.log("----------loops output---------")
//the for of loop, loops through the values of an iterable,
//the for in loop loops through the properties (keys) of an object

//using for in for an array
let val = ""
for (let it in strarr) val+=it
console.log(val)

//Array.forEach()
numb= [45, 4, 9, 16, 25];

let txt = "";
numb.forEach(myFunction);

function myFunction(value) {
  txt += value;
}
console.log(txt)

//strings
console.log("----------- starting with string -----------")
// template strings / template literals -> written within `` , 
//template literals allow multiline strings too
let str = "this is a normal string"
//to extract teh position of strings charAt(), at() at allows negative index (find characters from behind like in python, -1 is the last index
console.log(str.at(-1))
//string slice -> the upper bound is excluded
console.log(str.slice(0, 2))
//string substr -> similar to slicing returns the substring, takes param start index and length of the substring needed
//supports case changing techniques like: .toUpperCase() & toLowerCase()
//trim removes spaces from both the ends, trimStart() and trimEnd() from each side of the string

//replacing part of the string: use the replae(old, new) 
console.log(str.replace("anormal", "abnormal")) //wont make any change if the old string/substring is not foudn in the string
//replace is case sensitive, make use of /i flag to make case insensitive match
console.log(str.replace(/noRmal/i, "abnormal"))

// regex flags that can be used -> /i is to make case insensitive
//                                 /g is to make it find and replace all the matching substrings in the stirng -> also use replaceAll()
// strins in js support splitting using delimeter(mandatory)
let strarr1 = str.split(" ")
console.log(strarr1)

//just like findIndex for arrays we have indexOf for strings where it returns the first index of the starting of a substring
//if it is present in the string or else -1
//lastIndexOf() method returns the index of last occurence of the substring if found
//these take another argument if given the start position of search(left -> right for findIndex and otherwise for the other method)
console.log(str.lastIndexOf('normal'))
//there is another method search which is similar to indexOf but can take in regex
//string matching
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");

//includes() funciton returns a boolean value of the presence of a substring in a string   
console.log(text.includes("ain", 23)) //starts searching from index 23

//javascript numbers; 
console.log(typeof("1000"-"100"))