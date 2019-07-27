// src/views/EagletonEnd/Home.jsx
console.info( 'Mounting Home.jsx... <Home />' );

import React from "react";

export const Home = (props) => (
    <div className="home">
        <h1>Welcome Home</h1>
    </div>
);

const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => ({
})

//export default connect(
    //mapStateToProps,  
    //mapDispatchToProps  
//)(Home);

export default Home;

// eof

    