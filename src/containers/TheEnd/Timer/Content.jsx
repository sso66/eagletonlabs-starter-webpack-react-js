// Content.jsx
console.log("Mounting Content.jsx... <Content />");

import React from 'react'

class Content extends React.Component {
    render() {               
        return (
            <div className="content">
                <div className="line"></div>
                {/* Timer item */}
                <div className="item card">
                    <span>Timer container: The End Item</span>
                </div>
            </div>
        );
    }
}

export default Content

// eof
