// ACTIVITY-1: VARIABLE DECLARATION
// 1- declare a variable using var,  assign it a number, and log the value to the console.
var myNUmber = 10;
console.log(myNUmber);

// 2- declare a variable using let, assign it to a string, and log the value to the console.
let myStr = "I am Vishal Parihar";
console.log(myStr);

// ACTIVITY-2: CONSTANT DECLARATION
// declare a variable using const, assign it to a boolean value, and log the value to the console.
const myBoolean = true;
console.log(myBoolean);

//ACTIVITY-3: DATA TYPES
//  Create variables of different data types(number, string, boolean, object, array) and log each variables type using 'typeof' operator
let myNum = 99
let myString = "Vishal"
let myBool = false
let myObj ={
    firstName :'Vishal',
    lastName : 'Parihar'
}
let myArr= [5,4,3,2,1]

console.log('type of myNum:',typeof myNum);             
console.log('type of myString:',typeof myString);
console.log('type of myBool:',typeof myBool);
console.log('type of myObj:',typeof myObj);
console.log('type of myArr:',typeof myArr);

// ACTIVITY-4: REASSIGINIG VARIABLES
// declare a varible using let, assign it an initial value, reassign a new value, and log both values to the console
let myScore = 100
console.log(myScore);
//assigning new value
myScore = 200
console.log(myScore);

// ACTIVITY-5: understandig 'const'
// try assigining a variable declared with const and observe the error
const myVal = 33
console.log(myVal);
myVal = 50
console.log(myVal);  //TypeError: Assignment to constant variable

//a variable declared with let can be assigned to a new value later but a variable declared with const cannot be reassigned