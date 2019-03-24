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
        <div>
        	<button>
        	<svg>     		
        		<circle 
        			cx="25" 
        			cy="25" 
        			r="25" 
        			stroke="red" 
        			strokeWidth="2"
        			//fill="rgba(124,204,204,0.5"
        			onClick={this.onLike}
        			//onMouseOver={this.onLike}
        			//onMouseOut={this.onLike}
        			cursor="pointer"
        		/>
        		
        		  <text 
        		  	x="10" 
        		  	y="28" 
					fontSize="1.8em"
					fontWeight="800"        		  	
        		  	fill="black">
        		  	Like Me
        		  </text>
        	</svg>
        	</button>
        </div>
      </div> 
    );
  }
}

export default AwesomeComponent;
// eof
