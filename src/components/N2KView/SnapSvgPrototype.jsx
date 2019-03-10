// SnapSvgPrototype.jsx
console.log( 'Mounting SnapSvgPrototype.jsx... <SnapSvgPrototype />' );

import React, { Component } from 'react';
import Snap from 'snapsvg-cjs'

class SnapSvgPrototype extends Component {
    constructor(props) {
        super(props);
    }
  
    componentDidMount() {
        this.snap();
    }
  
    componentDidUpdate() {
      //this.snap();
    }
  
    componentWillUnmount() {
      // do something
    }
  
    snap() {
        const s = Snap("#svg");
        let circle = s.circle(200, 200, 25).attr({fill: 'rgba(0,0,0,0.5)', stroke: '#666', strokeWidth: 1})
        s.text(15, 15, 'Snap Integration');   
 
        const blink = () => {
            circle.animate({r: 1}, 200, () => {
                circle.animate({r: 100}, 300);
            });
        }   
        setInterval(blink, 3000);
        //setTimeout(blink, 3000);
    }
  
    render() {
        return (
            <svg 
                id="svg" 
                width="400" 
                height="400" 
                viewBox="0 0 400 400"
                preserveAspectRatio="xMidYMid meet"
                style={{backgroundColor: 'lightblue'}}
            >      
                <text x="10" y="250">SVG React Product</text>
                <g transform="rotate(270 200 200) translate(0 -30)">
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="#000" strokeWidth="65" strokeDasharray="471 943"/>
                    
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="#e04644" strokeWidth="60" strokeDasharray="471 943"/>
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="#7ccce5" strokeWidth="60" strokeDasharray="314 943"/>
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="#fde47f" strokeWidth="60" strokeDasharray="157 943"/>
                    
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="#000" strokeWidth="65" strokeDasharray="471 943" display="none"/>
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="#000" strokeWidth="65" strokeDasharray="2 469"/>
                </g>
            </svg>
        )
    }
}

export default SnapSvgPrototype;

// eof