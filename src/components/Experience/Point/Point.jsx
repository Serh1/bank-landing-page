import React from "react";
import "./Point.css";

const Point = () => {
  return (
    <div id="point">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
      >
        <circle cx="15.0029" cy="15" r="14.5" fill="white" stroke="#5D55FF" />
        <circle cx="15.0029" cy="15" r="10" fill="#5D55FF" />
      </svg>
    </div>
  );
};

export default Point;
