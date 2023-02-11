// File: src/index.jsx
// Date: 9/14/2019
// Note: Mobile First RWD-SPA
//..............................................................................
console.info("Mounting src/index.jsx ... ");

import React from "react";
import { render } from "react-dom";
import Root from "./components/Root/Root";
import "./index.sass";

const init = () => {
  render(<Root />, document.getElementById("root"));
};

try {
  window.onload = init;
} catch (e) {
  alert("Eagleton Labs Logistics" + e.message);
  e.preventDefault();
} finally {
  console.log("Application mounted successfully!");
}

// eof
