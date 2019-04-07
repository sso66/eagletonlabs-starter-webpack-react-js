// WhyJSX.es6
console.log("Mounting WhyJSX.es6... <WhyJSX />");

import React from "react";

const name = 'Ocean Alexander';

const user = {
	firstName: 'Ocean',
	lastName: 'Alexander'
}

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
	if (user) {
		return <h1>Bon voyage, {formatName(user)}!</h1>
	}
	return <h1>Hello, Stranger</h1>;
}

//const element = <h1>Hello, {name}</h1>;
//const element = <h1>Bon voyage, {formatName(user)}!</h1>;
//const element = getGreeting(user);
const element = getGreeting();

const OA = () => (
	element
);

export default OA;

// eof
