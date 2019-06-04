// SvgResponsive.jsx
console.log("Mounting SvgResponsive.jsx ... <SvgResponsive />");
import React from 'react';
import './svg-responsive.sass';

const SvgResponsive = (props) => (
    <div className="svg-container">
       
        <svg 
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin slice"
            className="svg-conttainer">
            <circle 
                fill="#fff"
                stroke="#000"
                strokeWidth="10"
                strokeMiterlimit="10"
                cx="250"
                cy="250"
                r="200"
                opacity="0.6"
               // className="svg-content"   
            />
           
        </svg>
          
    </div>
);

export default SvgResponsive;

// eof