$(document).ready(() => {
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
      xArea = area.toString();
      return xArea;
    };
    let Shapes = [{
      Square: {
        Size: size,
        Area: getArea(size, size, null)
      }
    }, {
      Circle: {
        Radius: size,
        Area: parseFloat(getArea(size, size, null) * Math.PI).toFixed(2)
      }
    }];
    console.log(Shapes[0]);
    console.log(Shapes[1]);
    const circle = document.createElement("div");
    const square = document.createElement("div");
    document.body.appendChild(square);
    $(".mySquare").prependTo(".shapeSpace");
    square.style.width = size + 'px';
    square.style.height = size + 'px';
    square.style.background = 'red';
    square.style.border = '1px solid black';
    document.body.appendChild(circle);
    $(".myCircle").appendTo(".shapeSpace");
    circle.style.width = size * 2 + 'px';
    circle.style.height = size * 2 + 'px';
    circle.style.background = 'blue';
    circle.style.border = '1px solid black';
    circle.style.borderRadius = '100%';
  }
});