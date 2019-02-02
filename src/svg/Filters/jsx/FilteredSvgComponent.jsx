import React from 'react'

const FilteredSvgComponent = props => (
  <svg
    width={400}
    height={400}
  >
    <g className="layer">
      <filter id="blurMe">
        <feGaussianBlur stdDeviation={10} />
      </filter>
      <circle
        cx={50}
        cy={150}
        fill="#007f00"
        id="svg_1"
        r={50}
        stroke="#000000"
        strokeWidth={5}
      />
      <circle
        cx={250}
        cy={150}
        fill="#007f00"
        filter="url(#blurMe)"
        id="svg_2"
        r={50}
        stroke="#000000"
        strokeWidth={5}
      />
    </g>
  </svg>
)

export default FilteredSvgComponent
