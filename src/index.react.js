// index.react.js
console.log('mount index.react.js');

import React from 'react';
import {render} from 'react-dom';
import Greeter from './components/Greeter.react';

import './css/index.css';

render(
  <Greeter />, 
  document.getElementById('root')
);
