// AwesomeComponent.js
import React, { Component } from 'react';

class AwesomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { likesCount: 0 };
    this.onLike = this.onLike.bind(this);
  }
  
  onLike() {
   let newLikesCount = this.state.likesCount + 1;
   this.setState({ likesCount: newLikesCount });
  }
  
  render() {
    return (
      <div className="header">
       <h2>Awesome Component</h2>
        Likes: <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div> 
    );
  }
}

export default AwesomeComponent;
// eof
