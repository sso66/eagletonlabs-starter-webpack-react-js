// AbstractGauge.jsx
console.log("AbstractGauge.jsx ... <AbstractGauge />");

import React from 'react';
import './abstract-gauge.sass';

const renderProgress = (opts) => {
    return (
        <circle
            cx={18}
            cy={18}
            r={15.9155}
            fill='none'
            strokeWidth={opts.progressWidth}
            stroke={opts.progressColor}
            strokeDasharray='60 40'
            strokeDashoffset="25"
            strokeLinecap={opts.progressRoundEdge ? 'round' : 'butt'}
            className={opts.className}
        />
    );    
}

class AbstractGauge extends React.Component {
  render() {
      let opts = Object.assign({}, this.props);
      
      // let {
          // dialWidth,
      // } = opts;
      
      return (
          <div>Hello, AbstractGauge
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width="100%"
                height="100%"
                viewBox={`0 0 36 36`}
            >
                <defs></defs>
                <g>
                    {renderProgress(opts)}
                </g>
            </svg>
          </div>
      )
  }
}

AbstractGauge.defaultProps = {    
    className: 'circle',
    
    progressWidth: 2.8,
    progressColor: '#4cc790',
    progressRoundEdge: true,
};

export default AbstractGauge;

// eof
