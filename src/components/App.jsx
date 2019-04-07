// App.jsx
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import Header from "../components/Site/Header";
import Content from "../components/Site/Content";
import Footer from "../components/Site/Footer";

import Timeline from "../components/Timeline/Timeline";
import Clock from "../components/Timer/Clock";
import HelloWorld from "../components/Concepts/HelloWorld";
import OA from "../components/Concepts/WhyJSX";
import Comment from "../components/Concepts/Comment";

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
                    <HelloWorld />
                    <Header />
                    <OA />
                    <Comment
                        date={comment.date}
                        text={comment.text}
                        author={comment.author} />
                    <Content />
                    <Timeline />
                    <Clock />
                    <Footer />   
                </div>       
            </div>
         )
    } 
}

export default App;

// eof
