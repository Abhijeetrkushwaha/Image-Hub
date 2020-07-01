import React, { Component } from 'react'
import GridSummary from './GridSummary'
import axios from 'axios'
import { connect } from 'react-redux'
import { addResult } from '../actions/postActions'

class Body extends Component {
  componentDidMount() {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&per_page=15&query=computer&client_id=${process.env.REACT_APP_UNPLASH_API}`
      )
      .then((res) => {
        // console.log(res.data.results);
        this.props.addResult(res.data.results);       
        
      });
  }
  download = (url, id) => {
    // console.log(url);
    axios({
      url: url, //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", id + ".jpg"); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  }
  render() {
    // console.log(this.props.result);

    let data = this.props.result ? (
      this.props.result.map(result => {
        return <GridSummary result={result} download={this.download} key={result.id} />
      })
    ) : (
      <div className="content">
        <h4>Loading....<br/>Images</h4>
      </div>
    );
    
    return (
      <div>
        <div className="row center container body-container">{data}</div>
        {/* <div className="container center">
          <button onClick={this.addResult} className="btn-floating add-button purple lighten-2 z-depth-1 pulse center">
            <span role="img" aria-label="love">
              ➕
            </span>
          </button>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addResult: (result) => {
      dispatch(addResult(result))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)