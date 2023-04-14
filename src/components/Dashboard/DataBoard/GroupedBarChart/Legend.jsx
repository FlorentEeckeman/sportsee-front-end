import React from "react";

function Legend({ marginLeft, innerWidth }) {
  return (
    <g>
      <text
        x={marginLeft}
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
      <g transform={`translate(${innerWidth - 650})`}>
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
  );
}

export default Legend;
