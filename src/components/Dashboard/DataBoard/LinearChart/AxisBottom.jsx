import React, { useState, useCallback, useEffect } from "react";
export const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
  xScale.domain().map((tickValue, index) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <text
        key={tickValue + "text"}
        stroke="#ffffff84"
        style={{
          textAnchor: "end",
          fontSize: "12px",
          fontFamily: "Roboto",
          fontWeight: 500,
          mixBlendMode: "normal",
        }}
        dy=".71em"
        y={innerHeight + 15}
        x={xScale.bandwidth() / 2}
      >
        {tickValue}
      </text>
    </g>
  ));
