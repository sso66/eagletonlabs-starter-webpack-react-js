// File: ScreenComponent.jsx
// Desc: Screens Setup Configuration Template
// Date: 11/30/2019
//..............................................................................
console.log("Mounting ScreenComponent... <ScreenComponent />");

import React from 'react';
import './n2k-svg.sass';

const ScreenComponent = (props, {
    width='40%',
    height='40%',
    viewBox='0 0 200 200',
    //preserveAspectRatio='xMidYMid meet',
    stroke='rgba(0, 0, 255, 0)',
    //stroke="url(#linearGradient)",
    fill='rgba(255, 255, 255, 0)',
    //fill="url(#linearGradient)",
    style={ 
        backgroundColor: "transparent",
        margin: "auto", 
        border: "3px solid #f00",
        padding: "5px",
    },
    className=`svg-icon ${className || ""}`,
}) => (
    // viewport: svg-root
    <svg 
        width={width} 
        height={height}
        viewBox={viewBox}
        //preserveAspectRatio={preserveAspectRatio}
        style={style}
        //className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        // bounding box: svg-main
        <rect
            display=""
            x="0"
            y="0" 
            stroke={stroke} 
        />
        // viewport: svg-main
        <svg
            x="0"
            y="0"                  
            stroke={"green"}
            viewBox="0 0 40 40" 
         >
        // bounding box: svg-header
        <rect
            display=""
            x="1%"
            y="1%" 
            width="98%" 
            height="14%" 
            //stroke={stroke} 
            //fill={fill}
        />
       
        // viewport: svg-header
        <svg
            x="1%"
            y="1%" 
            width="98%" 
            height="14%" 
            viewBox="0 0 36 36"
            preserveAspectRatio="xMidYMid meet"                
        >

            <text
                className="title"
                display="" 
                x="50%" 
                y="65%"
                
                textAnchor="middle"
                
            >
                <tspan>{props.title}</tspan>
            </text>
        </svg>  
        // bounding box: svg-content
        <rect
            display=""
            x="1%"
            y="16%"
            width="98%"
            height="68%"
            //stroke={stroke}
            //fill={fill}
            
        />
        // viewport: svg-content
        <svg
            x="1%"
            y="16%"
            width="98%"
            height="68%"
            viewBox="0 0 36 36"
            preserveAspectRatio="xMidYMid meet"
        >
            <text
                className="value"
                display="" 
                x="50%" 
                y="60%" 
                textAnchor="middle"
            >
                <tspan>{props.value}</tspan>
            </text>
        </svg>
        // bounding box: svg-footer
        <rect
            display=""
            x="1%"
            y="85%"
            width="98%"
            height="14%"
            stroke={stroke}
            fill={fill}
        />
        // viewport: svg-footer
        <svg
            x="1%"
            y="85%"
            width="98%"
            height="14%"
            viewBox="0 0 36 36"        
            preserveAspectRatio={"xMaxYMid meet"}           
        >
            <text
                className="units"
                display="" 
                x="60%" 
                y="65%" 
                textAnchor="end"
                 //style={{filter:"url(#glow)"}}
            >
                <tspan>{props.name}</tspan>
            </text>
        </svg>
        </svg>
    </svg> 
)

export default ScreenComponent;

// eof
