import React from "react";
import styled from "styled-components";
import NutritionCard from "./NutritionCard";
import calorie from "../../../assets/Icon/nutrition/calorie";
import chicken from "../../../assets/Icon/nutrition/chicken";
import apple from "../../../assets/Icon/nutrition/apple";
import burger from "../../../assets/Icon/nutrition/burger";

function Nutrition() {
  return (
    <Div>
      <NutritionCard
        Svgicon={calorie}
        Count={"test"}
        Type={"test"}
        colorIcon={"rgba(255, 0, 0, 0.07)"}
      />
      <NutritionCard
        Svgicon={chicken}
        Count={"test"}
        Type={"test"}
        colorIcon={"rgba(74, 184, 255, 0.07)"}
      />
      <NutritionCard
        Svgicon={apple}
        Count={"test"}
        Type={"test"}
        colorIcon={"rgba(249, 206, 35, 0.07)"}
      />
      <NutritionCard
        Svgicon={burger}
        Count={"test"}
        Type={"test"}
        colorIcon={"rgba(253, 81, 129, 0.07)"}
      />
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: space-evenly;
`;
export default Nutrition;
