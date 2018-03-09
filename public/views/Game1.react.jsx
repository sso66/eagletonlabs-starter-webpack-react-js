/* Game1.react.js */
// Getting Started 
// Re: DOM Chrome contigent objects: alert/confirm/prompt methods 
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Square extends React.Component {   
  constructor() {
    super();
    this.state = {
      value: null,
    };  
  };
  
  render() {
    return (
      <button className="square" onClick={()=> /* alert('click') */ this.setState({ value: 'X'})}>
        { /* this.props.value */ this.state.value }
      </button>
    );
  };
}

class Board extends React.Component {  
  renderSquare(i) {
    return <Square value={i}/>;
  };

  render() {
    const status = "Next player: X";
    
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
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

ReactDOM.render(<Game />, document.getElementById("root"));
// eof