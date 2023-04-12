import React, { useState, useCallback, useEffect } from "react";
export const AxisBottom = ({ xScale, innerHeight, tickFormat }) => {
  let textOffset;

  const data = xScale.domain().map((tickValue, index) => (
    <>
      {index === 0
        ? (textOffset = "end")
        : index !== xScale.domain().length - 1
        ? (textOffset = "middle")
        : (textOffset = "start")}
      <g
        className="tick"
        key={tickValue}
        transform={`translate(${xScale(tickValue)},0)`}
      >
        <text
          key={tickValue + "text"}
          style={{ textAnchor: textOffset, fontSize: "14px" }}
          dy=".71em"
          y={innerHeight + 15}
          x={xScale.bandwidth() / 2}
        >
          {index}
        </text>
      </g>
    </>
  ));
  return data;
};
