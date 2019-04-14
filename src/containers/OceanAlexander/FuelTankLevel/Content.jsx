// Content.jsx
console.log("Mounting Content.jsx... <Content />");

import React from 'react'

class Content extends React.Component {
    render() {               
        return (
            <div className="content">
                {/*   <div className="line"></div>
              Home item */}
                <div className="item">
                    <div className="card"><div className="button is-primary is-small">SHOW TABS</div></div>  
                    <div className="card">AC PWR SELECT /AC MAIN BREAKERS</div>
                    <div className="card">AIR CONDITIONING</div>
                    <div className="card">APPLIANCES</div>
                    <div className="card">MECHANICAL</div>
                    <div className="card">OUTLETS AV</div>   
                    <div className="card">LIGHTING</div>
                    <div className="card">NAVIGATION</div>
                    
                </div>
            </div>
        );
    }
}

export default Content

// eof
