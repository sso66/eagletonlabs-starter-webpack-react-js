// NumberList.jsx
console.log("Mounting NumberList.jsx ... <NumberList />");

import React from "react";

// Correct Key Usage
function ListItem(props) {
    // Correct! There no need to specy the key here:
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers;
    
    // A good rule of thumb is that elements inside the map() call need keys.
    const listItems = numbers.map((number)=>     
        //<li key={number.toString()}>{number}</li> 
        // Correct! Key should be specifed in the array.
        <ListItem 
            key={number.toString()}  
            value={number}
        />
    );  
    return (
       <ul>{listItems}</ul>
    );
}

export default NumberList;

// eof
