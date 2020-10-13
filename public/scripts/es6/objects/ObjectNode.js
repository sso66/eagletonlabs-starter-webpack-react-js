// File: es6/objects/ObjectNode.js
// Date: 10/13/2020
// Note: Understanding ES6+ Destructing operations
console.log("ObjectReact.js...\n");

const person = { name: 'Sarah', country: 'Nigeria', job: 'Developer', friends: [ 'Annie', 'Becky'] };
let { name, country, job } = person;
// const { name, country, job }  = { name: 'Sarah', country: 'Nigeria', job: 'Developer' };

console.log("\nBasic Destruction:");
console.log("Name: " + name)
console.log("Country:" + country);
console.log("Job: " + job);

console.log("\nVariables declared before being passed:");
// let name, country, job;

({ name, friend , job } = person);

console.log("Name: " + name)
console.log("Friend:" + friend);
console.log("Job: " + job);

console.log("\nUsing a new Variable Name:");
let {name: foo, job: bar } = person;
console.log("foo: " + foo);
console.log("bar: " + bar);

console.log("\nUsing Default Values:");
let { myFriend = "Annie" } = person;
console.log("myFriend: " + myFriend);


const prop = "name";
console.log("\nComputed Property Name:");
const {[prop]: foobar } =  { name: 'Sarah', country: 'Nigeria', job: 'Developer' };
console.log("foobar: " + foobar);

console.log("\nCombining Arrays with Objects:");
let { name: foo1, friends: bar1 } = person;
console.log(foo1);
console.log(bar1);

console.log("\nNesting in Object Destructuring:");
const personNested = {
    name: 'Sarah',
    place: {
        city: 'Nigeria',
        country: 'Lagos'
    },
    friends: ['Annie', 'Becky']
}

const { 
    name: x,
    place: {
        city: y,
        country: z
    } 
} = personNested;

console.log("Name: " + x);
console.log("City: " + y);
console.log("Country: " +z);

console.log("\nRest operator in Object Destructuring:");
const personRest = { name3: 'Sarah', country: 'Nigeria', job: 'Developer', friends: ["Diane", "Jane"]};
const { name3, friends, ...others}  = personRest;

console.log(name3);
console.log(friends);
console.log(others);

console.log("\nObject Destructuring and Functions:");
function personFn({name: x, job: y} = {}) {
    console.log(x);
}

personFn({name});//"Sarah"
personFn({name: "Michelle"});//"Michelle"
personFn();//undefined
personFn(friend);//Error : friend is not defined
console.log("\nObject Destructuring and Functions w/Default Values:");
function personFnDefault({name: x = "Sarah", job: y = "Developer"} = {}) {
    console.log(x);
}

personFnDefault(name);

// eof
