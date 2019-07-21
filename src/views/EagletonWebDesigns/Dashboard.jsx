// Dashboard.jsx
console.log("Mounting Dashboard.jsx ... <Dashboard />");

import React from "react";
import Concepts from '../../containers/Dashboard/Concepts';
import Practices from '../../containers/Dashboard/Practices';

const Dashboard = (props) => {
    return (
        <div className="dashboard">  
            <h2>Dashboard</h2> 
            <section className="section">
                <div className="container">               
                    <div className="columns">  
                     
                        <div className="column">
                            <h2 className="title is-4">Concepts</h2>
                            <Concepts />            
                        </div>
                     
                         <div className="column">
                            <h2 className="title is-4">Practices</h2>
                            <Practices />
                        </div>
                        
                         <div className="column">
                            <h2 className="title is-4">Concepts Reuse</h2>
                            <Concepts />            
                        </div>
                    </div>     
                </div>
            </section>    
        </div>
    );
}

export default Dashboard;

// eof

