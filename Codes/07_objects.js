// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let myBook ={
    title: 'Js with chai',
    author: 'Hitesh Sir',
    year: 2024,
}
console.log(myBook);

// Task 2: Access and log the title and author properties of the book object.
console.log('Title is:',myBook.title)
console.log('Author of book is:',myBook.author);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method
const myBook2 = {
    title: 'Celestial bodies',
    author: 'Margaret Atwood',
    year: 2019,
    bookInfo: function(){
        return `${this.title} by ${this.author}`
    }
};
console.log(myBook2.bookInfo());

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object
const myBook3 ={
    title:'Great Expectation',
    author:'Charles Dickens',
    year: 1900,
    updateBook :function(year) {
       this.year = year;
    }
}
myBook3.updateBook(1860);
console.log(myBook3);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console
let mybook1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

let mybook2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
let library = {
    name: "Book Library",
    mybooks: [mybook1, mybook2]
};
console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Library books: ${library.name}`);
console.log("title of each books:");
library.mybooks.forEach(myBook =>console.log(myBook.title));

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method. 
let book4 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getInfo: function() {
        return `Title is: ${this.title} and year is:${this.year}`;
    }
};
console.log(book4.getInfo());

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value
let book5 = {
    title: "Harry Potter",
    author: "J>K Rowling",
    year: 2003,
}
for(let property in book5){
  if(book5.hasOwnProperty(property)){
    console.log(property + ":" + book5[property]);
  }
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(`Keys of  all book object: ${Object.keys(book5)}`);
console.log(`Values of all book object: ${Object.values(book5)}`);




