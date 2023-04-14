import React, { useState, useRef } from "react";
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
import * as d3 from "d3";

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
  const path = useRef(null);
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
  const svgLine = (
    <g>
      <linearGradient id="linear-gradient">
        <stop offset="0.1" stopColor="#ffffff" stopOpacity="0.5" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="1" />
      </linearGradient>
      <path
        id="lineABC"
        d={lineGenerator}
        style={{ boxSizing: "border-box", stroke: "url(#linear-gradient)" }}
        fill="none"
        strokeWidth={2}
        ref={path}
      ></path>
    </g>
  );

  const getCoord = (e) => {
    var mouse = d3.pointer(e);
    var beginning = 0,
      end = pathSvg.getTotalLength(),
      target = null;

    while (true) {
      target = Math.floor((beginning + end) / 2);
      var pos = pathSvg.getPointAtLength(target);

      if ((target === end || target === beginning) && pos.x !== mouse[0]) {
        break;
      }
      if (pos.x > mouse[0]) end = target;
      else if (pos.x < mouse[0]) beginning = target;
      else {
        break;
      } // position found
    }
    setToolX(mouse[0]);
    setToolY(pos.y);
    setSessionTime(Math.abs(Math.trunc(yScale.invert(pos.y))));
  };
  const handleMouseMove = (e) => {
    getCoord(e);
  };
  return (
    <div ref={ref} style={{ zIndex: 4 }} className="svgVignette">
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

            {<Marks svgLine={svgLine} />}
            {toolX && toolY && (
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
