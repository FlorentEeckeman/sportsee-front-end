const radarDiagram = (maxValue, data, yScale, center) => {
  let val;
  let radarDiagram = [];
  // this function create 5 hexagon with different radius for create le scale
  for (val = 0; val <= maxValue; val += maxValue / 5) {
    let path = "";
    for (let i = 0; i <= data.length; i++) {
      const r = yScale(val);
      const angle = (i * Math.PI * 2) / 6;
      const x = center.x + r * Math.sin(angle);
      const y = center.y + r * -Math.cos(angle);
      path += `${i > 0 ? "L" : "M"} ${x},${y} `;
    }
    path += "Z";
    radarDiagram.push(
      <path
        cx={center.x}
        cy={center.y}
        d={path}
        stroke="#ffffff"
        fill="none"
        key={val}
      />
    );
  }
  return radarDiagram;
};
export default radarDiagram;
