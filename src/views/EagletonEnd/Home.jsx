// src/views/EagletonEnd/Home.jsx
console.info( 'Mounting Home.jsx... <Home />' );

import React from "react";
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/currentTime';

export const Home = (props) => (
    <div className="home">
        <h1>Welcome Home</h1>
        <p>The time is {props.currentTime.toString()}</p>
        <button onClick={props.updateTime}>Update</button>
    </div>
);

const mapStateToProps = state => {
    return {
        currentTime: state.currentTime
    }
}

const mapDispatchToProps = dispatch => ({
    update: () => dispatch(props.actions.currentTime.updateTime())
})
export default connect(
    mapStateToProps,  
    mapDispatchToProps  
)(Home);

// eof

    