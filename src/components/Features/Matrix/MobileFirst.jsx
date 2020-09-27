// File: MobileFirst.jsx
// Date: 9/25/2020
// Note: CSS Flexbox Module Integration

import React from 'react';
import './MobileFirst.sass';

class MobileFirst extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='row'>
                    <div className='col red-column small-column'>
                        First Column
                    </div>
                    <div className='col green-column medium-column'>
                        Second Column
                    </div>
                    <div className='col blue-column'>
                        Third Column
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileFirst;

// eof
