// Practices.jsx
console.log("Mounting Practices.jsx... <Practices />");

import React from 'react'
import Heading from './Heading';
import HelloWorld from "../../components/Practices/HelloWorld";
import Listing from "../../components/Practices/Listing";
import LikeMe from "../../components/Practices/LikeMe";
import Alert from "../../components/Practices/Alert";

class Practices extends React.Component {
    render() {               
        return (
            <div className="practices"> 
                <Heading title="Practices" />
                <HelloWorld name="Stephen Oo" />
                <hr />
                <LikeMe />
                <hr />
                <Listing whatsoever="Eagleton Endpoint" />
                <hr />
                <Alert level={3} message="warning" />
            </div>
        );
    }
}

export default Practices

// eof
