import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopDashboard from "./TopDashboard";
import CoreDashboard from "./CoreDashboard";
import { getUser } from "../../utils/dataFormat";

/**
 * Dashboard page. contain all components of Dashboard
 * @name Dashboard
 * @returns {ReactElement} all components of Dashboard
 * @component
 */

function Dashboard({ user }) {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const result = await getUser(user);
      setUserInfo(result);
    };
    fetchUser();
  }, [user]);
  if (!userInfo) {
    return null;
  }
  return (
    <DashboardBody>
      <TopDashboard userInfo={userInfo} />
      <CoreDashboard userInfo={userInfo} />
    </DashboardBody>
  );
}
const DashboardBody = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 30px 90px 80px 100px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export default Dashboard;
