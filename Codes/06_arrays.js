//Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const myarray = [1,2,3,4,5]
console.log(myarray)

// Task 2: Access the first and last elements of the array and log them to the console
const myelements= [10,20,30,40,50]
const firstElement = myelements[0]
const lastElement = myelements[myelements.length - 1]
console.log(`first element is: ${firstElement} and last element is: ${lastElement}`)

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array
const myArray = [12,42,65,4,76]
myArray.push(55)
console.log(`Updated array: ${myArray}`);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
const removeElement = [11,22,33,44,55]
removeElement.pop()
console.log(`Updated array: ${removeElement}`);

//  Task 5: Use the shift method to remove the first element from the array and log the updated array.
const useShift  = [5,23,58,66,47]
useShift.shift(5)
console.log(`Updated array: ${useShift}`);

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array
const useUnshift= [88,45,6,1,55]
useUnshift.unshift(99)
console.log(`Updated array: ${useUnshift}`);

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const arr1 = [1,2,3,4,5,6,7,8,9]
const newarr1 = arr1
.map((num) =>num *num)
console.log(newarr1);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const arr2= [35,1,52,76,23,12,9,10]
const onlyEven = arr2.filter((num) =>num % 2 === 0)
console.log(onlyEven);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result
const arr3 = [23,5,77,87,1,33,38]
const calculateSum = arr3.reduce((acc,item) =>acc + item ,0)     //initail value
console.log(calculateSum);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
const arr4 = [12,33,76,78,9,60]
console.log('Iterated array is:')
for(let i=0 ;i <arr4.length; i++){
    const newArr4 = arr4[i]
    console.log(`${newArr4}`)
}

//Task 11: Use the forEach method to iterate over the array and log each element to the console.
const arr5 = [1, 2, 3, 4, 5];
arr5.forEach(num => {
    console.log(num);
});

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  
  console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
const newMatrix = [
    [5, 32, 8],
    [9, 12, 65],
];
  
  const specificElement = newMatrix[1][2]; 
  console.log(specificElement);
  
  
