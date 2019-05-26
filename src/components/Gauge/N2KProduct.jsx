// N2KProduct.jsx 
console.log("Mounting N2KProduct.jsx ... <N2KProduct />");

import React from 'react';

class N2KProduct extends React.Component {
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
                 viewBox='0 0 400 400'
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
                    width='98%'
                    height='15%'
                    stroke={stroke}
                    fill={fill}
                />
                <svg
                    x='1%'
                    y='1%'
                    width='98%'
                    height='15%'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='xMidYMid meet'
                >   
                    <text
                        x='50%'
                        y='65%'
                        stroke='none'
                        fill='#fff'   
                        textAnchor='middle'                    
                        fontSize='42'
                        fontFamily='sans-serif'
                        //fontFamily='Brush Script MT, Brush Script, Segoe Script, cursive'
                    >
                        <tspan>
                            Tachometer
                        </tspan>
                    </text>
                </svg>
                 // bounding box: main
                <rect
                    display=''
                    x='1%'
                    y='15%'
                    width='98%'
                    height='70%'
                    stroke={stroke}
                    fill={fill}
                />
                <svg
                    x='1%'
                    y='15%'
                    width='98%'
                    height='70%'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='xMidYMid meet'
                >   
                    <text
                        x='50%'
                        y='60%'
                        stroke='none'
                        fill='#fff'   
                        textAnchor='middle'                    
                        fontSize='32'
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
                    x='1%'
                    y='85%'
                    width='98%'
                    height='13%'
                    stroke={stroke}
                    fill={fill}
                />
                <svg
                    x='1%'
                    y='85%'
                    width='98%'
                    height='13%'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='xMaxYMid meet'
                >  
                    <text
                        x='50%'
                        y='50%'
                        stroke='none'
                        fill='#fff'   
                        textAnchor='end'                    
                        fontSize='40'
                        fontFamily='sans-serif'
                        //fontFamily='Brush Script MT, Brush Script, Segoe Script, cursive'
                    >
                        <tspan>
                            hh:mm:ss
                        </tspan>
                    </text>                 
                </svg>
                <g display='none'>
                    <rect
                        x='3%'
                        y='16%'
                        rx={3}
                        width='94%'
                        height='68%'
                        stroke='white'
                        strokeWidth={2}
                        strokeOpacity='0.5'
                        fill='#ff0'
                        fillOpacity='0.1'
                    />
                     <rect
                        x='5%'
                        y='30%'
                        rx={2}
                        width='90%'
                        height='40%'
                        stroke='silver'
                        strokeWidth={1}
                        strokeOpacity='0.5'                       
                        fill='#f00'
                        fillOpacity='0.5'
                    />                    
                </g>
                <g display=''>
                    <circle
                        cx='50%'
                        cy='50%'
                        r='150'
                        stroke='white'
                        strokeWidth={3}
                        strokeOpacity='1'
                        fill='#fff'
                        fillOpacity='0.5'
                    />
                    
                     <circle
                        cx='50%'
                        cy='50%'
                        r='130'
                        stroke='silver'
                        strokeWidth={3}
                        strokeOpacity='1'
                        fill='#f00'
                        fillOpacity='0.5'
                    />
                </g>
            </svg>           
        )
    }
}

N2KProduct.defaultProps = {
    
}

export default N2KProduct;

// eof



