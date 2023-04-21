import React from "react";
import styled from "styled-components";

function Legend({ marginLeft, innerWidth }) {
  return (
    <g>
      <Text x={marginLeft} y={30}>
        Activité quotidienne
      </Text>
      <g transform={`translate(${innerWidth - 650})`}>
        <circle cx="490" cy="25" r="4" fill="#282D30" />
        <Text x="500" y={30} fill="#74798C">
          Poids (kg)
        </Text>

        <circle cx="600" cy="25" r="4" fill="#E60000" />
        <Text x="610" y={30} fill="#74798C">
          Calories Brûlées (kCal)
        </Text>
      </g>
    </g>
  );
}
const Text = styled.text`
  text-anchor: "start";
  font-size: "14px";
  font-family: "roboto";
  font-weight: 500;
`;

export default Legend;
