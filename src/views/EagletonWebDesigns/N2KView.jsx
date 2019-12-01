// File: src/views/EagletonWebDesigns/N2KView.jsx
// Description: Screens Setup Configuration Template for all N2K Components
// Date: 11/30/2019
//..............................................................................
console.info( 'Mounting N2KView.jsx... <N2KView />' );

// "customer": CLIENT
//-------------------------------------------------
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from  '../../redux/actionCreators';
import ScreenComponent from '../../components/Text/ScreenComponent'


export const N2KView = ( props ) => (
    <div className="app">  
      
        <div className="header">
            <h1>Welcome N2KView ...conclusions</h1>
            <p>Now: &nbsp; { props.currentTime.toString() }</p>
            <p>Now: &nbsp; { props.currentTime.toLocaleString() }</p>
            <button onClick={ props.updateTime }>Update Time</button>    
        </div> 

        <div className="main">    
            <ScreenComponent 
                title="N2KView" 
                value="360" 
                name="Degree"
                display=""
                width="100"
                height="100"
            />
            <ScreenComponent 
                title="N2KView" 
                value="360" 
                name="Degree"
                display=""
                width="200"
                height="200"
            />
           <ScreenComponent 
                title="N2KView" 
                value="360" 
                name="Degree"
                display=""
                width="300"
                height="300"
            />
       </div>
    
        <div className="footer"></div>
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
)(N2KView);

// eof

    