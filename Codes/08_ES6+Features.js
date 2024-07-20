// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console
let myName ="Vishal"
let myAge = 20

let myInfo = `Myself ${myAge} and I am ${myAge} years old`
console.log(myInfo);

//Task 2: Create a multi-line string using template literals and log it to the console.
let myString = `I am Vishal
I am 20 years old
I am a 3rd year CSE student
I am currently learning javascript`

console.log(myString);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

// Array of numbers
let numbers = [1, 2, 3, 4, 5];

// Using array destructuring to extract the first and second elements
let [firstElement, secondElement] = numbers;

console.log(`First element: ${firstElement}`);
console.log(`Second element: ${secondElement}`);

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
// Book object
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
};
let { title, author } = book;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let originalArr = [1, 2, 3];
let newArr = [...originalArr, 4, 5, 6];
console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

let result = sum(1, 2, 3, 4, 5);

console.log(result); 

//Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter

function multiply(a, b = 1) {
    return a * b;
}
let result1 = multiply(4, 7);  
let result2 = multiply(9);     

// Logging the results to the console
console.log(result1); 
console.log(result2); 

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name = "Alice";
const age = 30;

const person = {
  name, 
  age,
  greet() { 
    console.log(`Hello, my name is ${this.name}`);
  },
  [`${name}Age`]: age 
};

console.log(person);

//Task 9: Create an object with computed property names based on variables and log the object to the console

let propName1 = "firstName";
let propName2 = "lastName";
let propName3 = "age";

let myperson = {
    [propName1]: "John",
    [propName2]: "Doe",
    [propName3]: 25
};

console.log(myperson);






