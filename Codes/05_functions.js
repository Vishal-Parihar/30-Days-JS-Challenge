// Activity 1: Function Declaration
// 1: Write a function to check if a number is even or odd and log the result to the console.
function checkNumber (num){
    if(isNaN(num)){
        console.log('Enter a valid number')
    }
    if (num %2 === 0) {
        console.log('Even number');
    }
    else{
        console.log('Odd Number');
    }

}
checkNumber(24)
checkNumber(33)


//2: Write a function to calculate the square of a number and return the result.
function calculateSquare(side) {
     return side * side
   
}
let squareSide =4
let result= calculateSquare(squareSide)
console.log(`Square of ${squareSide} is: ${result}`);

// Activity 2: Function Expression
// 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function findMaximum(num1 , num2) {
    if(isNaN(num1) || isNaN(num2)){
        console.log('Enter a valid number');
    }
    if(num1 > num2){
        console.log(`Max number is: ${num1}`);
    }
    else if(num2 >num1){
        console.log(`Max number is: ${num2}`);
    }

}
findMaximum("a",50)
findMaximum(4,1)
findMaximum(45,78)

//4: Write a function expression to concatenate two strings and return the result
function concatenateString (str1, str2){
    return str1 + str2
}
let string1 ="Vishal "
let string2 ="Parihar"
console.log(concatenateString(string1, string2))

// Activity 3: Arrow Functions
//  5: Write an arrow function to calculate the sum of two numbers and return the result.

const Sum = (a,b) =>{
return a + b
}
let mynum1 = 33
let mynum2 =7
console.log(Sum(mynum1,mynum2));

// 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const myStr = (str,char) => str.includes(char);
let myString = "javascript"
let character = "k"
console.log(myStr(myString,character));

// Activity 4: Function Parameters and Default Values
// 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const myProduct = (prod1, prod2 = 5) =>{
    return prod1 *prod2
}
console.log(myProduct(8));
console.log(myProduct(4,8));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age. 
function greetPerson(str, age = 20) {
    console.log(`Hello ${str}, your age is: ${age}`);
    }
    let myName ="Vishal"
    greetPerson(myName)

// Activity 5: Higher-Order Functions
// 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const repeat = (func, times) => {
    for (let i = 0; i < times; i++) {
        func();
    }
};
const sayHello = () => console.log("Hello!");
repeat(sayHello, 3); 

// 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const compose = (func1, func2, value) => {
    return func2(func1(value));
};
const addFive = (x) => x + 5;
const double = (x) => x * 2;

let myresult = compose(addFive, double, 10);
console.log(result); 
