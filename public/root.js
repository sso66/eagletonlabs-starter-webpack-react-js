// root.js
console.info('Mounting root.js... <Root />');

import React from "react";
import { render } from "react-dom";
import App from './containers/App';

const Root = render(
    <App />, 
    document.getElementById('root')
);

export default Root
// eof