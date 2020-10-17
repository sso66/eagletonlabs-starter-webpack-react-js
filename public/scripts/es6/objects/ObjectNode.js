// File: es6/objects/ObjectNode.js
// Date: 10/13/2020
// Note: Understanding ES6+ Objet Destructing operations

console.log("ObjectNode.js...\n");

const person = { name: 'Sarah', country: 'Nigeria', job: 'Developer', friends: [ 'Annie', 'Becky'] };
let { name, country, job } = person;
// const { name, country, job }  = { name: 'Sarah', country: 'Nigeria', job: 'Developer' };

console.log("\n1. Basic Object Destruction:");
console.log("Name: " + name)
console.log("Country:" + country);
console.log("Job: " + job);

console.log("\n2. Variables declared before being passed:");
// let name, country, job;

({ name, friend , job } = person);

console.log("Name: " + name)
console.log("Friend:" + friend);
console.log("Job: " + job);

console.log("\n3. Using a new Variable Name:");
let {name: foo, job: bar } = person;
console.log("foo: " + foo);
console.log("bar: " + bar);

console.log("\n4. Using Default Values:");
let { myFriend = "Annie" } = person;
console.log("myFriend: " + myFriend);


const prop = "name";
console.log("\n5. Computed Property Name:");
const {[prop]: foobar } =  { name: 'Sarah', country: 'Nigeria', job: 'Developer' };
console.log("foobar: " + foobar);

console.log("\n6. Combining Arrays with Objects:");
let { name: foo1, friends: bar1 } = person;
console.log(foo1);
console.log(bar1);

console.log("\n7. Nesting in Object Destructuring:");
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

console.log("\n8. ...Rest operator in Object Destructuring:");
const personRest = { name3: 'Sarah', country: 'Nigeria', job: 'Developer', friends: ["Diane", "Jane"]};
const { name3, friends, ...others}  = personRest;

console.log(name3);
console.log(friends);
console.log(others);

console.log("\n9. Object Destructuring and Functions:");
function personFn({name: x, job: y} = {}) {
    console.log(x);
}

personFn({name});//"Sarah"
personFn({name: "Michelle"});//"Michelle"
personFn();//undefined
personFn(friend);//Error : friend is not defined

console.log("\n10. Object Destructuring and Functions w/Default Values:");
function personFnDefault({name: x = "Sarah", job: y = "Developer"} = {}) {
    console.log(x);
}

personFnDefault(name);

// eof
