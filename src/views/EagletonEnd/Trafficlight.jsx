// views/EagletonEnd/Trafficlight.jsx
console.info( 'Mounting Trafficlight.jsx... <Trafficlight />' );

import React from 'react';
import { Stoplight } from '../../redux/modules/Stoplight/stoplight';
import { Buttons } from '../../redux/modules/Stoplight/buttons';

// < UIViewDatasource >
class Trafficlight extends React.Component {

    render() {
        return (
            <div>
                <h2>Traffic Light</h2>
               <Stoplight store={this.props.store} />
               <Buttons store={this.props.store} />
            </div>
        )
    }    
}

export default Trafficlight;

// eof