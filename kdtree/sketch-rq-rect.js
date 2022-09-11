let width = 800;
let height = 600;
var maxx = width;
var maxy = height;
let scalex = 10;
let scaley = 5;

let data = [];
let root;

class Rectangle {
  constructor(center, scope) {
    this.center = center
    this.scope = scope;
  }
}

function setup() {

  createCanvas();
  createCanvas(width, height);

  for (let i = 0; i < 150; i++) {
    var x = Math.floor(Math.random() * maxx);
    var y = Math.floor(Math.random() * maxy);
    data.push([x, y]);
    
  }

  root = build_kdtree(data);

  
  drawtmp();
}


function drawPoint(point, r = 255, g = 255, b = 255) {
  var x = point[0];
  var y = point[1];

  fill(r, g, b);
  circle((x * width) / maxx, (y * height) / maxy, 10);
  // textSize(16);
  // text(x + ", " + y, (x * width) / maxx + 5, (y * height) / maxy - 5);
}

function showData() {
  background(0);
  stroke('blue');
  strokeWeight(1);

  // line guides
  // for (var x = 0; x < width; x += width / scalex) {
  //   for (var y = 0; y < height; y += height / scaley) {
  //     stroke(125, 125, 125);
  //     strokeWeight(0.2);
  //     line(x, 0, x, height);
  //     line(0, y, width, y);
  //   }
  // }

  for (let i = 0; i < data.length; i++) {
    x = data[i][0];
    y = data[i][1];
    fill(255, 255, 255, 200);
    circle(x * width / maxx, y * height / maxy, 10);
    // textSize(12);
    // text(
    //   x + ", " + y,
    //   (x * width) / maxx + 5,
    //   (y * height) / maxy - 5
    // );

  }

}

function drawtmp() {

  background(0);

  showData();

  noFill();
  stroke(0, 255, 0);
  strokeWeight(4);
  rectMode(CENTER);
  let range = new Rectangle([200, 200], [100, 100]);
  rect(range.center[0], range.center[1], range.scope[0] * 2, range.scope[1] * 2);

  points = [];
  points = range_query_rect(root, range, points);
  console.log(points.length);
  for (let p of points) {
    strokeWeight(2);
    drawPoint(p)
  }
}
