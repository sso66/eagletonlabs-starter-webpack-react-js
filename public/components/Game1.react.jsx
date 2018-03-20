/* Game1.react.js */
// Passing Data Through Props and State

import React from 'react';

class Square extends React.Component {   
  constructor() {
    super();
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button className="square" onClick={()=> this.setState({ value: 'X'})}>
        {/* TODO */}
        1
        { this.state.value }
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

export default Game;
// eof