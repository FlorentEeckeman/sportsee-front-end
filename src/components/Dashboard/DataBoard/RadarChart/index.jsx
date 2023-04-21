import React from "react";
import { useResizeDetector } from "react-resize-detector";
import radarLegend from "./dataGraph/radarLegend";
import dataDiagram from "./dataGraph/dataDiagram";
import radarDiagram from "./dataGraph/radarDiagram";
import { scaleLinear, max } from "d3";

const height = 263;
/**
 * user RadarChart Chart page. contain the Radar Chart component
 *
 * @name RadarChart
 * @param {Object} userInfo - user information
 * @returns {ReactElement} the D3 visualization of user performance
 * @component
 */
export const RadarChart = ({ userInfo }) => {
  //hook for get div with for responsive positioning
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
            {
              //this function return the svg scale
              radarDiagram(maxValue, data, yScale, center)
            }
            {
              //this function return the svg data shape
              dataDiagram(data, radius, yScale, center)
            }
            {
              //this function return the svg legend
              radarLegend(radius, labels, center, fontSizeSvg)
            }
          </g>
        </svg>
      )}
    </div>
  );
};
