var maxx = 250;
var maxy = 200;
var data = [];
var pointP = [140, 90];
var root;
let width = 800;
let height = 600;
let scalex = 10;
let scaley = 5;

class Rectangle {
    constructor(x, y, w, h) {
      this.x = x; // center
      this.y = y;
      this.w = w; // half width
      this.h = h; // half height
    }
}

function setup() {
    root = null;
    data = null;
  
    createCanvas();
    createCanvas(width, height);
  
    background(0);
    for (var x = 0; x < width; x += width / scalex) {
      for (var y = 0; y < height; y += height / scaley) {
        stroke(125, 125, 125);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  
    // var data = [];
    // data.push([1, 3]);
    // data.push([2, 1]);
    // data.push([2, 6]);
    // data.push([5, 5]);
    // data.push([5, 9]);
    // data.push([6, 8]);
    // data.push([7, 2]);
    // data.push([8, 4]);
    // data.push([9, 1]);
  
    //-------------------------------------
    // DATOS DE PREGUNTA 5
  
    // var data = [
    //     [40, 70],
    //     [70, 130],
    //     [90, 40],
    //     [110, 100],
    //     [140, 110],
    //     [160, 100]
    // ];
  
    //-------------------------------------
    // DATOS DE PREGUNTA 6
  
    // var data = [
    //     [40, 70],
    //     [70, 130],
    //     [90, 40],
    //     [110, 100],
    //     [140, 110],
    //     [160, 100],
    //     [150, 30]
    // ];
  
    // data.push([1, 3]);
    // data.push([2, 1]);
    // data.push([2, 6]);
    // data.push([5, 5]);
    // data.push([5, 9]);
    // data.push([6, 8]);
    // data.push([7, 2]);
    // data.push([8, 4]);
    // data.push([9, 1]);
  
    // data.push([40, 70]);
    // data.push([70, 130]);
    // data.push([90, 40]);
    // data.push([100, 100]);
    // data.push([140, 110]);
    // data.push([150, 30]);
    // data.push([175, 100]);
  
    // for (let i = 0; i < data.length; i++) {
    //     drawPoint(data[i]);
    // }
  
    //   if (mouseIsPressed) {
    //     console.log("paso por aqui");
    //     pointInsert(mouseX, mouseY);
    //   }
  
    data = [];
    for (let i = 0; i < 12; i++) {
      var x = Math.floor(Math.random() * maxx);
      var y = Math.floor(Math.random() * maxy);
      data.push([x, y]);
  
      //------------------------------------------------------------------------------
      // 12 DATOS ALEATORIOS
  
      // var data = [] ;
      // for (let i = 0; i < 12; i++) {
      // var x = Math.floor(Math.random() * maxx);
      // var y = Math.floor(Math.random() * maxy);
      // data.push([x, y]);
  
      fill(255, 255, 255);
      circle((x * width) / maxx, height - (y * height) / maxy, 10); // 200 -y para q se dibuje apropiadamente
      textSize(16);
      text(
        x + ", " + y,
        (x * width) / maxx + 5,
        height - (y * height) / maxy - 5
      );
    }
    //-----------------------------------------------------------------------------
    if (mouseIsPressed) {
      var x = Math.floor(mouseX);
      var y = Math.floor(mouseY);
      data.push([x, y]);
  
      fill(0, 0, 255);
      circle((x * width) / maxx, height - (y * height) / maxy, 10); // 200 -y para q se dibuje apropiadamente
      textSize(16);
      text(
        x + ", " + y,
        (x * width) / maxx + 5,
        height - (y * height) / maxy - 5
      );
    }
    console.log("data" + data);
    root = build_kdtree(data);
    generate_dot(root);
  
    // pointN = [Math.floor(Math.random() * maxx), Math.floor(Math.random() * maxy)];
    pointN = [140, 90];
    drawPoint(pointN, 0, 255, 0);
    // drawPoint((mouseX+200, mouseY+200),255,0,0)
  
    // unitTest();}
  }
  
  


  function draw() {
    
    stroke(0, 255, 0);
    strokeWeight(4);
    rectMode(CENTER);
    let range = new Rectangle(mouseX, mouseY, 100, 100);
    rect(range.x, range.y, range.w * 2, range.h * 2);
   
     
  }
  