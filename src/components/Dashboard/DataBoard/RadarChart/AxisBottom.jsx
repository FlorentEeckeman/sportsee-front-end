import React from "react";
export const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
  xScale.domain().map((tickValue, index) => (
    <g
      className="tick"
      key={tickValue + "test"}
      transform={`translate(${xScale(tickValue) - 3},0)`}
    >
      <text
        key={tickValue + "text0"}
        style={{ textAnchor: "end", fontSize: "14px" }}
        dy=".71em"
        y={innerHeight + 15}
        x={xScale.bandwidth() / 2}
      >
        {index}
      </text>
    </g>
  ));
