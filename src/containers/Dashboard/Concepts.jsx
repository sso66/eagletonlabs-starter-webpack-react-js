// Concepts.jsx
console.log("Mounting Concepts.jsx... <Concepts />");

import React from 'react'
import  Heading from './Heading';

import ActionLink from "../../components/Concepts/ActionLink";
import Clock from "../../components/Concepts/Clock";
import Comment from "../../components/Concepts/Comment";
import Greeting from "../../components/Concepts/Greeting";
import WhyJSX from "../../components/Concepts/WhyJSX";
import LoginControl from "../../components/Concepts/LoginControl";
import Mailbox from "../../components/Concepts/Mailbox";
import Page from "../../components/Concepts/Page";
import Toggle from "../../components/Concepts/Toggle";
import NumberList from "../../components/Concepts/NumberList";
import Blog from "../../components/Concepts/Blog";
import NameForm from "../../components/Concepts/NameForm";

// hardcoded data models
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    }, 
}
const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];
const posts = [
    {id: 1, title: 'Hello World!', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

class Concepts extends React.Component {
    render() {               
        return (
                <div className="">
            <div className="">
                <Heading title="Concepts" />
                {/* Hello World, WhyJSX? & Rendering Elements */}
                <p>1. Hello World, 2. WhyJSX? & 3. Rendering Elements</p>
                <WhyJSX />
                <hr />
                {/* React Components & Props */}
                <p>4. React Component & Props</p>
                <Comment 
                    date= {comment.date}
                    text={comment.text} 
                    author={comment.author}
                />
                  <hr />
                {/* State & Lifecycle */}
                <p>5. State & Lifecycle</p>
                <Clock />
                <hr />
                 {/* Handling Events */}
                <p>6. Handling Events</p>
                <ActionLink />
                <br />
                <Toggle />
                <hr />
                {/* Conditional Rendering */}
                <p>7. Conditional Rendering</p>
                {/* Try changing isLoggedIn={true} */}
                <Greeting isLoggedIn={true} />
                <LoginControl />
                <Mailbox unreadMessages={messages} />
                <Page />
                <hr />
                {/*List & Keys*/}
                <p>8. List & Keys</p>
                <NumberList numbers={numbers} />
                <Blog posts={posts} />
                <hr />
                {/* Forms */}
                <p>9. Forms</p>
                <NameForm />
                <hr />
                {/* Lifting State Up */}
                <p>10. Lifting State Up</p>
                <hr />
                {/* Composition vs Inheritance */}
                <p>11. Composition vs Interitance</p>
                <hr />              
                {/* Thinking in React */}
                <p>12. Thinking in React</p>
                <hr />
            </div>
            </div>
        );
    }
}

export default Concepts

// eof
