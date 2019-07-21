// LikeMe.jsx
console.log("Mounting LikeMe.jsx... <LikeMe />");

import React, { Component } from 'react';

class LikeMe extends Component {
    constructor( props ) {
        super( props );
        
        this.state = { 
            likeMeCount: 0, 
            comment: 'Hello' 
        };
        
        this.handleLikeMe = this.handleLikeMe.bind(this);
    }
  
    handleLikeMe() {
       let newLikeMeCount = this.state.likeMeCount + 1;
       this.setState( { likeMeCount: newLikeMeCount } );
    }
      
    render() {
        return (
            <div className="likeme">
                <h2 className="subtitle is-5">Stateful Component</h2>
                    Likes Me: 
                <span>&nbsp;{ this.state.likeMeCount }</span>
            	<div>
            		<button onClick={ this.handleLikeMe }>
                        Likes Me
            		</button>
            	</div>
            </div> 
        );
    }
}

export default LikeMe;

// eof
