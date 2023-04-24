import React from "react";
import styled from "styled-components";
import NutritionCard from "./NutritionCard";

/**
 * user Nutrition component. contain the Nutrition cards
 *
 * @name Nutrition
 * @param {Object} userInfo - user information
 * @returns {ReactElement} - the 4 Nutrition cards
 * @component
 */
function Nutrition({ userInfo }) {
  let item = [];
  for (var key in userInfo.keyData) {
    item.push(
      <NutritionCard
        key={userInfo.keyData[key].type}
        SvgIcon={userInfo.keyData[key].svg}
        Count={userInfo.keyData[key].count}
        Type={userInfo.keyData[key].type}
        colorIcon={userInfo.keyData[key].color}
      />
    );
  }
  return <Div>{item}</Div>;
}
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;
export default Nutrition;
