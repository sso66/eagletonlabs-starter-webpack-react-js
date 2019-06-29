// Concepts.jsx
console.log("Mounting Concepts.jsx... <Concepts />");

import React from 'react'

class Concepts extends React.Component {
    render() {               
        return (
            <div className="pane">
            <div className="Concepts">
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

export default Concepts

// eof
