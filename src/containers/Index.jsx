// src/containers/Index.jsx
// Apply to build complex layout with multiple children
console.log("Mounting Index.jsx... <Index />");

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from "../components/Site/Nav/Navbar";

class Index extends React.Component {
     render() {

        return (
            <div className="app">
                <Navbar /> 
                
                <div className="page">
                    Provision for redux module
                    currentUser props for Login/Logout multi-user scenarios
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    
}))(Index);

// eof