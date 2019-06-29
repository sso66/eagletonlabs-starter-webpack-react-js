// ListItem.jsx
console.log("Mounting ListItem.jsx ... <ListItem />");

import React from 'react';
import './wireframe.sass';

// Pure Function Component: The simple one
const ListItem = (props) => {
    let handleClick = (event) => {
       //props.onClick(event);
       confirm('HelloWorld!')
    }
    
    return (
        <div className="list box">
            <a 
                href="#"
                onClick={handleClick}>
                {props.children}
            </a>
        </div>
    );
}

export default ListItem;

// eof

