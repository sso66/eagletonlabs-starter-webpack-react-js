// Header.jsx
console.log("Mounting Header.jsx... <Header />");

import React from 'react'

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
          searchInputClasses.push("active");
        }
    
        return (
          <div className="header">
            <div className="menuIcon">
              <div className="dashTop"></div>
              <div className="dashBottom"></div>
              <div className="circle"></div>
            </div>
    
            <span className="title">
              {this.props.title}
            </span>
    
            <input
              type="text"
              className={searchInputClasses.join(' ')}
              placeholder="Search ..." />
    
            {/* Adding an onClick handler to call the handleSearch button */}
            <div
              onClick={this.handleSearch}
              className="fa fa-search searchIcon"></div>
          </div>
        )
    }
}

export default Header

// eof