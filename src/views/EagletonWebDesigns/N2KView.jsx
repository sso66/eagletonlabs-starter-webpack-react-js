// src/views/EagletonWebDesigns/N2KView.jsx
console.info( 'Mounting N2KView.jsx... <N2KView />' );

// "customer": CLIENT
//........................................
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from  '../../redux/actionCreators';

//import N2KItem from '../../components/Text/N2KItem'
//import N2KProduct from '../../components/Text/N2KProduct'
import ScreenComponent from '../../components/Text/ScreenComponent'

export const N2KView = ( props ) => (
    <div>
    
    {/* <div className="N2KView">
        // <h1>Welcome N2KView ...conclusions</h1>
        // <p>Now: &nbsp; { props.currentTime.toString() }</p>
        // <p>Now: &nbsp; { props.currentTime.toLocaleString() }</p>
        // <button onClick={ props.updateTime }>Update Time</button>    
    </div> */}

    <div>
    
        <ScreenComponent 
            title="N2KView" 
            value="360" 
            name="Degree"
        />
    </div>
    
    <div></div>
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

    