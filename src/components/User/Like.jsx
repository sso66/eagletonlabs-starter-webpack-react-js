// Like.jsx
console.log("Mounting Like.jsx... <Like />");

import React, { Component } from 'react';

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = { likesCount: 0 };
        this.handleLike = this.handleLike.bind(this);
    }
  
    handleLike() {
       let newLikesCount = this.state.likesCount + 1;
       this.setState({ likesCount: newLikesCount });
    }
      
    render() {
        return (
            <div className="header">
                <h2>Stateful Component</h2>
                    Likes: 
                <span>&nbsp;{this.state.likesCount}</span>
            	<div>
            		<button onClick={this.handleLike}>
                        Like Me
            		</button>
            	</div>
            </div> 
        );
    }
}

export default Like;

// eof
