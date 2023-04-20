import React from "react";
/**
 * React component of bottom axis
 *@param {object} xScale
 *@param {number} innerHeight
 *@return {ReactElement[]}
 */
export const AxisBottom = ({ xScale, innerHeight }) => {
  let textOffset;
  // create an axis element for all band of xScale
  const data = xScale.domain().map((tickValue, index) => (
    <React.Fragment key={index}>
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
    </React.Fragment>
  ));

  return data;
};
