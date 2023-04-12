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
        style={{
          textAnchor: "start",
          fontSize: "15px",
          fontFamily: "roboto",
          fontWeight: 500,
        }}
      >
        Activité quotidienne
      </text>
      <g x="550" y={30}>
        <g>
          <circle cx="490" cy="25" r="4" fill="#282D30" />
          <text
            x="500"
            y={30}
            style={{
              textAnchor: "start",
              fontSize: "14px",
              fontFamily: "roboto",
              fontWeight: 500,
              fill: "#74798C",
            }}
          >
            Poids (kg)
          </text>
        </g>
        <g>
          <circle cx="600" cy="25" r="4" fill="#E60000" />
          <text
            x="610"
            y={30}
            style={{
              textAnchor: "start",
              fontSize: "14px",
              fontFamily: "roboto",
              fontWeight: 500,
              fill: "#74798C",
            }}
          >
            Calories Brûlées (kCal)
          </text>
        </g>
      </g>
    </g>
  );
}

export default Legend;
