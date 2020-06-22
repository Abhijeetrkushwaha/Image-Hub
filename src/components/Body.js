import React, { Component } from 'react'
import GridSummary from './GridSummary'
// import axios from 'axios'

class Body extends Component {
//   componentDidMount() {
//     axios
//       .get(
//         `https://api.unsplash.com/search/photos?page=1&per_page=30&query=computer&client_id=${process.env.REACT_APP_UNPLASH_API}`
//       )
//       .then((res) => {
//         // this.setState({
//         //   post: res.data.results,
//         // });
//         // console.log(this.state.post);
//         // console.log(res.data.results);
//         console.log(res.data.results);
        
//       });
//   }
  render() {
    return (
      <div>
        <div className="row center container">
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
          <GridSummary />
        </div>
      </div>
    );
  }
}

export default Body