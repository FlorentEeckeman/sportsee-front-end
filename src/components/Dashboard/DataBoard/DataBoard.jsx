import React from "react";
import styled from "styled-components";

import { LineChart } from "./LinearChart";
import { RadarChart } from "./RadarChart";
import { RadialChart } from "./RadialChart";
import { GroupedBarChart } from "./GroupedBarChart";

function DataBoard() {
  return (
    <Div>
      <GroupedBarChart />
      <div className="dashboard-Indicators">
        <LineChart />
        <RadarChart />
        <RadialChart />
      </div>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: space-between;
  padding-right: 30px;
  height: 100%;
  overflow: hidden;
  .dashboard-Indicators {
    height: 42%;
    display: flex;
    width: 100%;
    flex-direction: row;
    column-gap: 30px;
    justify-content: space-between;
    .svgVignette {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
      border-radius: 5px;
      overflow: hidden;
    }
    .activityBoard {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
      border-radius: 5px;
      overflow: hidden;
      background-color: #fbfbfb;
    }
  }
`;
export default DataBoard;
