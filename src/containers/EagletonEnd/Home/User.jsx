// User.jsx
console.log("Mounting User.jsx... <User />");

import React from 'react'

import HelloWorld from "../../../components/User/HelloWorld";
import Listing from "../../../components/User/Listing";
import LikeMe from "../../../components/User/LikeMe";

class User extends React.Component {
    render() {               
        return (
            <div className="pane">
            <div className="User">
                <div className="line"></div>
                {/* Home items */}
                <div className="item card">

                    <span>Eagleton End container: The End Item</span>
                    <HelloWorld name="Stephen Oo" />
                    <LikeMe />
                    <hr />
                    <Listing />
             

                </div>
            </div>
            </div>
        );
    }
}

export default User

// eof
