// File: es6/functions/FunctionES6.js
// Date: 10/14/2020
console.log("\nThe Chronicles of JavaScript Functions")

// console.log("\n1. Function that does not take a parameter and doesn't return anything.");
// const sayHello = () => console.log("Hello World!");
// let message = sayHello();
// console.log("message: " + message);

// const sayHelloBlock = () => { return "Block Hello World? w/explicit return statement" };
// let messageBlock = sayHelloBlock();
// console.log("messageBlock: " + messageBlock);
 
// console.log("\n2. Function that does take a parameter and doesn't return anything.");
// const log = (message) => console.log(message);
// log("Hello JavaScript!")

// console.log("\n3. Function that does not take a parameter and does return a value.");
// const flexbox = () =>
//     console.log("___ No parameters passed but return Flexbox Module ___");
// flexbox()

// console.log("\n4. Function that does take a parameter and does return a value.");
// const square = (number) => number * number;
// console.log("square: " + square(2));

// console.log("\n5. Function are first-class objects");
// const cube = (number) => number * number * number;
// console.log("cube: " + cube(3));

// console.log(`6. A function can take more than one arguments (in fact, it can take 'n' parameter) `);
// // ES5+ Old way
// console.log("\n____ Function and the for Loop option ___");
// // for-loop option
// const sum = (...args) => {
//     let result = 0;
//     for (let i = 0; i < args.length; i++) {
//         result += args[i];
//     }
//     return result;
// }
// console.log("sum: " + sum(1,2));
// console.log("sum: " + sum(1,2,3,4));
// console.log("sum: " + sum(1,2,3,4,5));

// console.log("\n6. What does ...args does?")
// console.log("\nFunction and the es6 array extra method option.");
// const total = (...args) => {
//     let result = 0;
//     result = args.reduce((current, prev) => current+ prev);
//     return result;
// }
// console.log("total: " + total(1,2,3,4,5));

// console.log("\n7. A function taking 'function' as parameter")
// function dispatch(fn) {
//     try {
//         return fn("hello world!");
//     } catch(e) { } // ignore the error
// }

// dispatch(function() {
//     console.log("\n// do something here: normal function");
// });

// dispatch(() => console.log("\n// do something else: arrow function")); 
// let result = dispatch(function(p1) {
//     return `My message to ${p1}`;
// });
// console.log("___ IMPORTANT: The 'callback' function can also take a parameter and return value. ___")
// console.log("result: " + result);

// console.log("\n8. Practical applications of callback functions");
// console.log("\n___ setTimeOut ___");
// // setTimeout(function() {
// //     console.log("Check the status of some server...");
// // }, 1000)

// console.log("\n___ setIntervar ___");
// // setInterval(() => {
// //     console.log("This will be executed every 5 seconds");
// // })

// console.log("\n9. A function can call itself (a.k.a recursion)");
// function countDown(n) {
//     console.log("n: " + n); 
//     if (n > 1)  { // exit or terminal condition
//         countDown(n-1);
//     }
// }
// countDown(10);

// console.log("\n10. Immediately Invoked Function Expression (a.k.a IIFE)");

// (function() {
//     let message = "I don't have a name!";
//     console.log("\nAnonymous function: " +message);
//     console.log("\tThe beauty of IIEF is that it can only be invoked once.")
// })();

// console.log("\n11. Where IIFF can be used?");
// console.log(`It can be used in scenarios where you need to run the function only
// once, like fetching some initial data, setting some configuration values,
// checking system status on start up, etc. 
// in ES5+ Objects (Arrays) and Functions (call, apply, bind)\n`);

// console.log(`NOTE: All functions are objects but not all object are functions.
// What distinguishes the function from other objects is that functions can be 
// called. In brief, they are 'Function' objects.`)

// const user = {
//     userName: "codingmonk",
//     dispayName: "John",
//     // sendMessage: (message) => {
//     sendMessage: function(message) {
//         console.log(`Sending ${message} to ${this.displayName}`);
//     }  
// }
// const student = {
//     displayName: "Jill"
// }
// user.sendMessage('Hello...');

// console.log("\n12. Using call() method to invoke on another object");
// user.sendMessage.call(student, "Hello from John");

// console.log("\n13. Using apply() method to invoke on another object ");
// user.sendMessage.apply(student, ["[Hello from John]"]);

// console.log("\n14. Using bind method");
// let sendMessageToStudent = user.sendMessage.bind(student);
// sendMessageToStudent("Yet bound message");

// console.log("\n15. Constructor function");
// function User(name, email) {
//     this.name = name;
//     this.email = email;
//     if (!(this instanceof User)) {
//         return new User(name, email); 
//     }
//     this.save = function() {
//         this.id = (+new Date());
//         // this.id = new Date().toDateString();
//         console.log(`${this.name} saved to Class DB successfully!`);
//         return this.id;
//     }
// }

// let customer = new User('Stephen', 'someemail@test.com');
// console.log(customer);
// User.prototype.saveDB = function() {
//     this.id = +new Date();
//     console.log(`${this.name} saved to Prototype DB successfully!`);
//     return this.id
// }
// console.log(customer.save());
// console.log(customer.saveDB()); // extract output and save()

// console.log("\n16. Why use a prototype for adding instance methods?");

// let users = [];
// for (let i = 0; i < 10; i++) {
//     let user = new User(`user {i}`);
//     user.email = `user${i}@test.com`; // lets create dynamic email address
//     users.push(user);
// }

// console.log(users);

// console.log("\n17. Providing protection against missing 'new' for invoking constructor function");
// let user1 = new User("stephen", "sun.stephen.oo@gmail.com");
// let user2 = User("stephen", "sun.stephen.oo@gmail.com");
// console.log(user1);
// console.log(user2)

console.log("\n18. How to return a custom object from constructor function?");

const fetch = require("node-fetch");
const loader = require("sass-loader");

function Api(baseUrl) {
    let secret = +new Date();
    let self = this; // in case you access to 'this' of Api.

    return {
        fetchData: function(resource) {
            // Here you cannot use 'this' as 'this' points to the
            // fetchData function.

            // The 'self' variable created above will point the API instance
            let url = `${baseUrl}/${resource}/`;
            console.log(url);
            fetch(`${url}`)
                .then(response => response.json())
                .then(json => console.log(json));
        }
    }
}
/* 
 * The above approach is typically singleton pattern, where you
 * only need on instance to work with. You can also use the object
 * literal syntax to creat this type of behavior.
 */
// How do you use the above function?
let api = new Api("https://jsonplaceholder.typicode.com");
// api.fetchData("posts"); // get posts data
// api.fetchData("users"); // get user data    


console.log("\n19. Singleton");
const Singleton = (function() {
    let instance;

    function createInstance() {
        let object = new Object("I am the instance");
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
console.log(instance1 === instance2);

console.log("\n20. Closures");
// ES5+ without closure
// for (var i = 1; i < 5; i++) {
//     console.log("log: " + i)
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// ES5+ with closure
function logLater(i) {
    setTimeout(function() {
        console.log("log-later: " + i);
    }, 1000)
}

for (var i = 1; i < 5; i++) {
    console.log("log-now: " + i);
    logLater(i);
}

console.log("\n21. Applications of Closures:");
console.log("\t- Partial Application - Function Fragments");
console.log("\t- Event Handlers");
console.log("\t- AJAX - Fetch API");
console.log("\t- Private Methods");

// eof
