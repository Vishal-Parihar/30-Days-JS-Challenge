// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
export function multiply(num1, num2){
    return num1*num2
}

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
// personModule.js
 export const person = {
    name: 'Vishal',
    age: 20,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    },
    haveBirthday: function() {
      this.age += 1;
      console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
  };
  
 //Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// mathFunctions.js
export function addMe(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  export function multiplyMe(a, b) {
    return a * b;
  }
  
  export function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  //Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
  // greetModule.js
export function greet(name) {
    return `Hello, ${name}!`;
  }

//Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
export const PI = 3.14159;
export const GRAVITY = 9.81;

export function add(a, b) {
  return a + b;
}

export function subtractMe(a, b) {
  return a - b;
}


//+++++++++++++++CANNOT DO THESE THREE TASKS+++++++++++++++++=
//Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
// • Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.




  
 
  
  
  