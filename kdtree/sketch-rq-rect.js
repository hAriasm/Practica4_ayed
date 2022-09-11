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


  function draw() {
    
    stroke(0, 255, 0);
    strokeWeight(4);
    rectMode(CENTER);
    let range = new Rectangle(mouseX, mouseY, 100, 100);
    rect(range.x, range.y, range.w * 2, range.h * 2);
   
     
  }
  