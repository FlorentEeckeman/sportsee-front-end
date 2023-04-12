import React, { useState, useCallback, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { csv, arc, pie, scaleBand, scaleLinear, max, format } from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import Legend from "./Legend";
import Tooltip from "./Tooltip";
import styled from "styled-components";

let innerWidth = 700;

const height = 320;
const margin = { top: 100, right: 30, bottom: 63, left: 43 };
const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [ref]);
  return dimensions;
};

export const GroupedBarChart = () => {
  const data = useData();
  const divRef = createRef();
  const dimensions = useRefDimensions(divRef);
  const [toolIndex, setToolIndex] = useState(null);
  const [toolX, setToolX] = useState(null);
  const [toolY, setToolY] = useState(null);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  let width = innerWidth;
  innerWidth = dimensions.width - 140;
  //innerWidth = innerWidth - 70;
  const xValue = (d) => d.Country;
  const yValue = (d) => d.Population;

  const siFormat = format(".2s");
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "");

  const xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .paddingInner(0.5);

  const yScale = scaleLinear()
    .domain([max(data, yValue), 0])
    .range([innerHeight, 0]);

  return (
    <Div ref={divRef}>
      <svg width={width + 140} height={height}>
        <Legend marginLeft={margin.left} />
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
              yValue={yValue}
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
