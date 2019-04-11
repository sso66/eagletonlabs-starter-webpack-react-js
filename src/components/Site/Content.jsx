// Content.jsx
console.log("Mounting Content.jsx... <Content />");

import React from 'react'

import activity from '../../utils/activity.js';
console.log("activity" + activity.timestamp)
class Content extends React.Component {
    render() {
        
        const {activity} = this.props; // ES6 destructuring
        
        return (
            <div className="content">
                <div className="line"></div>
                    Content Area
                <input type="text" value={activity} disabled />
            </div>
        );
    }
}

export default Content

// eof
