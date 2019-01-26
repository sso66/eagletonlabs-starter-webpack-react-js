import React from 'react'

const SVGFilter = props => (
  <svg width={250} height={250} viewBox="0 0 200 185" {...props}>
    <defs>
      <filter
        id="a"
        filterUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={200}
        height={120}
      >
        <feGaussianBlur in="SourceAlpha" stdDeviation={4} result="blur" />
        <feOffset in="blur" dx={4} dy={4} result="offsetBlur" />
        <feSpecularLighting
          in="blur"
          surfaceScale={5}
          specularExponent={10}
          lightingColor="#d90000"
          result="specOut"
        >
          <fePointLight x={-5000} y={-10000} z={20000} />
        </feSpecularLighting>
        <feComposite
          in="specOut"
          in2="SourceAlpha"
          operator="in"
          result="specOut"
        />
        <feComposite
          in="SourceGrapic"
          in2="specOut"
          operator="arithmetic"
          k2={1}
          k3={1}
          result="litPaint"
        />
        <feMerge>
          <feMergeNode in="offsetBlur" />
          <feMergeNode in="litPaint" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        fill="none"
        stroke="#D90000"
        strokeWidth={10}
        d="M50 66C0 66 0 6 50 6h100c50 0 50 60 0 60z"
      />
      <path fill="#D90000" d="M60 56c-30 0-30-40 0-40h80c30 0 30 40 0 40z" />
    </g>
    <text
      x={56}
      y={48}
      fill="#fff"
      stroke="#000"
      fontSize={40}
      fontFamily="sans-serif"
    >
      {'\n    SVG\n  '}
    </text>
  </svg>
)

export default SVGFilter;
