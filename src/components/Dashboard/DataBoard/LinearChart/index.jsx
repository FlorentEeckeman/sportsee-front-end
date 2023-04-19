import React, { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import {
  extent,
  line,
  scaleTime,
  curveCatmullRom,
  scaleBand,
  scaleLinear,
  max,
} from "d3";
import { setCoord } from "./setCoord";
import { AxisBottom } from "./AxisBottom";
import { Marks } from "./Marks";
import Legend from "./Legend";
import { svgPathProperties } from "svg-path-properties";

const height = 263;
const margin = { top: 100, right: 30, bottom: 63, left: 43 };
let innerWidth = 258;
export const LineChart = ({ userInfo }) => {
  const data = userInfo.sessionsAverage;
  const [toolX, setToolX] = useState(null);
  const [toolY, setToolY] = useState(null);
  const [sessionTime, setSessionTime] = useState(null);
  const { width, ref } = useResizeDetector();

  if (!data) {
    return <pre>Loading...</pre>;
  }
  if (width) {
    innerWidth = width;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const xValue = (d) => d.day;
  const yValue = (d) => d.sessionLength;

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth]);

  const xScaleAxis = scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0]);

  const lineGenerator = line()
    .x((d) => xScale(d.day))
    .y((d) => yScale(d.sessionLength))
    .curve(curveCatmullRom.alpha(1))(data);

  const pathSvg = new svgPathProperties(lineGenerator);

  const handleMouseMove = (e) => {
    setCoord(setToolX, setToolY, setSessionTime, yScale, pathSvg, e);
  };
  return (
    <div
      ref={ref}
      className="svgVignette"
      style={{ zIndex: 4, overflow: "visible" }}
    >
      <svg
        width={innerWidth}
        height={height}
        style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}
        viewBox={`0 0 ${innerWidth} ${height}`}
        preserveAspectRatio="none"
        overflow="visible"
        onMouseMove={(event) => {
          handleMouseMove(event);
        }}
        onMouseLeave={() => {
          setToolX(null);
        }}
      >
        <g>
          <Legend marginLeft={margin.left} />
          <g transform={`translate(${0},${margin.top})`}>
            <AxisBottom xScale={xScaleAxis} innerHeight={innerHeight} />

            {<Marks lineGenerator={lineGenerator} />}
            {toolX && toolX < innerWidth && (
              <>
                {
                  <g
                    transform={`translate(${toolX},${toolY})`}
                    className={"mouse-per-line"}
                  >
                    <g
                      transform={`translate(${5},${-50})`}
                      fill="#FFFFFF"
                      fillOpacity={1}
                    >
                      <rect
                        transform={`translate(${-innerWidth - 5 + toolX},${
                          50 - toolY - margin.top
                        })`}
                        width={innerWidth - toolX}
                        x={innerWidth - toolX}
                        y={0}
                        height={100 + "%"}
                        fill="rgba(0,0,0,0.1)"
                      ></rect>
                      <rect
                        fill="#ffffff"
                        width={60}
                        height={30}
                        style={{ zIndex: 5 }}
                      ></rect>
                      <text
                        transform={`translate(${10},${10})`}
                        stroke="#000000"
                        fill="#000000"
                        dominantBaseline="hanging"
                        textAnchor="center"
                        overflow="visible"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Roboto",
                          fontWeight: 500,
                          textAnchor: "center",
                        }}
                      >
                        {sessionTime} min
                      </text>
                    </g>
                    <circle
                      r={7}
                      strokeWidth="8"
                      stroke="#ffffff4c"
                      fill="#FFFFFF"
                    />
                  </g>
                }
              </>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
};
