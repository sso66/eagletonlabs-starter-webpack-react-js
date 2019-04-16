// App.jsx
console.info( 'Mounting App.jsx... <App />' );

import React from "react";

import Home from "../views/EagletonEnd/Home";

import Header from "../components/Site/Header/Header";
import Footer from "../components/Site/Footer/Footer";


//import activity from '../utils/activity.js';
//import Timer from "../components/Timer/Clock";
// import Like from "../components/User/Like";
// import Facebook from "../components/User/Facebook";
// import HelloWorld from "../components/Concepts/HelloWorld";
// import OA from "../components/Concepts/WhyJSX";
// import Comment from "../components/Concepts/Comment";
// import Clock from "../components/Concepts/Clock";
// import ActionLink from "../components/Concepts/ActionLink";
// import Toggle from "../components/Concepts/Toggle";
// import Greeting from "../components/Concepts/Greeting";
// import LoginControl from "../components/Concepts/LoginControl";
// import Mailbox from "../components/Concepts/Mailbox";
// import Page from "../components/Concepts/Page";

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
            <div className="frame">  
                <div className="panel">  
                    <Header title="Eagleton End"/>    
                    <Home />

                    {/*          
                    <Timer />                                  

                    <Like />
                    <hr />
                    <Facebook name="OctoPlex" />
                    <hr />
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
                    <hr />
                    {/* Try changing to isLoggedIn={true}
                    <Greeting isLoggedIn={true} />
                    <hr />
                    <LoginControl />
                    <hr />
                    <Mailbox unreadMessages={messages} />
                    <hr />
                    <Page />
                     */}
                    <Footer />   
                </div>       
            </div>
         )
    } 
}

export default App;

// eof
