// ReactElement.es6
console.log("Mounting ReactElement.es6... ");

import React from 'react';
import './css-animation.sass';

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Stephen',
    lastName: 'Oo'
}

const element = (
    <div>
        <span>
            Hello, {formatName(user)}!
        </span>

        <a className="animatedLink box" href="http://www.w3.org/SVG/">
            <svg>
                <circle 
                    cx="50" 
                    cy="50" 
                    r="20" 
                    style={{fill: 'red'}} />  
                <rect 
                    x="75" 
                    y="30" 
                    width="40" 
                    height="40" style={{fill: 'green'}} />
                <path 
                    d="M120 90, 140 50, 160 90 Z" 
                    style={{fill: 'blue'}} />
            </svg>
        </a>
    </div>
);

export { element };

// eof
