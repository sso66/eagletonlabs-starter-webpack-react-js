// src/views/EagletonWebDesigns/Home.jsx
console.info( 'Mounting Home.jsx... <Home />' );

// "customer": CLIENT
//........................................
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from  '../../redux/actionCreators';

export const Home = ( props ) => (
    <div className="home">
        <h1>Welcome Home ...conclusions</h1>
        <p>Now: &nbsp; { props.currentTime.toString() }</p>
        <p>Now: &nbsp; { props.currentTime.toLocaleString() }</p>
        <button onClick={ props.updateTime }>Update Time</button>
    </div>
);

const mapStateToProps = ( state ) => {
       
    return {
        currentTime: state.currentTime
    }
}

const mapDispatchToProps = ( dispatch ) => ({
    updateTime: () => dispatch( actionCreators.fetchNewTime() )
})

export default connect(
    mapStateToProps,  
    mapDispatchToProps  
)(Home);

// eof

    