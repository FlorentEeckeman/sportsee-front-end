import React from "react";
export const AxisLeft = ({ yScale, tickFormat, innerHeight, innerWidth }) =>
  yScale.ticks(3).map((tickValue) => (
    <g className="tick" key={tickValue + "g"}>
      <line
        x2={innerWidth}
        y1={innerHeight - yScale(tickValue)}
        y2={innerHeight - yScale(tickValue)}
        style={{ stroke: "#DEDEDE" }}
        key={tickValue + "line"}
      />
      <text
        key={tickValue}
        style={{ textAnchor: "end", fontSize: "14px" }}
        x={innerWidth + 60}
        y={innerHeight - yScale(tickValue)}
      >
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
