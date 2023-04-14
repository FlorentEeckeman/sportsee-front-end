const dataDiagram = (data, radius, yScale, center) => {
  let dataDiagram = [];

  let path = "";
  for (let i = 0; i < data.length; i++) {
    const r = radius - yScale(data[i]);
    // console.log("V: ", values[i]);
    // console.log("R: ", r);
    const angle = (i * Math.PI * 2) / data.length;
    // console.log("angle : " + angle);
    const x = center.x + r * Math.sin(angle);
    const y = center.y + r * -Math.cos(angle);
    // console.log("x : " + x);
    //console.log("y : " + y);
    path += `${i > 0 ? "L" : "M"} ${x},${y} `;
  }
  path += "Z";

  dataDiagram.push(
    <path d={path} fill="#FF0101" fillOpacity={0.7} key={"dataDiag"} />
  );
  return dataDiagram;
};
export default dataDiagram;
