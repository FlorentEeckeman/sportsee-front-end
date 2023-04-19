import React from "react";

export const Marks = ({ lineGenerator }) => {
  return (
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
      ></path>
    </g>
  );
};
