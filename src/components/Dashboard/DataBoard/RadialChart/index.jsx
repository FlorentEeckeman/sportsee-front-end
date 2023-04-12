import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { csv, arc, scaleBand, scaleLinear, max, format } from "d3";
import Legend from "./Legend";

const width = 258;
const height = 263;

export const RadialChart = () => {
  const dailyScore = 0.3;
  const center = { x: 129, y: 131 };
  const score = dailyScore * 100;

  const yScale = scaleLinear()
    .domain([0, 1])
    .range([0, 2 * Math.PI]);

  const arcTest = arc()
    .innerRadius(87)
    .outerRadius(97)
    .startAngle(0)
    .endAngle(-yScale(dailyScore))
    .cornerRadius(6);

  return (
    <div className="svgVignette">
      <svg width={width} height={height} style={{ backgroundColor: "#FBFBFB" }}>
        <text
          x={30}
          y={24}
          fill="#000000"
          style={{
            textAnchor: "start",
            fontSize: "15px",
            fontFamily: "roboto",
            fontWeight: 500,
          }}
        >
          Score
        </text>
        <g transform={`translate(${center.x},${center.y})`}>
          <circle r={87} fill="#FFFFFF" stroke="none" />
          <Legend score={score} />
          <path
            d={arcTest()}
            x={center.x}
            y={center.y}
            stroke="#FF0000"
            fill="#FF0000"
          />
        </g>
      </svg>
    </div>
  );
};
