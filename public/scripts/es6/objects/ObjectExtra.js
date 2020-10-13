// File: es6/objects/ObjectExtra.js
// Date: 10/13/2020
// The Chronicles of JavaScript Objects
console.log("ObjectExtra.js...\n");

// Initialize Computed Properties
const propertyName = 'firstName';

// 1. Creating a new object
const obj = {
    firstName: 'Alex',
    'lastName': 'Martin',
    dateOfBirth: '18th October',
    friends: ['Bob', 'Christine'],
    nestedObj: {
        name: 'Alex'
    },
    [propertyName.toUpperCase()]: 'Alex',
    printFullName() {
        return `${this.firstName} ${this.lastName}`
    }
};

// 2. Adding properties to an object
obj.address = 'Earth';

// 3. Reading/Retrieving the value associated with a key
// ES5+ WET
console.log("First Name: " + obj.firstName);
console.log("Last Name: " + obj['lastName']);

// ES6+ DRY
let { firstName, lastName } = obj;
console.log("Full Name: " + firstName + ' ' + lastName);

let { dateOfBirth, friends } = obj;
console.log("DOB: " + dateOfBirth)
console.log("Friends: " + friends);

console.log("\n___ Advanced Features ___")
let { address } = obj;
console.log("Added Properties - Address: " + address);

let { name } = obj.nestedObj;
console.log("Nested Object - First Name: " + name)

console.log("Computed Properties - First Name: " + firstName);

console.log("Function as key values - FullName: " + obj.printFullName());

console.log("Object Existence - First Name:" + ('firstName' in obj));
console.log("Object hasOwnProperty - First Name:" + (obj.hasOwnProperty('firstName')));
console.log("Object hasOwnProperty - Middle Name:" + (obj.hasOwnProperty('middleName')));

console.log("Updating Object Properties - First Name: " + (obj.firstName = 'Timothy'));

console.log("Deleting Object Properties - First Name: " + (delete obj.firstName));
console.log("Reading/Retriving Object Properties - First Name: " + (obj.firstName));

console.log("\n___ Iterating (Enumerating) object's keys and values ___");
for (const property in obj) {
    const value = obj[property]; // Read the value
    console.log(property, value);
}

console.log("\n___ Object.keys() ___");
const allProperties = Object.keys(obj);
for (const property of allProperties) {
    const value = obj[property];
    console.log(property, value);
}
console.log("\n___ Object.values() ___");
const allValues = Object.values(obj);
for (const property of allValues) {
    const key = obj[property];
    console.log(property, key);
}
console.log("\n___ Object.entries() ___");
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

// Comparing two different objects
const obj1 = {
    name: 'Alex Martin'
}

// const obj2 = {
//     name: 'Alex Martin'
// }
// const obj2 = obj1;

const obj2 = {
    ...obj1 // Object Spread Operator
}

console.log("Comparing two different objects: " + (obj1 === obj2));
console.log("Comparing two same objects: " + (obj1 === obj1));

console.log("Copying the different objects: " )

console.log("Comparing two different objects: " + (obj1 === obj2));
console.log("Comparing two same objects: " + (obj1 === obj1));

console.log("Making a copy with object ...spread operator: " + obj2.name);

console.log("Copy with JSON.stringify: " + JSON.stringify(obj));

const obj3 = Object.assign({}, obj);
console.log("Object.assign({}, obj): " + JSON.stringify(obj3));

// eof
