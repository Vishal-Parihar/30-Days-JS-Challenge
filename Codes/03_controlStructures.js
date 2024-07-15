// Activity 1: If-Else Statements
// 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
function checkNumber(num) {
    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    if (num === 0) {
        console.log("The number is zero.");
    } else if (num > 0) {
        console.log("Positive number");
    } else {
        console.log("Negative number");
    }
}

checkNumber(5);
checkNumber(-7);
checkNumber(0);
checkNumber("abc");

//2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console
function checkEligibility(age) {
    if (isNaN(age) || age < 0) {
        console.log('Invalid input. Please enter valid input');
        return

    }
    if (age >= 18) {
        console.log('You are eligible to vote');
    }
    else {
        console.log('You are not eligible to vote');
    }
}
checkEligibility(23)
checkEligibility(-66)

// Activity 2: Nested If-Else Statements
// 3: Write a program to find the largest of three numbers using nested if-else statements
function findLargest(n1, n2, n3) {
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }
    let largest = n1;

    if (n2 > largest) {
        largest = n2;
    }
    if (n3 > largest) {
        largest = n3;
    }
    return largest;
}


let largestNumber = findLargest(22,14,20);
console.log("largest number is:", largestNumber);

// Activity 3: Switch Case
// 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console
function DayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid number. Please enter a number between 1 and 7.";
    }

    console.log(dayName);
}
DayName(4);  
DayName(5);  
DayName(1);  
DayName(2);  

//Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

function assignGrade(Score){
   let assignGrade
  switch(true){
    case(Score >=80 && Score <=100):
        console.log('A Grade')
        break;
   
    case(Score >=70 && Score <80):
        console.log('B Grade')
        break;

    case(Score >=60 && Score < 70):
    console.log('C Grade');
    break;

    case(Score >=50 && Score <60):
    console.log('D Grade')
    break;

    case(Score >=40&& Score <50):
    console.log('E Grade');
    break;
    default:
        console.log('F grade');
  }
  
}
assignGrade(67)
assignGrade(91)
assignGrade(34)

// Activity 4: Conditional (Ternary) Operator
// 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
function checkEvenOrOdd(number) {
    const result = (number % 2 === 0) ? "even" : "odd";
    console.log(number + " is " + result + ".");
}

checkEvenOrOdd(10);  
checkEvenOrOdd(7); 
checkEvenOrOdd(0);  
checkEvenOrOdd(-5); 

// Activity 5: Combining Conditions
// 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function isLeapYear(year) {
    if (isNaN(year)) {
      console.log("Invalid input. Please enter a valid year.");
      return;
    }
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  

  console.log(isLeapYear(2004)); 
  console.log(isLeapYear(1800));
  console.log(isLeapYear(1924)); 
  console.log(isLeapYear("abc"));
  




