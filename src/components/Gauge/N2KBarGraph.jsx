// N2KBarGraph.jsx 
console.log("Mounting BarGraph.jsx ... <BarGraph />");

import React from 'react';

class BarGraph extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentValue: 0,
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
   
    }
    
    render() {
        let {fill = '#000', stroke = '#999'} = this.props;
        
        return (
            <svg
                 width='100%'
                 height='100%'
                 viewBox='0 0 200 300'
                 xmlns='http://www.w3.org/2000/svg'
                 xmlnsXlink='http//www.w3.org/1999/xlink'
                 className=''
                 {...this.props}
            >
                // bounding box: header
                <rect
                    display=''
                    x='1%'
                    y='1%'
                    width='15%'
                    height='98%'
                    stroke={stroke}
                    fill={fill}
                />
                <svg
                    x='1%'
                    y='1%'
                    width='15%'
                    height='98%'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='xMidYMid meet'
                >   
                    <text
                        x='50%'
                        y='50%'
                        stroke='none'
                        fill='#fff'   
                        textAnchor='start'                    
                        fontSize='52'
                        fontFamily='sans-serif'
                        //fontFamily='Brush Script MT, Brush Script, Segoe Script, cursive'
                        transform='rotate(270 20 10)'
                    >
                        <tspan>
                           Starboard Fuel
                        </tspan>
                    </text>
                </svg>
                 // bounding box: main
                <rect
                    display=''
                    x='16%'
                    y='1%'
                    width='70%'
                    height='98%'
                    stroke={stroke}
                    fill={fill}
                />
                <svg
                    x='16%'
                    y='1%'
                    width='70%'
                    height='98%'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='xMidYMid meet'
                >   
                    <text
                        x='50%'
                        y='60%'
                        stroke='none'
                        fill='#fff'   
                        textAnchor='middle'                    
                        fontSize='24'
                        fontFamily='sans-serif'
                        //fontFamily='Brush Script MT, Brush Script, Segoe Script, cursive'

                    >
                        <tspan>
                           00:00:00
                        </tspan>
                    </text>
                </svg>
                // bounding box: footer
                <rect
                    display=''
                    x='16%'
                    y='83%'
                    width='70%'
                    height='16%'
                    stroke={stroke}
                    fill={fill}
                />
                <svg
                    x='16%'
                    y='83%'
                    width='70%'
                    height='16%'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='xMaxYMid meet'
                >  
                    <text
                        x='60%'
                        y='60%'
                        stroke='none'
                        fill='#fff'   
                        textAnchor='end'                    
                        fontSize='30'
                        fontFamily='sans-serif'
                        //fontFamily='Brush Script MT, Brush Script, Segoe Script, cursive'
                    >
                        <tspan>
                            hh:mm:ss
                        </tspan>
                    </text>                 
                </svg>
                <g display=''>
                    <rect
                        x='16%'
                        y='0'
                        rx={2}
                        width='70%'
                        height='98%'
                        stroke='white'
                        strokeWidth={2}
                        strokeOpacity='0.1'
                        fill='#ff0'
                        fillOpacity='0.1'
                    />
                     <rect
                        x='16%'
                        y='30%'
                        rx={2}
                        width='70%'
                        height='40%'
                        stroke='silver'
                        strokeWidth={1}
                        strokeOpacity='0.1'                       
                        fill='#f00'
                        fillOpacity='0.1'
                    />                    
                </g>
                <g display='none'>
                    <circle
                        cx='50%'
                        cy='50%'
                        r='65'
                        stroke='white'
                        strokeWidth={1}
                        strokeOpacity='1'
                        fill='#fff'
                        fillOpacity='0.1'
                    />
                    
                     <circle
                        cx='50%'
                        cy='50%'
                        r='50'
                        stroke='silver'
                        strokeWidth={1}
                        strokeOpacity='1'
                        fill='#f00'
                        fillOpacity='0.1'
                    />
                </g>
            </svg>
            
        )
    }
}

BarGraph.defaultProps = {
    
}

export default BarGraph;

// eof



