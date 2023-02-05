// File: src/components/Root/Root.jsx
// Date: 9/14/2019
// Note: Mobile First RWD-SPA
//..............................................................................
console.log("Mounting src/components/Root/Root.jsx... <Root />");

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { App } from "../App";

function Root({ store }) {
  return (
    <div className="root">
      <Router>
        <Route path="/" component={App} />
      </Router>
    </div>
  );
}


export default Root;

// eof
