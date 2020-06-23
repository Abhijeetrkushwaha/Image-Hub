import React from "react";
// import Image from "../cat.jpg";

const GridSummary = ({ result, download }) => {
  return (
    <div className="col s12 m6 l4 center grid-content">
      <img src={result.urls.small} alt="" className="center" />
      <div className="download-link">
        <p className="download-content">Download:</p>
        <div className="download">
          <button
            onClick={() => {
              download(result.urls.small, result.id);
            }}
            className="download-btn waves-effect z-depth-2 purple-text white lighten-2"
          >
            Small
          </button>
          <button
            onClick={() => {
              download(result.urls.regular, result.id);
            }}
            className="download-btn waves-effect z-depth-2 purple-text white lighten-2"
          >
            Medium
          </button>
          <button
            onClick={() => {
              download(result.urls.full, result.id);
            }}
            className="download-btn waves-effect z-depth-2 purple-text white lighten-2"
          >
            Large
          </button>
        </div>
      </div>
      <a
        href={result.urls.full}
        className="btn white waves-effect lighten-2 purple-text"
      >
        View Full Size
      </a>
    </div>
  );
};

export default GridSummary;
