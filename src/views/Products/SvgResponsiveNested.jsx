// SvgResponsiveNested.jsx
console.log("Mounting SvgResponsiveNested.jsx ... <SvgResponsiveNested />");

import React from 'react';
import './svg-responsive.sass';

const SvgResponsiveNested = (
    { 
        // preset values
        fill="#f7941e", 
        stroke="#231f20", 
        strokeWidth=5,
        opacity="0.6", 
}) => (
    // HTML Block Formatted Context
    <div className="svg-container">
        {/* Parent SVG: concerns with size */}
        <svg    
            //width="1024" 
            //height="768"   
            //width="768"  
            //height="1024"  
            viewBox="0 0 500 500"
            className="svg-content"
        >
            // Main Component: Gauge 
            <circle 
                cx="250"
                cy="250"
                r="225"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeMiterlimit="1"
                fill={fill}
                opacity={opacity}
            />
            // Header Component: Title
            <rect 
                x="50" 
                y="50" 
                width="50" 
                height="400" 
                stroke="blue"
                strokeWidth={3}
                fill="rgba(225, 0, 0, 1)"
            />
            // Child SVG: concerns with position
            <svg 
                x="50"
                y="50"
                width="50" 
                height="400" 
                viewBox="0 0 50 50"
                preserveAspectRatio="xMidYMax slice"
             >              
                <circle 
                    cx="25"
                    cy="25"
                    r="20"
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeMiterlimit="1"
                    fill={fill}
                    //opacity={opacity}
                />
            </svg>
            // Footer Area
            <rect 
                x="400" 
                y="50" 
                width="50" 
                height="400" 
                stroke="blue"
                strokeWidth={3}
                fill="rgba(225, 0, 0, 1)"
            />
            // Child SVG: concerns with position
            <svg 
                x="400"
                y="50"
                width="50" 
                height="400" 
                viewBox="0 0 50 50"
                //preserveAspectRatio="xMaxYMin meet"
                preserveAspectRatio="none"
             >              
                <circle 
                    cx="25"
                    cy="25"
                    r="20"
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeMiterlimit="1"
                    fill={fill}
                    //opacity={opacity}
                />
            </svg>             
        </svg>  
    </div>
);

export default SvgResponsiveNested;

// eof