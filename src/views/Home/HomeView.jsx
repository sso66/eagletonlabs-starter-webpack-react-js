// File: src/views/Home/HomeView.jsx
// Date: 9/18/2020
// Note: Observer Design Pattern and Participants
// ................................................................................
console.info( 'Mounting src/views/Home/HomeView.jsx... <HomeView />' );

// "customer": CLIENT - parent
//........................................
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from  '../../redux/actions/client/actionCreators';
import { Timestamp } from '../../components/Features/Timestamp';
// import { ActionLink, LoginControl, Toggle } from '../../components/Features/Concepts'
import { MobileFirst } from '../../components/Features/Matrix'
import Heading from '../../components/Site/Heading/Heading';
import SourceOrder from '../../components/Features/Flexbox/SourceOrder';
import Header from '../../components/Site/Header/Header'
import './HomeView.sass';

export const HomeView = (props) => (
    <div className="homeview">
        {/* <Header /> */}
        {/* <Heading /> */}
        <h1>Eagleton Labs</h1>
        <h2 style={{ textAlign: "center" }}>Home</h2>
        <h3 style={{ textShadow: '3px 3px #0000FF', fontSize:'1.5rem' }}>NOW I WON</h3>
        <div className='redux'>
            {/* <h3><b>Timestamp Component</b></h3> */}
            {/* <Timestamp 
                currentTime={props.currentTime.toString()}
                currentLocalTime={ props.currentTime.toLocaleString()}
                updateTime={props.updateTime}
            /> */}
        </div>
        {/* <ActionLink />
        <LoginControl />
        <Toggle /> */}
        {/* <SourceOrder /> */}
        {/* <MobileFirst /> */}
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
    