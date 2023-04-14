import React from "react";

function TopDashboard({ userInfo }) {
  return (
    <div>
      <h1>Bonjour {userInfo.firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default TopDashboard;
