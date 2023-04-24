import React from "react";

function Tooltip({ toolY, toolX, data, toolIndex }) {
  return (
    <div
      className="tooltip"
      style={{
        position: "absolute",
        top: toolY - 6,
        left: toolX + 265,
        padding: "1.2em",
        backgroundColor: "#E60000",
        fontSize: "10px",
        color: "#FFFFFF",
        fontWeight: 400,
        fontFamily: "Roboto",
        textAlign: "center",
      }}
    >
      <div style={{ paddingBottom: "22px" }}>{data[toolIndex].kilogram}kg</div>
      <div> {data[toolIndex].calories}kcal</div>
    </div>
  );
}

export default Tooltip;
