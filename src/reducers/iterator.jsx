// Iterator.js
import React from 'react';

const arr = [1, 10, 100, 1000];

const Iterator = (props) => {
  return (
    <ol>
      {/* arr.map(i => { return <li key={i}>{i} = {i * i}</li> })*/}
      {React.Children.map(arr, i => <li>{i}</li>)}
    </ol>
  )
}
export default Iterator;
// eof 