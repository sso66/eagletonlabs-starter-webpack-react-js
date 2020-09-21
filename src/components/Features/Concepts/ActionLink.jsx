// ActionLink.jsx
console.log("Mounting ActionLink.jsx <ActionLink />");

import React from "react";

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        //console.log('The link was clicked.');
        //alert('The link was clicked.');
        //confirm('The link was clicked.');
        let link = prompt('The link was clicked.');
    
        if (link !== null) {
            alert(link)
        }   
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

export default ActionLink;

// eof
