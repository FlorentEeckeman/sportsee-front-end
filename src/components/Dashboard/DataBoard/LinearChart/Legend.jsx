import React from "react";

function Legend({ marginLeft }) {
  return (
    <g
      transform={`translate(${marginLeft})`}
      layout-css="flex: 1; flexDirection: row;"
      style={{ flexDirection: "row" }}
    >
      <text
        x="0"
        y={30}
        fill="#ffffffa7"
        style={{
          textAnchor: "start",
          fontSize: "15px",
          fontFamily: "roboto",
          fontWeight: 500,
        }}
      >
        Durée moyenne des
      </text>
      <text
        x="0"
        y={50}
        fill="#ffffffa7"
        style={{
          textAnchor: "start",
          fontSize: "15px",
          fontFamily: "roboto",
          fontWeight: 500,
        }}
      >
        session
      </text>
    </g>
  );
}

export default Legend;
