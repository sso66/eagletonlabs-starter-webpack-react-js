/* Game0.react.js */
// Getting Started 

import React from 'react';

class Square extends React.Component {   
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {/* TODO */}
        { this.props.value }
      </button>
    );
  };
}

class Board extends React.Component { 
  render() {
    return <Square value={"0"} />;
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

export default Game;
// eof