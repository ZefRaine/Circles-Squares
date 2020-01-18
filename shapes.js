const svgns = "http://www.w3.org/2000/svg";

for (let i = 0; i < 50; i++) {
  let x = (Math.floor(Math.random() * 100) + 1);
  const rect = document.createElementNS(svgns, 'rect');
  rect.setAttributeNS(null, 'height', x);
  rect.setAttributeNS(null, 'width', x);
  rect.setAttributeNS(null, 'align', '')
  rect.setAttributeNS(null, 'stroke-width', '5')
  rect.setAttributeNS(null, 'fill', 'red');
  rect.setAttributeNS(null, 'stroke', 'black');
  document.getElementById('svgSquare').appendChild(rect);
  let side = rect.height.baseVal.value;
  let s = side.toString();

  function getArea(side, side, unit) {
    area = side * side;
    return area + unit;
  };
  let Squares = [{
    Size: s,
    Area: getArea(s, s, " units²")
  }];
  console.log(Squares[0])
  function displayTest() {
    var para = document.createElement("P");
    para.innerHTML = `Square: Size = ${s} units, Area = ${getArea(s, s, " units² ")}`;
    document.body.appendChild(para);
    para.classList.add("mySquare");
    //console.log(`Square: Size = ${s} units, Area = ${getArea(s, s, " units² ")}`)
  }
  displayTest();
};
for (let l = 0; l < 50; l++) {
  let x = (Math.floor(Math.random() * 100) + 1)
  const circle = document.createElementNS(svgns, 'circle');
  circle.setAttributeNS(null, 'r', x);
  circle.setAttributeNS(null, 'stroke-width', '5')
  circle.setAttributeNS(null, 'fill', 'blue');
  circle.setAttributeNS(null, 'stroke', 'black');
  document.getElementById('svgCircle').appendChild(circle);
  let radius = [circle.r.baseVal.value];
  let r = radius.toString();

  function getArea(r, r, unit) {
    area = r * Math.floor(Math.PI);
    return area + unit;
  };
  let Circles = [{
    Radius: r,
    Area: getArea(r, r, " units²")
  }];
  console.log(Circles[0])
  function displayTest() {
    var para = document.createElement("P");
    para.innerHTML = `Circle: Radius = ${r} units, Area = ${getArea(r, r, " units² ")}`;
    document.body.appendChild(para);
    para.classList.add("myCircle");
    //console.log(`Circle: Radius = ${r} units, Arzea = ${getArea(r, r, " units² ")}`)
  }
  displayTest();
};