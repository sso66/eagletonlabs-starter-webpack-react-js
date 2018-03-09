/* Game0.react.js */
// Getting Started 
// Re: DOM Chrome contigent objects: alert/confirm/prompt methods 
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Square extends React.Component {   
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        { /* TODO */}
        { this.props.value }
      </button>
    );
  };
}

class Board extends React.Component { 
  render() {
    return <Square value="Game" />;
  };
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
//ReactDOM.render(<Game />, document.getElementById("root"));
export default Game;
// eof