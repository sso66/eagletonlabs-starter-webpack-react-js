// Content.jsx
console.log("Mounting Content.jsx... <Content />");

import React from 'react'
import Gauge from "../../../components/Gauge/Gauge";

import HelloWorld from "../../../components/User/HelloWorld";
import Listing from "../../../components/User/Listing";
import LikeMe from "../../../components/User/LikeMe";

class Content extends React.Component {
    render() {               
        return (
            <div className="content">
                <div className="line"></div>
                {/* Home item */}
                <div className="item card">
                    <span>Eagleton End container: The End Item</span>
                    <Gauge />
                    <HelloWorld name="Stephen Oo" />
                    <LikeMe />
                    <hr />
                    <Listing />
                    <hr />
                    
                </div>
            </div>
        );
    }
}

export default Content

// eof
