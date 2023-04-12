import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { csv, arc, scaleBand, scaleLinear, max, format } from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { Marks } from "./Marks";
import Legend from "./Legend";

const width = 258;
const height = 263;

export const RadarChart = () => {
  const data = [{ color: "orange", values: [500, 700, 900, 600, 800, 1000] }];
  const labels = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];

  const maxValue = 1000;
  const radius = 90;
  const center = { x: 129, y: 131 };

  const yScale = scaleLinear().domain([0, 1000]).range([radius, 0]);

  let val, angle;
  let radarDiagram = [];
  for (val = 0; val <= maxValue; val += maxValue / 5) {
    let path = "";
    for (let i = 0; i <= data[0].values.length; i++) {
      const r = yScale(val);
      // console.log("value : " + data[0].values.length);
      // console.log("r: " + r);
      const angle = (i * Math.PI * 2) / 6;
      const x = center.x + r * Math.sin(angle);
      const y = center.y + r * -Math.cos(angle);
      path += `${i > 0 ? "L" : "M"} ${x},${y} `;
    }
    path += "Z";
    radarDiagram.push(
      <path
        cx={center.x}
        cy={center.y}
        d={path}
        stroke="#ffffff"
        fill="none"
        key={val}
      />
    );
  }

  let dataDiagram = [];
  data.forEach(({ color, values }, index) => {
    let path = "";
    for (let i = 0; i < values.length; i++) {
      const r = radius - yScale(values[i]);
      // console.log("V: ", values[i]);
      // console.log("R: ", r);
      const angle = (i * Math.PI * 2) / values.length;
      // console.log("angle : " + angle);
      const x = center.x + r * Math.sin(angle);
      const y = center.y + r * -Math.cos(angle);
      // console.log("x : " + x);
      //console.log("y : " + y);
      path += `${i > 0 ? "L" : "M"} ${x},${y} `;
    }
    path += "Z";

    dataDiagram.push(
      <path
        d={path}
        fill="#FF0101"
        fillOpacity={0.7}
        key={"dataDiag" + index}
      />
    );
  });

  let radarLegend = [];
  const shifts = [
    { x: 0, y: -15 },
    { x: 10, y: 0 },
    { x: 35, y: 10 },
    { x: -30, y: 20 },
    { x: -45, y: 10 },
    { x: -45, y: 0 },
  ];
  const anchors = ["middle", "start", "end"];

  for (let index = 0; index < labels.length; index++) {
    const angle = (index * Math.PI * 2) / 6;
    const x = center.x + radius * Math.sin(angle);
    const y = center.y + radius * -Math.cos(angle);

    radarLegend.push(
      <text
        dx={shifts[index].x}
        dy={shifts[index].y}
        x={x}
        y={y}
        key={index}
        style={{
          fontSize: "12px",
          fontFamily: "Roboto",
          fontWeight: 50,
          textAnchor: "center",
          color: "rgba(0,0,0)",
        }}
        stroke="#ffffff"
        strokeWidth={0.75}
        fill="none"
        textAnchor={anchors[index]}
      >
        {labels[index]}
      </text>
    );
  }

  return (
    <div className="svgVignette">
      <svg width={width} height={height} style={{ backgroundColor: "#282D30" }}>
        <g transform={`translate(${0},${0})`}>
          {radarDiagram}
          {dataDiagram}
          {radarLegend}
        </g>
      </svg>
    </div>
  );
};
