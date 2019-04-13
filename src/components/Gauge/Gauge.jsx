import React from 'react'

const SvgComponent = props => (
  <svg
    className="gauge"
    height={200}
    width={200}
    viewBox="0 0 200 200"
    {...props}
  >
    <defs>
      <line
        id="tick"
        x1={185}
        y1={100}
        x2={180}
        y2={100}
        stroke="#FF8598"
        strokeWidth={2}
      />
    </defs>
    <g transform="rotate(-90 100 100)">
      <circle
        cx={100}
        cy={100}
        r={90}
        fill="none"
        stroke="#FFC0A9"
        strokeWidth={10}
      />
      <g className="ticks">
        <use href="#tick" transform="rotate(0 100 100)" />
        <use href="#tick" transform="rotate(10 100 100)" />
        <use href="#tick" transform="rotate(20 100 100)" />
        <use href="#tick" transform="rotate(30 100 100)" />
        <use href="#tick" transform="rotate(40 100 100)" />
        <use href="#tick" transform="rotate(50 100 100)" />
        <use href="#tick" transform="rotate(60 100 100)" />
        <use href="#tick" transform="rotate(70 100 100)" />
        <use href="#tick" transform="rotate(80 100 100)" />
        <use href="#tick" transform="rotate(90 100 100)" />
        <use href="#tick" transform="rotate(100 100 100)" />
        <use href="#tick" transform="rotate(110 100 100)" />
        <use href="#tick" transform="rotate(120 100 100)" />
        <use href="#tick" transform="rotate(130 100 100)" />
        <use href="#tick" transform="rotate(140 100 100)" />
        <use href="#tick" transform="rotate(150 100 100)" />
        <use href="#tick" transform="rotate(160 100 100)" />
        <use href="#tick" transform="rotate(170 100 100)" />
        <use href="#tick" transform="rotate(180 100 100)" />
        <use href="#tick" transform="rotate(190 100 100)" />
        <use href="#tick" transform="rotate(200 100 100)" />
        <use href="#tick" transform="rotate(210 100 100)" />
        <use href="#tick" transform="rotate(220 100 100)" />
        <use href="#tick" transform="rotate(230 100 100)" />
        <use href="#tick" transform="rotate(240 100 100)" />
        <use href="#tick" transform="rotate(250 100 100)" />
        <use href="#tick" transform="rotate(260 100 100)" />
        <use href="#tick" transform="rotate(270 100 100)" />
        <use href="#tick" transform="rotate(280 100 100)" />
        <use href="#tick" transform="rotate(290 100 100)" />
        <use href="#tick" transform="rotate(300 100 100)" />
        <use href="#tick" transform="rotate(310 100 100)" />
        <use href="#tick" transform="rotate(320 100 100)" />
        <use href="#tick" transform="rotate(330 100 100)" />
        <use href="#tick" transform="rotate(340 100 100)" />
        <use href="#tick" transform="rotate(350 100 100)" />
        <use href="#tick" transform="rotate(360 100 100)" />
      </g>
      <circle
        cx={100}
        cy={100}
        r={90}
        fill="none"
        stroke="#FF8598"
        strokeWidth={5}
        strokeDasharray="565.49"
        strokeDashoffset={424.12}
        strokeLinecap="round"
      />
      <g className="needle">

        <g transform="rotate(90 100 100)" className="animated rotateIn slower">
          <line
            x1={100}
            y1={100}
            x2={180}
            y2={100}
            fill="none"
            strokeWidth={2}
            stroke="#C9D787"
          />
        </g>
        <circle cx={100} cy={100} r={5} fill="#7D8A2E"/>
      </g>
      <text
        x={100}
        y={155}
        fontFamily="Sans-serif"
        fontSize={30}
        transform="rotate(90 100 100)"
        textAnchor="middle"
        fill="#FF8598"
      >
        {'\n      25\n    '}
      </text>
    </g>
  </svg>
)

export default SvgComponent
