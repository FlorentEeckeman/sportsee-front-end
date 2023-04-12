import React, { useState, useCallback, useEffect } from "react";
import { csv, arc, pie, scaleBand, scaleLinear, max, format } from "d3";
export const Marks = ({ svgLine }) => {
  return <g>{svgLine}</g>;
};
