//Activity 1: Understanding Promises
//  Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('Task resolved');
        resolve()
    },2000)
}).then(function(){
    console.log('Promise consumed');
})

//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(new Error('Task cannot be completed'))
    },2000)
})

promiseTwo.then(function(){
    console.log('Promise consumed');
}).catch(error =>{
    console.log('promise rejected',error);
})

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order. 
function fetchData1(){
return new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Data form sever 1');
        resolve()
    },1000)
})
}

function fetchData2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Data form sever 2');
            resolve()
        },3000)
    })
    }

    fetchData1()
    .then(function(data1){
        console.log(data1);
        return fetchData2();
    })
    .then(function(data2){
        console.log(data2);
    })
    .catch(function(error){
        console.log('Data cannot be recieved',error);
    })

    //ACTIVITY 3:Using Async/Await
    //Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value
    async function resolvedValue(){
        const promiseFour = new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log('took 2sec to resolve ');
                resolve()
            },2000)
        })
    
    try{
        const response = await promiseFour
        console.log(response);
    } catch(error){
        console.log('Error',error);
    }
}
    resolvedValue()

//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function logError(){
    const promiseFive = new Promise(function(resolve,reject){
        setTimeout(function(){
            reject('Promise is rejected and cannot be processd further')
        },2000)
     })
    try{
        const response2= await promiseFive
        console.log(response2);
    } catch(error){
        console.log('Error:',error);
    }
}
logError()

// Activity 4:Fetching data from an API
//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises
fetch('https://randomuser.me/api/')
.then((myresponse)=>{
    return myresponse.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

//task 7:Use the fetch API to get data from a public API and log the response data to the console using async/await. 
async function getData(){
    try{
        const dataResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await dataResponse.json()
        console.log(data);
    } catch (error){
        console.log(error);
    }
    getData()
}

// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
function promise6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 6 is resolved");
        }, 1000);
    });
}

function promise7() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 7 is resolved");
        }, 2000);
    });
}

async function waitForAllPromises() {
    try {
        const results = await Promise.all([promise1(), promise2()]);
        console.log(results);
    } catch (error) {
        console.error("Error:", error);
    }
}
waitForAllPromises();

//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
function mypromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("yayy!myPromise 1 is resolved");
        }, 2000);
    });
}

function mypromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("yayy!myPromise 2 is resolved");
        }, 1000);    //least time so it will be logged
    });
}

function mypromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("yayy!myPromise 3 is resolved");
        }, 3000);
    });
}

async function logFirstResolved() {
    try {
        const firstResolved = await Promise.race([mypromise1(), mypromise2(), mypromise3()]);
        console.log(firstResolved);
    } catch (error) {
        console.error("Error:", error);
    }
}
logFirstResolved();



