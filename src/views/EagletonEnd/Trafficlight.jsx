// views/EagletonEnd/Trafficlight.jsx
console.info( 'Mounting Trafficlight.jsx... <Trafficlight />' );

import React from 'react';
import { Stoplight } from '../../redux/stoplight';
import { Buttons } from '../../redux/buttons';

// < UIViewDatasource >
class Trafficlight extends React.Component {

    render() {
        return (
            <div>
               <Stoplight store={this.props.store} />
               <Buttons store={this.props.store} />
            </div>
        )
    }    
}

export default Trafficlight;

// eof