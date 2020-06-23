import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

class Search extends Component {
  state = {
    result: null,
    search: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&per_page=15&query=computer&client_id=${process.env.REACT_APP_UNPLASH_API}`
      )
      .then((res) => {
        // console.log(res.data.results);
        this.setState({
          result: res.data.results
        })
      });   
    this.props.addNewResult(null);
    if(this.state.search){
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${this.state.search}&client_id=${process.env.REACT_APP_UNPLASH_API}`
        )
        .then((res) => {
          // console.log(res);
          if(res.data.total === 0){
            document.querySelector("#search").value = "";
            alert("Enter Valid name");
            this.props.addNewResult(this.state.result);
            
          } else {
            this.props.addNewResult(res.data.results)
          }
        });
    }
  };
  render() {
    return (
      <header>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input
              id="search"
              type="text"
              className="right"
              placeholder="Search photo"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="purple center z-depth-1 white-text search-btn"
            >
              Search
            </button>
          </form>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewResult: (result) => {
      dispatch({
        type: "ADD_SEARCH_RESULT",
        result: result,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);