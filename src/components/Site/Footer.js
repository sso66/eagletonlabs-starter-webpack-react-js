import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
      	{this.props.children}
      	
  		<h3 className="title is-3">The End</h3>
        <p>
            The golden rule of knowing what you are doing is to 
            understand why you are doing it.
        </p> 
        <p className="animated infinite bounce delay-1s">
            Don't use a module until you understand 
            the problem it's solving.
        </p>	
      </div>
    )
  }
}

export default Footer