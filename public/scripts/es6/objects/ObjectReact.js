// File: es6/objects/ObjectReact.js
// Date: 10/13/2020
// Note: Useful JavaScript Array and Object Methods in React-Redux
console.log("ObjectReact.js...\n");

console.log('Object.values()');
const icecreamColors = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red'
}

const colors = Object.values(icecreamColors);
console.log(colors);

console.log('Object.keys()');
const types = Object.keys(icecreamColors);
console.log(types);

console.log('Object.entries()');
const weather = {
    rain: 0,
    temperature: 24,
    humidity: 33
}
const entries = Object.entries(weather);
console.log(entries);

console.log('Object.freeze():');
const frozenObject = {
    name: 'Robert'
}
Object.freeze(frozenObject);
frozenObject.name = 'Henry';
console.log(frozenObject);

console.log('Object.seal():');
const sealedObject = {
    name: 'Robert'
}
Object.seal(sealedObject);
sealedObject.name = 'Bob';
sealedObject.wearsWatch = true;
console.log(sealedObject);

console.log('Object.assign():');
const firstObject = {
    firstName: 'Robert'
}

const secondObject = {
    lastName: 'Cooper'
}
const combineObject = Object.assign(firstObject, secondObject);
console.log(combineObject);

console.log('Object spread:');
const speadableObject = {
    name: 'Robert',
    phone: 'iPhone'
}
const newObject = {
    ...speadableObject,
    carModel: 'volkswagen'
}
console.log(newObject);

console.log('Array spread:');
const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];
const combined = [...spreadableOne, ...spreadableTwo];
console.log(combined);

console.log('Function rest:');
function displayArgementArray(...theArguments) {
    console.log(theArguments);
}
displayArgementArray('h1', 'there', 'mate');

// eof
