import React from "react";
import DataBoard from "./DataBoard/DataBoard";
import Nutrition from "./nutrition/Nutrition";
import styled from "styled-components";

function CoreDashboard({ userInfo }) {
  return (
    <Div>
      <DataBoard userInfo={userInfo} />
      <Nutrition userInfo={userInfo} />
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  box-sizing: content-box;
  justify-content: space-evenly;
  padding-top: 30px;
`;
export default CoreDashboard;
