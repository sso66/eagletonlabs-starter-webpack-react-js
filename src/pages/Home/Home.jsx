// File: src/views/Home/HomeView.jsx
// Date: 9/18/2020
// Note: Observer Design Pattern and Participants
// ................................................................................
console.info("Mounting src/views/Home/Home.jsx... <Home />");

// "customer": CLIENT - parent
//........................................
import React from "react";
// import Header from '../../components/Site/Header/Header'
// import { Timestamp } from '../../components/Features/Timestamp';
// import { ActionLink, LoginControl, Toggle } from '../../components/Features/Concepts'
// import { MobileFirst } from '../../components/Features/Matrix'
// import SourceOrder from '../../components/Features/Flexbox/SourceOrder';

import "./home.sass";

const Home = (props) => {
  return (
    <div className="home">
      {/* <Header /> */}
      <h2>Eagleton Labs</h2>
      <h3 style={{ textAlign: "center" }}>Home</h3>
      <p>TO DO: cleanup / backtrack / rollup</p>
      <hr />
      <h4>React Render Flow & React State Management</h4>
      <p style={{ fontSize: '1.5rem', color: 'orange' }}>
          Alice & the Gang | Mel's Diner Story
        </p>
      <ol style={{ border: '1px solid yellow' }}>
        <li>customer</li>
        <li>waitress</li>
        <li>short-order-cook</li>
        <li>order-store</li>
        <li>store-helper</li>
      </ol>
      {/* <h3><b>Timestamp Component</b></h3> */}
      {/* <Timestamp 
                currentTime={props.currentTime.toString()}
                currentLocalTime={ props.currentTime.toLocaleString()}
                updateTime={props.updateTime}
            /> */}
      {/* </div> */}
      {/* <ActionLink /> */}
      {/* <LoginControl /> */}
      {/* <Toggle /> */}
      {/* <SourceOrder /> */}
      {/* <MobileFirst /> */}
    </div>
  );
};

export default Home;

// eof
