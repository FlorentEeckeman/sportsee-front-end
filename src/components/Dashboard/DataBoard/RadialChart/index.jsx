import React from "react";
import { useResizeDetector } from "react-resize-detector";
import { arc, scaleLinear } from "d3";
import Legend from "./Legend";

const height = 263;
const x = 87;
const y = 97;

export const RadialChart = ({ userInfo }) => {
  const { width, ref } = useResizeDetector();
  const dailyScore = userInfo.todayScore;
  const center = { x: width / 2, y: 131 };
  const score = dailyScore * 100;

  const yScale = scaleLinear()
    .domain([0, 1])
    .range([0, 2 * Math.PI]);
  let arcTest;
  let r;
  if (width < 200) {
    arcTest = arc()
      .innerRadius(width / 2 - 10)
      .outerRadius(width / 2)
      .startAngle(0)
      .endAngle(-yScale(dailyScore))
      .cornerRadius(6);
    r = width / 2 - 10;
  } else {
    arcTest = arc()
      .innerRadius(y)
      .outerRadius(x)
      .startAngle(0)
      .endAngle(-yScale(dailyScore))
      .cornerRadius(6);
    r = 87;
  }

  return (
    <div ref={ref} className="svgVignette">
      {width && (
        <svg
          width={width}
          height={height}
          style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }}
        >
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
            <circle r={r} fill="#FFFFFF" stroke="none" />
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
      )}
    </div>
  );
};
