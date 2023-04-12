import React from "react";

function Legend({ score }) {
  return (
    <g>
      <text
        x={0}
        y={-15}
        fill="#282D30"
        style={{
          textAnchor: "middle",
          fontSize: "26px",
          fontFamily: "roboto",
          fontWeight: 700,
        }}
      >
        {score} %
      </text>
      <text
        x={0}
        y={15}
        fill="#74798C"
        style={{
          textAnchor: "middle",
          fontSize: "16px",
          fontFamily: "roboto",
          fontWeight: 500,
        }}
      >
        de votre
      </text>
      <text
        x={0}
        y={40}
        fill="#74798C"
        style={{
          textAnchor: "middle",
          fontSize: "16px",
          fontFamily: "roboto",
          fontWeight: 500,
        }}
      >
        objective
      </text>
    </g>
  );
}

export default Legend;
