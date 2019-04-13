// Content.jsx
console.log("Mounting Content.jsx... <Content />");

import React from 'react'

class Content extends React.Component {
    render() {               
        return (
            <div className="content">
                <div className="line"></div>
                {/* Timeline item */}
                <div className="item card">
                    <span>Timeline: The End Item</span>
                </div>
            </div>
        );
    }
}

export default Content

// eof
