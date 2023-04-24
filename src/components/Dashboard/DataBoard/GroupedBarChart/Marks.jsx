import React, { useState } from "react";

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  innerHeight,
  setToolX,
  setToolY,
  setToolIndex,
  yValueCalories,
  yValueKilogram,
}) => {
  // state used to determine opacity of current band flown over
  const [dataOpacity, setDataOpacity] = useState({ id: null, status: false });
  const testyScale = xScale.bandwidth() / 2;
  const radius = 7 / 2;
  let xScaleTooltip;
  // variable used for set opacity css of current band
  var fillState;

  return data.map((d, i) => (
    <g
      key={xValue(d)}
      onMouseEnter={(event) => {
        setToolX(xScale(xValue(d)) + 65);
        setToolY(event.clientY - 65);
        setToolIndex(i);
        // set current flown over band
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
        ? (xScaleTooltip = xScale(xValue(d)) + (testyScale - radius * 2) / 2)
        : (xScaleTooltip = xScale(xValue(d)) + (testyScale - radius * 2))}
      {dataOpacity.status && i === dataOpacity.id
        ? (fillState = 1)
        : (fillState = 0)}
      <svg
        height={innerHeight}
        width={xScale.bandwidth()}
        id={"svg" + i}
        style={{
          fill: "#C4C4C480",
          overflow: "inherit",
          fillOpacity: fillState,
        }}
      >
        <rect
          width={xScale.bandwidth()}
          height={innerHeight}
          x={xScale(xValue(d))}
          y={0}
        ></rect>
      </svg>

      <path
        key={xValue(d)}
        id="lineAB"
        d={
          `M${xScaleTooltip},${innerHeight} ` + // origin coordinates
          `v-${yScale(yValueKilogram(d)) - radius} ` + // vertical movement
          `a ${radius},${radius} 0 0 1 ${radius},-${radius} ` + // first half radius
          `a ${radius},${radius} 0 0 1 ${radius},${radius} ` + // second half radius
          `v+${yScale(yValueKilogram(d)) - radius} ` + // vertical movement
          `z`
        }
        fill="#282D30"
      ></path>

      <path
        key={xValue(d) + "d"}
        id="lineAB"
        d={
          `M${xScaleTooltip + testyScale},${innerHeight} ` + // origin coordinates
          `v-${yScale(yValueCalories(d)) - radius} ` + // vertical movement
          `a ${radius},${radius} 0 0 1 ${radius},-${radius} ` + // first half radius
          `a ${radius},${radius} 0 0 1 ${radius},${radius} ` + // second half radius
          `v+${yScale(yValueCalories(d)) - radius} ` + // vertical movement
          `z`
        }
        fill="#E60000"
      ></path>
    </g>
  ));
};
