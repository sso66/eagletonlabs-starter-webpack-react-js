// File: src/views/Home.jsx
// Date: 9/1P/2020
// Note: Observer Design Pattern and Participants
// ................................................................................
console.info( 'Mounting src/views/Home.jsx... <Home />' );

// "customer": CLIENT
//........................................
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from  '../redux/actions/actionCreators';

export const Home = (props) => (
    <div className="home">
        <h2>Welcome Home ...Final Steps to Production</h2>
        <div className='redux'>
            <span><b>React Redux Connection</b></span>
            <p>Today: &nbsp; { props.currentTime.toString() }</p>
            <p>Now: &nbsp; { props.currentTime.toLocaleString() }</p>
            <button onClick={ props.updateTime }>Update Time</button>
        </div>
    </div>
);

console.log("___ mapStateToProps ___");
const mapStateToProps = ( state ) => {         
    return {
        currentTime: state.currentTime
    }
}

console.log("___ mapDispatchToProps ___");
const mapDispatchToProps = ( dispatch ) => ({
    updateTime: () => dispatch( actionCreators.fetchNewTime() )
})

console.log("___ connect Redux API to React UI ___");
export default connect(
    mapStateToProps,  
    mapDispatchToProps  
)(Home);

// eof

    