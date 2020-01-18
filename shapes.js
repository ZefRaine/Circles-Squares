const svgns = "http://www.w3.org/2000/svg";
let squareShape, circleShape = [];
for (let i = 0; i < 50; i++) {
  let x = (Math.floor(Math.random() * 100) + 1);
  const rect = document.createElementNS(svgns, 'rect');
  rect.setAttributeNS(null, 'height', x);
  rect.setAttributeNS(null, 'width', x);
  rect.setAttributeNS(null, 'stroke-width', '5')
  rect.setAttributeNS(null, 'fill', 'red');
  rect.setAttributeNS(null, 'stroke', 'black');
  document.getElementById('svgSquare').appendChild(rect);
  let side = rect.height.baseVal.value;
  let s = side.toString();
  document.getElementById("dimensions").innerHTML = s;

  function getArea(side, side, unit) {
    area = side * side;
    return area + unit;
  };
  console.log(`Square: Size = ${side} units, Area = ${getArea(side, side, " units²")}`);
  document.write(`Square: Size = ${side} units, Area = ${getArea(side, side, " units²")}` + `\n`);
};
for (let l = 0; l < 50; l++) {
  let r = (Math.floor(Math.random() * 100) + 1)
  const circle = document.createElementNS(svgns, 'circle');
  circle.setAttributeNS(null, 'r', r);
  circle.setAttributeNS(null, 'stroke-width', '5')
  circle.setAttributeNS(null, 'fill', 'blue');
  circle.setAttributeNS(null, 'stroke', 'black');
  document.getElementById('svgCircle').appendChild(circle);
  let side = circle.r.baseVal.value;
  let s = side.toString();
  document.getElementById("dimensions").innerHTML = s;

  function getArea(side, side, unit) {
    area = side * Math.PI;
    return area + unit;
  };
  console.log(`Circle: Radius = ${side} units, Area = ${getArea(side, side, " units²")}`);
  document.write(`Circle: Radius = ${side} units, Area = ${getArea(side, side, " units²")}` + `\n`);
};
// const bubbleSort = arr => {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let tmp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = tmp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// };