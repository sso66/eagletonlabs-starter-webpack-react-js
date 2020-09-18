// File: src/components/Site/Header/Header.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.info( 'Mounting Header.jsx... <Header />' );

import React from 'react';
import MenuButton from '../Menu/MenuButton'

class Header extends React.Component {
	constructor(props) {
    	super(props);

    	this.state = {
     	 	searchVisible: false
    	}
		this.handleSearch= this.handleSearch.bind(this);
  	}

  	// toggle visibility when run on the state
  	handleSearch() {
    	this.setState({
      		searchVisible: !this.state.searchVisible
    	})
  	}

  	render() {
    	// Classes to add to the <input /> element
    	let searchInputClasses = ["searchInput"];

    	// Update the class array if the state is visible
    	if (this.state.searchVisible) {
      		searchInputClasses.push("active animated rotateIn");
   		}

        return (
    	    <div className="app">
                <div className="pane">
      		        <div className="header">
                        <MenuButton />
                        <span className="title">
          			       {this.props.title}
                        </span>
                        {/* <SearchForm /> */}
                	   <input
                  		    type="text"
                  		    className={searchInputClasses.join(' ')}
                  		    placeholder="Search ..." 
                        />
        
                	   {/* Add an onClick handler to call the handle icon button */}
                	   <div
                  		    onClick={this.handleSearch}
                  		    className="fa fa-search searchIcon">
                        </div>
          		    </div>
          		</div>
      		</div>
    	)
  	}
}

export default Header

// eof
