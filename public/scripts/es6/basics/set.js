// File: es6/basics/set+map.js
// Date: 10/15/2020
// Note: Collections: Category/Summary/Item
console.log("\n11. Sets and maps: Proper collections in ES6+");

// Set use-case
const cedric = { id: 1, name: 'Centric', id: 2, name: 'Summary' };
const users = new Set();
users.add(cedric); // add user

console.log(users.has(cedric)); // true
console.log(users.size) // 1 user
users.delete(cedric.id);
console.log(users.has(cedric.id)); // false

for (let user of users) {
    console.log(user);
}

// eof
