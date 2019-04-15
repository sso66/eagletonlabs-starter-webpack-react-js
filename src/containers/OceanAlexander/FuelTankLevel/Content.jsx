// Content.jsx
console.log("Mounting Content.jsx... <Content />");

import React from 'react'
//import Tank from "../../../components/Tank/Tank";

class Content extends React.Component {
    render() {               
        return (
            <div className="content">
                <div className="line"></div>
                <div className="item">
                    <div className="card"><div className="button is-primary is-small">DIAGNOSTICS</div></div>  
                    <div className="card">ENGINES</div>
                    <div className="card">AC / DC POWER MONITOR</div>
                    <div className="card">FRESH WATER / FUEL TANK MANAGEMENT</div>
                    <div className="card">HEAD / GRAY WATER SYSTEM</div>
                    <div className="card">VESSEL STATUS</div>   
                    <div className="card">BILGE STATUS</div>
                    <div className="card">QUICK START</div>
                    
                </div>
            </div>
        );
    }
}

export default Content

// eof
