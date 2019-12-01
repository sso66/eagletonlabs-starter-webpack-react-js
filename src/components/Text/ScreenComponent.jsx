// File: ScreenComponent.jsx
// Desc: Screens Setup Configuration Template for all N2K Components
// Date: 11/30/2019
//..............................................................................
console.log("Mounting ScreenComponent... <ScreenComponent />");

import React from 'react';
import './n2k-svg.sass'

class ScreenComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        //let opts = Object.assign( {}, this.props )
        
        let {
            display='',
            width='100%',
            height='100%',
            viewBox='0 0 40 40',
            strokeWidth='0.1',
            style={ 
                backgroundColor: "#fff",
                margin: "auto", 
                border: "3px solid #f00",
                padding: "5px",
            },
            //className=`svg-icon ${className || ""}`
        } = this.props; //opts;
        
        let radius = width / 2;
        let diameter = 2 * radius;
        let circumference = 2 * Math.PI * radius;
        let area = Math.PI * radius * radius;
        
        let opts = Object.assign( { radius, diameter, circumference, area }, this.props );
        
        console.log (
            "\n ___ this.props: values ___"  +
            "\n title: " + opts.title +
            "\n value: " + opts.value +
            "\n units: " + opts.name +
            "\n width: " + opts.width +
            "\n height: " + opts.height +
            "\n radius: " + opts.radius + 
            "\n diameter: " + opts.diameter + 
            "\n circumference: " + Math.ceil(opts.circumference) +
            "\n area: " + Math.floor(area)
        )
        
        
        return (
            // viewport: svg-root (dimension)
            <svg 
                display={display}
                width={width} 
                height={height}
                viewBox={viewBox}
                style={style}
                //className={className}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                {...this.props} 
                // {...this.opts}
            >
                // bounding box: svg-main (coordination)
                <rect
                    className="bounding-box"
                    display=""
                    x="0"
                    y="0" 
                    width={width}
                    height={height}
                 />
                // viewport: svg-main
                <svg
                    viewBox="0 0 36 36"
                    preserveAspectRatio="xMinYMin meet" 
                    x="0"
                    y="0"                
                  >
                    // bounding box: svg-header
                    <rect
                        className="bounding-box"
                        display=""
                        x="1%"
                        y="1%" 
                        width="98%" 
                        height="14%" 
                        strokeWidth={strokeWidth}                    
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
                            //style={{filter:"url(#glow)"}}                                                                    
                        >
                            <tspan>{this.props.title}</tspan>
                        </text>
                    </svg>  
                    // bounding box: svg-content
                    <rect
                        className="bounding-box"
                        display=""
                        x="1%"
                        y="16%"
                        width="98%"
                        height="68%" 
                        //stroke={stroke}
                        strokeWidth={strokeWidth}
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
                        // Gauge component
                        <circle
                            className="gauge"
                            display=""
                            cx="50%"
                            cy="50%"
                            r="15.70795"
                            strokeWidth={2}
                        />
                        // Digital component
                        <rect
                            className="digital"
                            display=""        
                            x="2%"
                            y="17%"
                            rx="0.1"
                            ry="0.1"
                            width="96%"
                            height="66%"
                            strokeWidth={0.3}
                        />
                        <text
                            className="value"
                            display="" 
                            x="50%" 
                            y="65%" 
                            textAnchor="middle"
                            //style={{filter:"url(#glow)"}} 
                        >
                            <tspan>{this.props.value}</tspan>
                        </text>
                    </svg>
                    // bounding box: svg-footer
                    <rect
                        className="bounding-box"
                        display=""
                        x="1%"
                        y="85%"
                        width="98%"
                        height="14%"
                        strokeWidth={strokeWidth}
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
                            x="50%" 
                            y="65%" 
                            textAnchor="end"
                            //style={{filter:"url(#glow)"}}
                        >
                            <tspan>{this.props.name}</tspan>
                        </text>
                    </svg>
                </svg>
            </svg> 
        )
    }
}

export default ScreenComponent;

// eof
