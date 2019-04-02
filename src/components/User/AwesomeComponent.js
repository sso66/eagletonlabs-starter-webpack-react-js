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
		Likes: 
		<span>&nbsp;{this.state.likesCount}</span>
        <div>
        	<button onClick={this.onLike}>
        		Like Me
        		{/* 
	        	<svg>     		
					<text 
	        		  	x="35" 
	        		  	y="28" 
						fontSize="1.2em"
						fontWeight="800"        		  	
	        		  	fill="black">
	        		  	Like Me
					</text>
	        	</svg>
	        	*/}
        	</button>
        </div>
      </div> 
    );
  }
}

export default AwesomeComponent;
// eof
