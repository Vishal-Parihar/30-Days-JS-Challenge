// Activity 1: For Loop
// 1: Write a program to print numbers from 1 to 10 using a for loop
for(let i= 1; i <= 10; i++ ){
    console.log(i);
}

// 2: Write a program to print the multiplication table of 5 using a for loop
for(let i= 1; i <= 10; i++){
    console.log(`5 * ${i} = ${i * 5}`);
}

// Activity 2: While Loop
// 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop
let num =0
let sum =1
while ( num <=10) {    
sum = sum +num
num++
  
}
console.log(`Sum of numbers from 1 to 10 is : ${sum}`);

// 4: Write a program to print numbers from 10 to 1 using a while loop.
myNum =10
while (myNum >= 1) {
    console.log(myNum);
    myNum--
}

// Activity 3: Do...While Loop
// 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let i =1
do {
    console.log(i)
    i++
} while (i <=5)

//Task 6: Write a program to calculate the factorial of a number using a do...while loop.
const number = 7
let fact = 1
let j=1
do {
    fact= fact * j
    j++
} while (j <= number);

console.log(`factorial of ${number} is : ${fact}`);

//Activity 4: Nested Loops
// 7: Write a program to print a pattern using nested for loops:
//                                * 
//                                * *
//                                * * *
//                                * * * *
//                                * * * * *

// Function to print the pattern
let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    star += " * ";
  }
  star += "\n";
}
console.log(star);

//Activity 5: Loop Control Statements
//8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);
}

// 9:  Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break; 
    }
    console.log(i);
}


