import React from "react";
import DataBoard from "./DataBoard/DataBoard";
import Nutrition from "./nutrition/Nutrition";
import styled from "styled-components";

function CoreDashboard() {
  return (
    <Div>
      <DataBoard />
      <Nutrition />
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  box-sizing: content-box;
  justify-content: space-evenly;
`;
export default CoreDashboard;
