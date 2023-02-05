// File: src/components/Root/Root.jsx
// Date: 9/14/2019
// Note: Mobile First RWD-SPA 
//..............................................................................
console.log( "Mounting src/components/Root/Root.jsx... <Root />" );

import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { App } from '../App'

function Root({ store }) {
// const Root = ({ store }) => {
    return ( 
        <div className="root">      
            {/* <Provider store={ store }>   */}
                <Router>
                    <Route path="/" component={App} />
                </Router>
            {/* </Provider> */}
        </div>
    );
}

Root.protoTypes = {
    // store: PropTypes.object.isRequired
}
export default Root;

// eof
