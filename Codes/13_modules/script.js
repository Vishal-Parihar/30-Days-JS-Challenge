// #1
import { multiply } from "./utility.js";
const result = multiply(4,8)
console.log(result);

// #2
import { person } from "./utility.js";
person.greet();
person.haveBirthday();
person.greet();

// #3
import {addMe, multiplyMe, subtract, divide} from "./utility.js";
const num1 = 10;
const num2 = 5;

console.log(`sum of ${num1} and ${num2} is: ${addMe(num1, num2)}`);
console.log(`difference between ${num1} and ${num2} is: ${subtract(num1, num2)}`);
console.log(`product of ${num1} and ${num2} is: ${multiplyMe(num1, num2)}`);
console.log(`quotient of ${num1} and ${num2} is: ${divide(num1, num2)}`);

// #4
// main.js
import { greet } from "./utility.js";

const name = 'Vishal';
console.log(greet(name));

// #5
  import {PI, GRAVITY, add, subtractMe} from "./utility.js";
const pivalue = PI
console.log(pivalue);

const gravityValue = GRAVITY
console.log(gravityValue);

const res1 = add(4+9)
console.log(res1);

const res2 = subtractMe(33-8)
console.log(res2);






