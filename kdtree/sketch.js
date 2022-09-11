var maxx = 250;
var maxy = 200;
var data = [];
var pointP = [140, 90];
var root;

function setup() {
  var width = 800;
  var height = 600;
  var scalex = 10;
  var scaley = 5;
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

  //   if (mouseIsPressed) {
  //     console.log("paso por aqui");
  //     pointInsert(mouseX, mouseY);
  //   }
  
  var data = [];
  for (let i = 0; i < 12; i++) {
    var x = Math.floor(Math.random() * maxx);
    var y = Math.floor(Math.random() * maxy);
    data.push([x, y]);

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
    var x = Math.floor(mouseX );
    var y = Math.floor(mouseY );
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
  }
  // rect(mouseX, mouseX, 55, 55);
  //drawPoint((mouseX+200, mouseY+200));

function setup2() {
    root =null;
    data = null; 
    var width = 800;
    var height = 600;
    var scalex = 10;
    var scaley = 5;
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
    //-------------------------------------
    // DATOS DE PREGUNTA 5
  
    var data = [
    [40, 70],
    [70, 130],
    [90, 40],
    [110, 100],
    [140, 110],
    [160, 100]
    ];
  
    
    for (let i = 0; i < data.length; i++) {
     drawPoint(data[i]);
    }
      
    if (mouseIsPressed) {
      console.log("paso por aqui");
      pointInsert(mouseX, mouseY);
    }
        
    root = build_kdtree(data);
    generate_dot(root);
  
    pointN = [140, 90];
    drawPoint(pointN, 0, 255, 0);
  }
  function setup3() {
    root =null;
    data = null; 
    var width = 800;
    var height = 600;
    var scalex = 10;
    var scaley = 5;
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
   
    //-------------------------------------
    // DATOS DE PREGUNTA 6
  
      var data = [
          [40, 70],
         [70, 130],
          [90, 40],
          [110, 100],
          [140, 110],
        [160, 100],
        [150, 30]
    ];
  
   
    for (let i = 0; i < data.length; i++) {
     drawPoint(data[i]);
    }
      
    if (mouseIsPressed) {
      console.log("paso por aqui");
      pointInsert(mouseX, mouseY);
    }
        
    root = build_kdtree(data);
    generate_dot(root);
  
    pointN = [140, 90];
    drawPoint(pointN, 0, 255, 0);
  }

function pointInsert(x, y) {
  console.log("mouseX " + x);
  fill(222, 100, 15);
  drawPoint((x, y));
}

function graficar_closest_point_brute_force() {
  var bestFuerzaBruta = closest_point_brute_force(data, pointN);
  console.log(" best FuerzaBruta: " + bestFuerzaBruta);
}

function graficar_closet_Point() {
  var best2 = closest_point(root, pointN);
  console.log("closest point: " + best2);
}

function graficar_naive_cl_pt() {
  var best = naive_closest_point(root, pointN);
  console.log("naive closest point: " + best);
}

function drawPoint(point, r = 255, g = 255, b = 255) {
  var x = point[0];
  var y = point[1];

  fill(r, g, b);
  circle((x * width) / maxx, height - (y * height) / maxy, 10); // 200 -y para q se dibuje apropiadamente
  textSize(16);
  text(x + ", " + y, (x * width) / maxx + 5, height - (y * height) / maxy - 5);
}

function graficarKNN() {
  var cantidadK = document.getElementById("cantidadK").value;
  var knn = findKNN(root, pointP, parseInt(cantidadK)).nearestNodes;

  // El siguiente codigo es para limpiar los datos del grafico, obtenidos del KNN (Puntos azules)
  // var data = [
  //     [40, 70],
  //     [70, 130],
  //     [90, 40],
  //     [110, 100],
  //     [140, 110],
  //     [160, 100],
  //     [150, 30]
  // ];
  // for (let i = 0; i < data.length; i++) {
  //     drawPoint(data[i]);
  //  }
  //  pointN = [140, 90];
  //  drawPoint(pointN, 0, 255, 0);

  //---------------------------------------------------

  for (let i = 0; i < knn.length; i++) {
    fill(0, 0, 255);
    circle(
      (knn[i].point[0] * width) / maxx,
      height - (knn[i].point[1] * height) / maxy,
      10
    ); //200-y para q se dibuje apropiadamente
    console.log(knn[i].point);
  }
}

function limpiarCuadro() {
  var width = 800;
  var height = 600;
  var scalex = 10;
  var scaley = 5;
  createCanvas(width, height);
  root = null;
  background(0);
  fill(255, 255, 255);
  for (var x = 0; x < width; x += width / scalex) {
    for (var y = 0; y < height; y += height / scaley) {
      stroke(125, 125, 125);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}
