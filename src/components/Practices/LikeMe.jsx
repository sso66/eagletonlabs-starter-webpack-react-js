// LikeMe.jsx
console.log("Mounting LikeMe.jsx... <LikeMe />");

import React, { Component } from 'react';

class LikeMe extends Component {
    constructor(props) {
        super(props);
        this.state = { LikeMeCount: 0, comment: 'Hello' };
        this.handleLikeMe = this.handleLikeMe.bind(this);
    }
  
    handleLikeMe() {
       let newLikeMeCount = this.state.LikeMeCount + 1;
       this.setState({ LikeMeCount: newLikeMeCount });
    }
      
    render() {
        return (
            <div className="LikeMe-me">
                <h2 className="subtitle is-5">Stateful Component</h2>
                    Likes Me: 
                <span>&nbsp;{this.state.LikeMeCount}</span>
            	<div>
            		<button onClick={this.handleLikeMe}>
                        Likes Me
            		</button>
            	</div>
            </div> 
        );
    }
}

export default LikeMe;

// eof
