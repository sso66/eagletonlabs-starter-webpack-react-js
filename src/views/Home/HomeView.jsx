// File: src/views/Home.jsx
// Date: 9/18/2020
// Note: Observer Design Pattern and Participants
// ................................................................................
console.info( 'Mounting src/views/Home/HomeView.jsx... <HomeView />' );

// "customer": CLIENT - parent
//........................................
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from  '../../redux/actions/actionCreators';
import Timestamp from '../../components/Features/Timestamp';


export const HomeView = (props) => (
    <div className="home">
        <h2 style={{textAlign: "center"}}>Welcome Home</h2>
        <div className='redux'>
            <h3><b>Timestamp Component</b></h3>
            <Timestamp 
                currentTime={props.currentTime.toString()}
                currentLocalTime={ props.currentTime.toLocaleString()}
                updateTime={props.updateTime}
            />
        </div>
    </div>
);

const mapStateToProps = (state) => {         
    return {
        currentTime: state.currentTime
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateTime: () => dispatch( actionCreators.fetchNewTime() )
})

export default connect(
    mapStateToProps,  
    mapDispatchToProps  
)(HomeView);

// eof

    