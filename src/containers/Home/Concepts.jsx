// Concepts.jsx
console.log("Mounting Concepts.jsx... <Concepts />");

import React from 'react'

import ActionLink from "../../components/Concepts/ActionLink";
import Clock from "../../components/Concepts/Clock";
import Comment from "../../components/Concepts/Comment";
import Greeting from "../../components/Concepts/Greeting";
import HelloWorld from "../../components/Concepts/HelloWorld";
import LoginControl from "../../components/Concepts/LoginControl";
import Mailbox from "../../components/Concepts/Mailbox";
import Page from "../../components/Concepts/Page";
import Toggle from "../../components/Concepts/Toggle";

const messages = ['React', 'Re: React', 'Re:Re: React'];

// hardcoded conceptual data model
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    }, 
}
class Concepts extends React.Component {
    render() {               
        return (
            <div className="Concepts">
                <ActionLink />
                <hr />
                <Clock />
                <hr />
                <Comment 
                    date= {comment.date}
                    text={comment.text} 
                    author={comment.author}
                />
                <hr />
                <Greeting />
                <hr />
                <HelloWorld />
                <hr />
                <LoginControl />
                <hr />
                <Mailbox unreadMessages={messages} />
                <hr />
                <Page />
                <hr />
                <Toggle />
            </div>
        );
    }
}

export default Concepts

// eof
