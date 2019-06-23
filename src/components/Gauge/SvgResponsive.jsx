// SvgResponsive.jsx
console.log("Mounting SvgResponsive.jsx ... <SvgResponsive />");

import React from 'react';
import './svg-responsive.sass';

const SvgResponsive = (
    { 
        fill="#f7941e", 
        stroke="#231f20", 
        opacity="0.6", 
}) => (
    <div className="svg-container">
        
        <svg 
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
            className="svg-content"
        >
            <circle 
                cx="250"
                cy="250"
                r="100"
                stroke={stroke}
                strokeWidth="10"
                strokeMiterlimit="1"
                fill={fill}
                opacity={opacity}
            />
        </svg>  
    </div>
);

export default SvgResponsive;

// eof