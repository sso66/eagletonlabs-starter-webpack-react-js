// views/EagletonEnd/Home.jsx
console.info( 'Mounting Home.jsx... <Home />' );

import React from "react";
import {connect} from 'react-redux';

export const Home = (props) => (
    <div className="content">
        <h1>Welcome Home</h1>
        <p>The time is {props.currentTime.toLocaleTimeString()}</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        currentTime: state.currentTime
    }
}
export default connect(
    mapStateToProps    
)(Home);

// eof

    