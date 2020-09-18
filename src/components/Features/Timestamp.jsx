// File: src/views/Home.jsx
// Date: 9/18/2020
// Note: Observer Design Pattern and Participants
// ................................................................................
import React from 'react';
import PropTypes from 'prop-types';
import './Timestamp.sass';

console.log("Mounting src/components/Timestamp.jsx...")

// "customer": CLIENT - child
//........................................
// class Timestamp extends React.Component {
//     render() {
//         return (        
//             <div className='timestamp'>
//                 <span><i>___ Making React Redux Connection ___</i></span>
//                 <p>Today: &nbsp; { this.props.currentTime }</p>
//                 <p>Now: &nbsp; { this.props.currentLocalTime }</p>
//                 <button onClick={ this.props.updateTime }>Update Time</button>
//             </div>
//         )
//     }
// }   

// "customer": CLIENT - child
//........................................
const Timestamp = (props) =>
    (        
        <div className='timestamp'>
            <span><i>___ Making React Redux Connection ___</i></span>
            <p>Today: &nbsp; { props.currentTime }</p>
            <p>Now: &nbsp; { props.currentLocalTime }</p>
            <button onClick={ props.updateTime }>Update Time</button>
        </div>
    )


Timestamp.propTypes = {
    currentTime: PropTypes.string,
    currentLocalTime: PropTypes.string
};

export default Timestamp;

// eof
