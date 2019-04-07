// App.jsx
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import Header from "../components/Site/Header";
import Content from "../components/Site/Content";
import Footer from "../components/Site/Footer";

import Timeline from "../components/Timeline/Timeline";
import Timer from "../components/Timer/Clock";

import HelloWorld from "../components/Concepts/HelloWorld";
import OA from "../components/Concepts/WhyJSX";
import Comment from "../components/Concepts/Comment";
import Clock from "../components/Concepts/Clock";
import ActionLink from "../components/Concepts/ActionLink";
import Toggle from "../components/Concepts/Toggle";

// hardcoded data model
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  }, 
};

class App extends React.Component {
    render() {       
        return (
            <div className="frame">  
                <div className="panel">  
                    <Header />
                    
                    <HelloWorld />
                    <hr />
                    <OA />
                     <hr />
                    <Comment
                        date={comment.date}
                        text={comment.text}
                        author={comment.author} />
                    <hr />
                    <Clock />
                    <hr />
                    <ActionLink />
                    <hr />
                    <Toggle />
                    
                    <Content />
                    
                    <Timeline />
                    <Timer />
                    
                    <Footer />   

                </div>       
            </div>
         )
    } 
}

export default App;

// eof
