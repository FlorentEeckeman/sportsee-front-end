import React from "react";
import styled from "styled-components";

export const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
  xScale.domain().map((tickValue, index) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <Text
        key={tickValue + "text"}
        stroke="#ffffff84"
        dy=".71em"
        y={innerHeight + 15}
        x={xScale.bandwidth() / 2}
      >
        {tickValue}
      </Text>
    </g>
  ));
const Text = styled.text`
  text-anchor: "end";
  font-size: "12px";
  font-family: "Roboto";
  font-weight: 500;
  mix-blend-mode: "normal";
`;
