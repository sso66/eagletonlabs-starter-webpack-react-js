// File: es6/basics/map.js
// Date: 10/15/2020
// Note: Collections: Category/Summary/Item
console.log("\n11. Sets and maps: Proper collections in ES6+");

// Map use-case
const cedric = { 
    id: 1, name: 'Category'
};
let users = new Map();

users.set(cedric.id, cedric.name); // add a user

for (let user of users) {
    console.log("user name: " + user);
}

console.log(users.has(cedric.id)); // true
console.log(users.size) // 1 user
users.delete(cedric.id);
console.log(users.has(cedric.id)); // false

// eof
