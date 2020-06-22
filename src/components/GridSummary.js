import React from "react";
import Image from "../cat.jpg";

const GridSummary = () => {
  return (
    <div className="col s12 m6 l4 center grid-content">
      <img src={Image} alt="" className="center" />
      <div className="download-link">
        <p className="download-content">Download:</p>
        <div className="download">
          <button className="download-btn waves-effect z-depth-2 purple-text white lighten-2">
            Small
          </button>
          <button className="download-btn waves-effect z-depth-2 purple-text white lighten-2">
            Medium
          </button>
          <button className="download-btn waves-effect z-depth-2 purple-text white lighten-2">
            Large
          </button>
        </div>
      </div>
      <button className="btn white waves-effect lighten-2 purple-text">
        View Full Size
      </button>
    </div>
  );
};

export default GridSummary;
