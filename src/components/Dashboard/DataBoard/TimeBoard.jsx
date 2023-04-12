import React from "react";
import styled from "styled-components";
import { RadialChart } from "./RadialChart";

function TimeBoard() {
  return (
    <Div>
      <RadialChart />
    </Div>
  );
}
const Div = styled.div`
  width: 30%;
  height: 100%;
  background: #ff0000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`;
export default TimeBoard;
