import React, { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { scaleBand, scaleLinear, max, format } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import Legend from "./Legend";
import Tooltip from "./Tooltip";
import styled from "styled-components";

let innerWidth = 700;
const height = 320;
const margin = { top: 100, right: 30, bottom: 63, left: 43 };

/**
 * user GroupedBard Chart page. contain the Bar Chart component
 *
 * @name GroupedBarChart
 * @param {Object} userInfo - user information
 * @returns {ReactElement} the D3 visualization of all user data in D3.js charts
 * @component
 */

export const GroupedBarChart = ({ userInfo }) => {
  const data = userInfo.sessionsActivity;
  const { width, ref } = useResizeDetector();
  const [toolIndex, setToolIndex] = useState(null);
  const [toolX, setToolX] = useState(null);
  const [toolY, setToolY] = useState(null);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;

  innerWidth = width - 140;
  const xValue = (d) => d.day;
  const yValueCalories = (d) => d.calories;
  const yValueKilogram = (d) => d.kilogram;

  const siFormat = format(".2s");
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "");

  const xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .paddingInner(0.5);

  const yScale = scaleLinear()
    .domain([Math.max(max(data, yValueCalories), max(data, yValueKilogram)), 0])
    .range([innerHeight, 0]);

  return (
    <Div ref={ref}>
      {width && (
        <svg width={width} height={height}>
          <Legend marginLeft={margin.left} innerWidth={innerWidth} />
          <g transform={`translate(${margin.left},${margin.top})`}>
            <g>
              <AxisBottom
                xScale={xScale}
                innerHeight={innerHeight}
                tickFormat={xAxisTickFormat}
                key={"test"}
              />
              <AxisLeft
                yScale={yScale}
                tickFormat={xAxisTickFormat}
                innerHeight={innerHeight}
                innerWidth={innerWidth}
              />
            </g>
            {
              <Marks
                data={data}
                yScale={yScale}
                xScale={xScale}
                xValue={xValue}
                yValueCalories={yValueCalories}
                yValueKilogram={yValueKilogram}
                tooltipFormat={xAxisTickFormat}
                innerHeight={innerHeight}
                innerWidth={innerWidth}
                setToolX={setToolX}
                setToolY={setToolY}
                setToolIndex={setToolIndex}
              />
            }
          </g>
        </svg>
      )}
      {toolIndex !== null ? (
        <Tooltip
          toolY={toolY}
          toolX={toolX}
          data={data}
          toolIndex={toolIndex}
        />
      ) : null}
    </Div>
  );
};
const Div = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  overflow: hidden;
  background-color: #fbfbfb;
`;
