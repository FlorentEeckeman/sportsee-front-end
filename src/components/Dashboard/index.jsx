import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopDashboard from "./TopDashboard";
import CoreDashboard from "./CoreDashboard";
import { getUser } from "../../utils/dataFormat";

function Dashboard() {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const result = await getUser(18);
      setUser(result);
    };
    fetchUser();
  }, []);
  if (!user) {
    return null;
  }
  return (
    <DashboardBody>
      <TopDashboard userInfo={user} />
      <CoreDashboard userInfo={user} />
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
