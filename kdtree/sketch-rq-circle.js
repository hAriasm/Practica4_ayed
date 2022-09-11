

    var maxx = 250;
    var maxy = 200;
    let width = 800;
    let height = 600;
    let scalex = 10;
    let scaley = 5;
    
    let data = [];
    
    class Circulo {
        constructor(x,y,R){
            this.x = x;
            this.y = y; 
            this.radius = R;
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
    }
    
    
    function drawPoint(point, r = 255, g = 255, b = 255) {
      var x = point[0];
      var y = point[1];
    
      fill(r, g, b);
      circle((x * width) / maxx, height - (y * height) / maxy, 10); // 200 -y para q se dibuje apropiadamente
      textSize(16);
      text(x + ", " + y, (x * width) / maxx + 5, height - (y * height) / maxy - 5);
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
        circle(x * width / maxx, height - y * height / maxy, 10);
      }
    }
    
    function draw() {
    
      background(0);
    
      showData();
    
      noFill();
      stroke(0, 255, 0);
      strokeWeight(4);

      let range = new Circulo(mouseX,mouseY,100)
      circle(range.x, range.y, 100);

       }

    



    

    







