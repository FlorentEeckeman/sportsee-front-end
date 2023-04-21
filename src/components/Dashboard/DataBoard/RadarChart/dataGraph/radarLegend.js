const radarLegend = (radius, labels, center, fontSizeSvg) => {
  let radar = [];
  let shifts;

  if (radius > 72) {
    shifts = [
      { x: 0, y: -15 },
      { x: 10, y: 0 },
      { x: 35, y: 10 },
      { x: -30, y: 20 },
      { x: -45, y: 10 },
      { x: -45, y: 0 },
    ];
  } else {
    shifts = [
      { x: 0, y: -10 },
      { x: 2, y: 0 },
      { x: 30, y: 10 },
      { x: -20, y: 15 },
      { x: -32, y: 10 },
      { x: -32, y: 0 },
    ];
  }

  const anchors = ["middle", "start", "end"];
  // will create a text element for all labels with the good positioning
  for (let index = 0; index < labels.length; index++) {
    const angle = (index * Math.PI * 2) / 6;
    const x = center.x + radius * Math.sin(angle);
    const y = center.y + radius * -Math.cos(angle);

    radar.push(
      <text
        dx={shifts[index].x}
        dy={shifts[index].y}
        x={x}
        y={y}
        key={index}
        style={{
          fontSize: fontSizeSvg,
          fontFamily: "Roboto",
          fontWeight: 50,
          textAnchor: "center",
          color: "rgba(0,0,0)",
        }}
        stroke="#ffffff"
        strokeWidth={0.75}
        fill="none"
        textAnchor={anchors[index]}
      >
        {labels[index]}
      </text>
    );
  }
  return radar;
};
export default radarLegend;
