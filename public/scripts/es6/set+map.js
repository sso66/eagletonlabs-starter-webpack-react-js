// set+maps.js
// 11. Sets and maps: Proper collections in ES6
// Re: React's propTypes

// Map use-case
const cedric = { id: 1, name: 'Centric' };
const map_users = new Map();
map_users.set(cedric.id, cedric); // add a user
console.log(map_users.has(cedric.id)); // true
console.log(map_users.size) // 1 user
map_users.delete(cedric.id);
console.log(map_users.has(cedric.id)); // false

// Set use-case
//const cedric = { id: 1, name: 'Centric' };
const set_users = new Set();
set_users.add(cedric); // add user
console.log(set_users.has(cedric)); // true
console.log(set_users.size) // 1 user
set_users.delete(cedric.id);
console.log(set_users.has(cedric.id)); // false
