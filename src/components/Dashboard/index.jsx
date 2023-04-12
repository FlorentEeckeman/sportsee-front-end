import React from "react";
import styled from "styled-components";
import TopDashboard from "./TopDashboard";
import CoreDashboard from "./CoreDashboard";

function Dashboard() {
  return (
    <DashboardBody>
      <TopDashboard />
      <CoreDashboard />
    </DashboardBody>
  );
}
const DashboardBody = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 60px 90px 80px 100px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export default Dashboard;
