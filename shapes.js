var squareObjects, circleObjects, i;
var svgns = "http://www.w3.org/2000/svg";
for (var i = 0; i < 100; i++) {
  var x = (Math.floor(Math.random() * 100) + 1)
  y = x;

  var rect = document.createElementNS(svgns, 'rect');
  rect.setAttributeNS(null, 'x', x);
  rect.setAttributeNS(null, 'y', y);
  rect.setAttributeNS(null, 'height', x);
  rect.setAttributeNS(null, 'width', y);
  rect.setAttributeNS(null, 'stroke-width', '5')
  rect.setAttributeNS(null, 'fill', 'red');
  rect.setAttributeNS(null, 'stroke', 'black');
  document.getElementById('svgSquare').appendChild(rect);
}
for (var l = 0; l < 100; l++) {
  var x = (Math.floor(Math.random() * 100) + 1)
  y = x;

  var circle = document.createElementNS(svgns, 'circle');
  circle.setAttributeNS(null, 'x', x);
  circle.setAttributeNS(null, 'y', y);
  circle.setAttributeNS(null, 'r', x);
  circle.setAttributeNS(null, 'stroke-width', '5')
  circle.setAttributeNS(null, 'fill', 'blue');
  circle.setAttributeNS(null, 'stroke', 'black');
  document.getElementById('svgCircle').appendChild(circle);
}
// squareObjects = Array.from({
//   length: 50
// }, () => Math.floor(Math.random() * 100)+1);
// circleObjects = {
//   radius: Math.ceil(Math.random() * 100) + 1
// }

function mySquares() {
  document.getElementById("square").style.width = this.squareObjects[0];
  document.getElementById("square").style.height = this.squareObjects[0];
};

function myCircles() {
  document.getElementById("circle").style.r = this.circleObjects.radius;
};