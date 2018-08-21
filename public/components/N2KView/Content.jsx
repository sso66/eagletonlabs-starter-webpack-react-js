// Content.jsx 
console.log( "Mounting Content.jsx... <Content />" );

import React from 'react';

const content =
    <div className='content'>
        <h2>Content</h2>
        <p>
            The golden rule of knowing what you are doing is to 
            understand why you are doing it.
        </p> 
        <p>
            Don't use a module until you understand 
            the problem it's solving
        </p>
    </div>
;

const Content = () => {

    return ( content );

};

export default Content;

