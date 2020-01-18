var i, l;
var svgns = "http://www.w3.org/2000/svg";
for (var i = 0; i < 100; i++) {
  var x = (Math.floor(Math.random() * 100) + 1)
  y = x;

  var rect = document.createElementNS(svgns, 'rect');
  rect.setAttributeNS(null, 'height', x);
  rect.setAttributeNS(null, 'width', y);
  rect.setAttributeNS(null, 'stroke-width', '5')
  rect.setAttributeNS(null, 'fill', 'red');
  rect.setAttributeNS(null, 'stroke', 'black');
  document.getElementById('svgSquare').appendChild(rect);
}
for (var l = 0; l < 100; l++) {
  var r = (Math.floor(Math.random() * 100) + 1)
  var circle = document.createElementNS(svgns, 'circle');
  circle.setAttributeNS(null, 'r', r);
  circle.setAttributeNS(null, 'stroke-width', '5')
  circle.setAttributeNS(null, 'fill', 'blue');
  circle.setAttributeNS(null, 'stroke', 'black');
  document.getElementById('svgCircle').appendChild(circle);
}