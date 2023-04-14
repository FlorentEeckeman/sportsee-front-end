import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUser } from "../../../utils/dataFormat";
import { LineChart } from "./LinearChart";
import { RadarChart } from "./RadarChart";
import { RadialChart } from "./RadialChart";
import { GroupedBarChart } from "./GroupedBarChart";

function DataBoard({ userInfo }) {
  return (
    <Div>
      <GroupedBarChart userInfo={userInfo} />
      <div className="dashboard-Indicators">
        <LineChart userInfo={userInfo} />
        <RadarChart userInfo={userInfo} />
        <RadialChart userInfo={userInfo} />
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
    height: 263px;
    display: flex;
    width: 100%;
    flex-direction: row;
    column-gap: 30px;
    justify-content: space-between;
    .svgVignette {
      box-sizing: border-box;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
      border-radius: 5px;
      width: 33%;
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
