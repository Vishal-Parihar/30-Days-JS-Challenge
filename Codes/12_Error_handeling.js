// Activity 1: Basic Error Handling with Try-Catch
//  Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console
function throwError (){
    throw new Error('Error Throwed intentionally')
}
try{
    throwError()
} catch(error)
{
    console.log('Error!',error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function division(numerator, denominator){
    if(denominator ===0){
        throw new Error('denominator cannot be zero')
    }
    return numerator/denominator
}

try{
    let result = division(28,0)
    console.log('result',result);
} catch(error){
    console.log('Error!',error.message);
}

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow
function throwError() {
    throw new Error("error occurred!");
  }
  try {
    console.log("In try block");
    throwError();
    console.log("This line will not execute");
  } catch (error) {
    console.log("In the catch block: " + error.message);
  } finally {
    console.log("In the finally block");
  }
  console.log("Execution continues after the try-catch-finally block");

//  Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
function throwCustomError() {
  throw new CustomError("This is a custom error message!");
}

try {
  console.log("Before throwing custom error");
  throwCustomError();
  console.log("This line will not execute");
} catch (error) {
  if (error instanceof CustomError) {
    console.log("Caught a custom error: " + error.message);
  } else {
    console.log("Caught an unknown error: " + error.message);
  }
} finally {
  console.log("In the finally block");
}

console.log("Execution continues after the try-catch-finally block");

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (input === null || input === undefined || input.trim() === "") {
    throw new ValidationError("Input cannot be empty ")
  }
  console.log("Input is valid: " + input);
}

try {
 
  let userInput = "";
  console.log("Validating user input...");
  validateInput(userInput);
  console.log("This line will not execute if input is invalid");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation error: " + error.message);
  } else {
    console.log("An unexpected error occurred: " + error.message);
  }
} finally {
  console.log("Input validation process completed.");
}

//Activity 4: Error Handling in Promises
//  Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
  const randomNum = Math.random();
  if (randomNum < 0.5) {
    resolve('Promise resolved successfully!');
  } else {
    reject('Promise rejected!');
  }
});

randomPromise
  .then(message => console.log(message))
  .catch(error => console.error(error));


  //Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message

  function getRandomPromise() {
    return new Promise((resolve, reject) => {
      const isSuccess = Math.random() >= 0.5; 
      setTimeout(() => {
        if (isSuccess) {
          resolve("Promise resolved successfully!");
        } else {
          reject(new Error("Promise rejected with an error."));
        }
      }, 1000); 
    });
  }
  
 
async function handlePromise() {
  try {
    const result = await getRandomPromise();
    console.log(result);
  } catch (error) {
    console.log("An error occurred: " + error.message);
  }
}

handlePromise();

//Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
const invalidUrl = "https://invalid-url.example.com/data";

fetch(invalidUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("An error occurred: " + error.message);
  });


//: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
  const invalidUrl = "https://invalid-url.example.com/data";

  try {
    const response = await fetch(invalidUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("An error occurred: " + error.message);
  }
}

fetchData();

  
