import React, { useState, useEffect } from "react";
import styled from "styled-components";

function NutritionCard({ Svgicon, Count, Type, colorIcon }) {
  let measureType = "g";
  if (Type === "Calories") {
    measureType = "Kcal";
  }
  return (
    <Div>
      <div className="nutritionCard-First">
        <DivIcon inputColor={colorIcon}>
          <Svgicon className="nutritionCard-Icon" />
        </DivIcon>
      </div>
      <div className="nutritionCard-Second">
        <div className="nutritionCard-Infos">
          <div className="nutritionCard-Infos-Data">
            {Count}
            {measureType}
          </div>
          <div className="nutritionCard-Infos-Type">{Type}</div>
        </div>
      </div>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  flex-direction: row;
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  height: 20%;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  .nutritionCard-First {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .nutritionCard-Second {
    flex: 2;
  }
  .nutritionCard-Infos {
    display: flex;
    flex-direction: column;
    &-Data {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }
    &-Type {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
const DivIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${(props) => props.inputColor};
  mix-blend-mode: normal;
  border-radius: 6px;
`;

export default NutritionCard;
