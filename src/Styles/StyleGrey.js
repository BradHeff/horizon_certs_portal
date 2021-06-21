import React from "react";

const StyleGrey = props => {
  return (
    <div
      className={`shape shape-bottom shape-fluid-x svg-shim ${
        props.trans ? "" : "white-bg"
      } ${props.className}`}
    >
      <svg
        viewBox="0 0 2880 48"
        fill="#f9f9ff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
          fill="#f9f9ff"
        ></path>
      </svg>
    </div>
  );
};

export default StyleGrey;
