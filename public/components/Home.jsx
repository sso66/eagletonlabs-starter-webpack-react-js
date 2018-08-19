// Home.jsx 
console.log("Mounting Home.jsx... <Home />");

import React from 'react';

const homepage =
    <div className='home'>
        <h1>Eagleton Web Designs</h1>
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

const Home = () => {
    return (homepage);
}

export default Home;
// eof
