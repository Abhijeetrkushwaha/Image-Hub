import React, { Component } from 'react';

class Search extends Component{
    render(){
        return (
          <header>
            <div className="container">
              <form>
                <input
                  type="text"
                  className="right"
                  placeholder="Search photo"
                />
                <button className="waves-effect purple center white z-depth-1 purple-text search-btn">
                  Search
                </button>
              </form>
            </div>
          </header>
        );
    }
}

export default Search;