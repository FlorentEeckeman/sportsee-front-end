import React from "react";

function Tooltip({ toolY, toolX, data, toolIndex }) {
  return (
    <div
      className="tooltip"
      style={{
        position: "absolute",
        top: toolY - 5,
        left: toolX + 250,
        padding: "1.2em",
        backgroundColor: "#E60000",
        fontSize: "7px",
        color: "#FFFFFF",
        fontWeight: 400,
        fontFamily: "Roboto",
        textAlign: "center",
      }}
    >
      <div style={{ paddingBottom: "22px" }}>{data[toolIndex].Country}</div>
      <div>{data[toolIndex].Population}</div>
    </div>
  );
}

export default Tooltip;
