// App.jsx
console.info( 'Mounting App.jsx... <App />' );

import React from "react";

import Home from "../views/EagletonEnd/Home";

import Header from "../components/Site/Header/Header";
import Footer from "../components/Site/Footer/Footer";

//import activity from '../utils/activity.js';

import HelloWorld from "../components/Concepts/HelloWorld";
import OA from "../components/Concepts/WhyJSX";
import Comment from "../components/Concepts/Comment";
import Clock from "../components/Concepts/Clock";
import ActionLink from "../components/Concepts/ActionLink";
import Toggle from "../components/Concepts/Toggle";
import Greeting from "../components/Concepts/Greeting";
import LoginControl from "../components/Concepts/LoginControl";
import Mailbox from "../components/Concepts/Mailbox";
import Page from "../components/Concepts/Page";

// hardcoded conceptual data model
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    }, 
};

const messages = ['React', 'Re: React', 'Re:Re: React'];

class App extends React.Component {
    render() {       
        return (
            <div>  
                <Header title="Eagleton End"/> 
                <Home />
                <Footer />   
            </div>       
         )
    } 
}

export default App;

// eof
