// WhyJSX.jsx
console.log("Mounting WhyJSX?.jsx... <WhyJSX? />");

import React from "react";
import './css-animation.sass'

// ReactElement
//const element = <h1>Hello, world!</h1>;

// Embedding Expression in JSX
//const name = "Josh Perez"
//const element = <h1>Hello, <b>{name }</b>!</h1>;

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Haper',
    lastName: 'Perez'
};

// const element = (
    // <h1>Hello, <b>{formatName(user)}</b>!</h1>
// );

// JSX is an Expression Too
// function getGreeting(user) {
    // if (user) {
        // return <h1>Hello, <b>{formatName(user)}</b>!</h1>;
    // }
    // return <h1>Hello, Stranger!</h1>
// }

// Specifying Attributes with JSX
//const element = <div tabIndex="0">Attribute</div>
// const element = <img src={user.avatarUrl} />

// Specifying Children with JSX
// const element = <img src={user.avatarUrl} />

const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see your here.</h2>
    </div>
);

// JSX Prevents Injection Attacks
// JSX Represents Object (Literals)
// const element = React.createElement(
    // 'h1',
    // {className: 'greeting'},
    // 'Hello, world!'
// );

// Rendering and Element into the DOM
// <div id="root"></div>

// Updating the Rendered Element
// function tick() {
      // const element = (
        // <div>
            // <h1>Hello!</h1>
            // <h2>Good to see your here.</h2>
        // </div>
    // );  
//   
// }
// setInterval(tick, 1000)

// React Only Updates What's Necessary

const WhyJSX = () => (
    element
);

export default WhyJSX;

// eof
