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