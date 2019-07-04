// Practices.jsx
console.log("Mounting Practices.jsx... <Practices />");

import React from 'react'
import  Heading from './Heading';

import HelloWorld from "../../components/Practices/HelloWorld";
import LikeMe from "../../components/Practices/LikeMe";
import Listing from "../../components/Practices/Listing";
import Notification from "../../components/Practices/Notification";

class Practices extends React.Component {
    render() {               
        return (
            <div className="">
            <div className=""> 
                <Heading title="Practices" />
                <HelloWorld name="Stephen Oo" />
                <hr />
                <LikeMe />
                <hr />
                <Listing whatsoever="Eagleton Endpoint" />
                <hr />
                <Notification level={3} message="danger" />
            </div>
            </div>
        );
    }
}

export default Practices

// eof
