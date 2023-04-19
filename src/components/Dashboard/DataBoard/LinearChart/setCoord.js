import * as d3 from "d3";
const setCoord = (setToolX, setToolY, setSessionTime, yScale, pathSvg, e) => {
  var mouse = d3.pointer(e);
  var beginning = 0,
    end = pathSvg.getTotalLength(),
    target = null;

  while (true) {
    target = Math.floor((beginning + end) / 2);
    var pos = pathSvg.getPointAtLength(target);

    if ((target === end || target === beginning) && pos.x !== mouse[0]) {
      break;
    }
    if (pos.x > mouse[0]) end = target;
    else if (pos.x < mouse[0]) beginning = target;
    else {
      break;
    } // position found
  }
  setToolX(mouse[0]);
  setToolY(pos.y);
  setSessionTime(Math.abs(Math.trunc(yScale.invert(pos.y))));
};

export { setCoord };
