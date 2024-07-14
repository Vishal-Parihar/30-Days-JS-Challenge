// ACTIVITY-1: ARITHEMETIC OPERATIONS
// 1- Write a program to add two numbers and log the result to the console.
const num1 = 44
const num2 = 6
const sum = num1 + num2
console.log(`Sum of ${num1} and ${num2} is : ${sum}`);

//Write a program to subtract two numbers and log the result to the console.
function differnce(a,b){
    return a-b;
}
let myNum1 = 100
let myNUm2= 80
let result = differnce(myNum1,myNUm2)
console.log(`Differnce of ${myNum1} and ${myNUm2} is :${result}`);

// Write a program to multiply two numbers and log the result to the console
function product(a,b){
    return a*b;
}
let prod1 = 10
let prod2= 8
let finalResult = product(prod1,prod2)
console.log(`product of ${prod1} and ${prod2} is :${finalResult}`);

// Write a program to divide two numbers and log the result to the console.
function division(a,b){
    return a/b;
}
let div1 = 81
let div2= 9
let divisionResult = division(div1,div2)
console.log(`division of ${div1} and ${div2} is :${divisionResult}`);

//Write a program to find the remainder when one number is divided by another and log the result to the console.
function remainder(a,b){
    return a%b;
}
let rem1 = 62
let rem2= 4
let remainderResult = remainder(rem1,rem2)
console.log(`remainder of ${rem1} and ${rem2} is :${remainderResult}`);

//ACTIVITY -2: ASSIGNMENT OPETATORS
//1- Use the += operator to add a number to a variable and log the result to the console.
let add = 40
add +=10
console.log(`The total sum is:${add}`);

//2-: Use the -= operator to subtract a number from a variable and log the result to the console.
let sub = 45
sub -=40
console.log(`Differnce is: ${sub}`);

//ACTIVITY-4: COMPARISON OPETATOR
//Write a program to compare two numbers using > and < and log the result to the console.
let number1 = 11;
let number2 = 5;

// comapring number using >
if (number1 > number2) {
    console.log(number1 + " is greater than " + number2);
} else if (number1 < number2) {
    console.log(number1 + " is less than " + number2);
} else {
    console.log(number1 + " is equal to " + number2);
}

// Compare the numbers using <
if (number1 < number2) {
    console.log(number1 + " is less than " + number2);
} else if (number1 > number2) {
    console.log(number1 + " is greater than " + number2);
} else {
    console.log(number1 + " is equal to " + number2);
}

//Write a program to compare two numbers using >= and <= and log the result to the console. 
// Define two numbers
// Define the two numbers
let n1 = 54;
let n2 = 90;

// Compare the numbers using >=
if (n1 >= n2) {
    console.log(n1 + " is greater than or equal to " + n2);
} else {
    console.log(n1 + " is less than " + n2);
}

// Compare the numbers using <=
if (n1 <= n2) {
    console.log(n1 + "is less than or equal to " + n2);
} else {
    console.log(n1 + " is greater than " + n2y);
}

//Write a program to compare two numbers using == and === and log the result to the console.
const x =43; 
const y = "43";  
console.log(`x == y: ${x == y}`);   // true 
console.log(`x === y: ${x === y}`); // false

//ACTIVITY 4:LOGICAL OPERATOR
// Write a program that uses the && operator to combine two conditions and log the result to the console.
const age = 20;
const hasId = true;
const minAge = 18;
const allowedEntry = age >= minAge && hasId;
console.log("Allowed entry:", allowedEntry);

//Write a program that uses the || operator to combine two conditions and log the result to the console.
const isMember = false;
const hasCoupon = true;
const freeShipping = isMember || hasCoupon;  
console.log("Free shipping available:", freeShipping);

//Write a program that uses the ! operator to negate a condition and log the result to the console.
const myage = 15;
const myminAge = 18;
const isNotEligible = !(age >= minAge);
console.log("Not eligible for entry:", isNotEligible);

//ACTIVITY-5: TERNARY OPERATOR
// Define a number
let number = -5;
let myresult = (number >= 0) ? "The number is positive." : "The number is negative.";
console.log(myresult);



