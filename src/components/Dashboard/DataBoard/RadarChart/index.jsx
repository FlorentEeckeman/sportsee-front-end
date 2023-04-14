import React from "react";
import { useResizeDetector } from "react-resize-detector";
import radarLegend from "./dataGraph/radarLegend";
import dataDiagram from "./dataGraph/dataDiagram";
import radarDiagram from "./dataGraph/radarDiagram";
import { scaleLinear, max } from "d3";

const height = 263;

export const RadarChart = ({ userInfo }) => {
  const { width, ref } = useResizeDetector();
  const data = userInfo.performance;
  const labels = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];

  console.log(userInfo);
  const maxValue = max(data);
  let radius = width / 3;
  let fontSizeSvg = 12;

  if (radius > 90) {
    radius = 90;
  }
  if (radius < 73) {
    fontSizeSvg = 10;
  }

  const center = { x: width / 2, y: 131 };

  const yScale = scaleLinear()
    .domain([0, max(data)])
    .range([radius, 0]);

  return (
    <div className="svgVignette" ref={ref}>
      {width && (
        <svg
          width={width}
          height={height}
          style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
        >
          <g transform={`translate(${0},${0})`}>
            {radarDiagram(maxValue, data, yScale, center)}
            {dataDiagram(data, radius, yScale, center)}
            {radarLegend(radius, labels, center, fontSizeSvg)}
          </g>
        </svg>
      )}
    </div>
  );
};
