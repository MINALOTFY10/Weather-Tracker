import React from "react";
import "./UVIndex.css"; // Your CSS file for styling

const UVIndex = ({ uvIndex }) => {
  let uvIndexLevel;
  let uvIndexFontClass;
  let uvIndexClass;

  if (uvIndex <= 2) {
    uvIndexLevel = "Low";
    uvIndexClass = "uv-low";
    uvIndexFontClass = "low";
  } else if (uvIndex <= 5) {
    uvIndexLevel = "Moderate";
    uvIndexClass = "uv-moderate";
    uvIndexFontClass = "moderate";
  } else if (uvIndex <= 7) {
    uvIndexLevel = "High";
    uvIndexClass = "uv-high";
    uvIndexFontClass = "high";
  } else if (uvIndex <= 10) {
    uvIndexLevel = "Very High";
    uvIndexClass = "uv-very-high";
    uvIndexFontClass = "very-high";
  } else {
    uvIndexLevel = "Extreme";
    uvIndexClass = "uv-extreme";
    uvIndexFontClass = "extreme";
  }

  return (
    <>
      <div className={`uv-index-container mt-3 ${uvIndexClass}`}>
        <div className="uv-index-content">
          <div className="uv-index-value">{uvIndex}</div>
        </div>
      </div>
      <div className={`uv-index-level ${uvIndexFontClass}`}>UV Level: {uvIndexLevel}</div>
    </>
  );
};

export default UVIndex;
