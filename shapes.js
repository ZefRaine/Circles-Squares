$(document).ready(function () {
  var arr = [0];

  for (var i = 1; i <= 50; i++) {
    var x = (Math.floor(Math.random() * 100) + 1)
    arr.push(x);
  }
  //sort the array descending:
  arr.sort((a, b) => b - a);

  for (var i = 0; i < 50; i++) {
    var x = arr[i];
    var size = x.toString();

    function getArea(size, size, unit) {
      area = size * size;
      xArea = area.toString()
      return xArea;
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
  }
});
$(document).ready(function () {
  var arr = [0];

  for (var i = 1; i <= 50; i++) {
    var x = (Math.floor(Math.random() * 100) + 1)
    arr.push(x);
  }
  //sort the array descending:
  arr.sort((a, b) => b - a);

  for (var i = 0; i < 50; i++) {
    var x = arr[i];
    var radius = x.toString();

    function getArea(radius, radius, unit) {
      area = radius * Math.PI;
      return parseFloat(area).toFixed(2);
    };
    let Circles = [{
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
  }
});