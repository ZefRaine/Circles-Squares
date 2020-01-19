for (let i = 0; i < 50; i++) {
  let size = (Math.floor(Math.random() * 100) + 1);

  function getArea(size, size, unit) {
    area = size * size;
    return area + unit;
  };
  let Squares = [{
    Size: size,
    Area: getArea(size, size, null)
  }];
  console.log(Squares[0]);
  const square = document.createElement("div");
  square.classList.add("mySquare");
  document.body.appendChild(square);
  square.style.width = size + 'px';
  square.style.height = size + 'px';
  square.style.background = 'red';
  square.style.border = '1px solid black';
};

for (let l = 0; l < 50; l++) {
  let radius = (Math.floor(Math.random() * 100) + 1)

  function getArea(radius, radius, unit) {
    area = radius * Math.PI;
    return area + unit;
  };
  Array.from({
    length: 50
  }, () => Math.floor(Math.random() * 100) + 1);
  var Circles = [{
    Radius: radius,
    Area: getArea(radius, radius, null)
  }];
  console.log(Circles[0]);
  const circle = document.createElement("div");
  circle.classList.add("myCircle");
  document.body.appendChild(circle);
  circle.style.width = radius + 'px';
  circle.style.height = radius + 'px';
  circle.style.background = 'blue';
  circle.style.border = '1px solid black';
};