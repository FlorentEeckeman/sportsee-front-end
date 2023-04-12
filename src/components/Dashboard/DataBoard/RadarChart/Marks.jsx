import React, { useState, useCallback, useEffect } from "react";
import { csv, arc, pie, scaleBand, scaleLinear, max, format } from "d3";
export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  innerHeight,
  setTooltip,
  setToolX,
  setToolY,
  setToolIndex,
}) => {
  const ref = React.useRef(null);
  const [dataOpacity, setDataOpacity] = useState({ id: null, status: false });
  const testyScale = xScale.bandwidth() / 2;
  const radius = 7 / 2;
  var xScaleTooltip;
  var fillState;

  return data.map((d, i) => (
    <g
      key={xValue(d)}
      onMouseEnter={(event) => {
        setToolX(xScale(xValue(d)) + 65);
        setToolY(event.clientY - 65);
        setToolIndex(i);
        setDataOpacity({ id: i, status: !dataOpacity.status });
      }}
      onMouseLeave={() => {
        setToolIndex(null);
        setDataOpacity({ id: i, status: !dataOpacity.status });
      }}
    >
      {i === 0
        ? (xScaleTooltip = xScale(xValue(d)))
        : i !== data.length - 1
        ? (xScaleTooltip = xScale(xValue(d)) - (testyScale - radius * 2) / 2)
        : (xScaleTooltip = xScale(xValue(d)) - (testyScale - radius * 2))}
      {dataOpacity.status && i === dataOpacity.id
        ? (fillState = 1)
        : (fillState = 0)}
      <svg
        height={innerHeight}
        width={xScale.bandwidth()}
        id={"svg" + i}
        onMouseEnter={(event) => {
          // event.currentTarget.style.fillOpacity = 1;
        }}
        onMouseLeave={(event) => {
          // event.currentTarget.style.fillOpacity = 0;
        }}
        style={{
          fill: "#C4C4C480",
          overflow: "inherit",
          fillOpacity: fillState,
        }}
      >
        <rect
          width={xScale.bandwidth()}
          height={innerHeight}
          x={xScaleTooltip}
          y={0}
          style={{}}
        ></rect>
      </svg>

      <path
        key={xValue(d)}
        id="lineAB"
        d={
          `M${xScale(xValue(d))},${innerHeight} ` + // Mx,y Move the pen to(x, y)
          `v-${yScale(yValue(d)) - radius} ` +
          `a ${radius},${radius} 0 0 1 ${radius},-${radius} ` +
          `a ${radius},${radius} 0 0 1 ${radius},${radius} ` +
          `v+${yScale(yValue(d)) - radius} ` +
          `z`
        }
        fill="#E60000"
      ></path>

      <path
        key={xValue(d) + "d"}
        id="lineAB"
        d={
          `M${xScale(xValue(d)) + testyScale},${innerHeight} ` + // Mx,y Move the pen to(x, y)
          `v-${yScale(yValue(d)) - radius} ` +
          `a ${radius},${radius} 0 0 1 ${radius},-${radius} ` +
          `a ${radius},${radius} 0 0 1 ${radius},${radius} ` +
          `v+${yScale(yValue(d)) - radius} ` +
          `z`
        }
        fill="#282D30"
      ></path>
    </g>
  ));
};
