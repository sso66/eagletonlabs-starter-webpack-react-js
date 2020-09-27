// File: src/component/Site/Slot/Slot.jsx
// Desc: React Pattern: "slots" props at work
// Date: 8/10/2019
//..............................................................
console.log( "Mounting Layout.jsx... <Slot />" );

import React from "react";

const Slot = ( props ) => {
    return (
        <div className="layout">
            <div className="top">{ props.top }</div>
            <div className="left">{ props.left }</div>
            <div className="bottom">{ props.bottom }</div>
            <div className="right">{ props.right }</div>            
            <div className="center">{ props.center }</div>        
        </div>
    )
}

export default Layout;

// eof