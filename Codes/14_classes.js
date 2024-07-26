// Activity 1: Class Definition
//  Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message

//Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greetUser(){
        return`Hi ${this.name} you are ${this.age} years old`
    }

    updateAge(newAge){
        this.age = newAge        
        console.log(`Updated age is: ${this.age}`);
    }
    static greetingMsg(){
        console.log('Hi welcome ${this.name}, hope you are doing well');
    }
 
}
// const Vishal = new Person("Vishal","20")
// console.log(Vishal);
// Vishal.updateAge(21)
// console.log(Vishal);

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.


//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message
class student extends Person{
    constructor(name, age ,studentID){
        super(name,age)
        this.studentID = studentID
       
    }
    getid(){
        return`Your id is: ${this.studentID}`
    }
    greetUser(){
        return`Your name is ${this.name} and you are ${this.age} years old with studentID ${this.studentID}`
    }
    static getStudentCount() {
        return `Total number of students: ${student.studentCount}`;
      }
    
}
const std= new student ("Vishal","20","0021")
console.log(std);
console.log(std.greetUser());

//Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.greetingMsg());

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
const student1 = new student('Vishal', 30, 'S12345');
const student2 = new student('John', 22, 'S12346');
const student3 = new student('Emma', 25, 'S12347');
console.log(student.getStudentCount());

//Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter. 

// Task 8: Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName)
 class person2{
    constructor(firstName, lastName, price) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = price;
      }
      get fullName() {
        return `${this._firstName} ${this._lastName}`;
      }
    //   set fullName(val){
    //     return this._firstName, _lastName = val
    //   }
    set fullName(name){
        
        this.firstName = firstName;
        this.lastName = lastName;
      }
    }
 
 const chai = new person2("masala","chai","40")
 console.log(chai);
 


