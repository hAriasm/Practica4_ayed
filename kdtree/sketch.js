
var maxx = 250;
var maxy = 200;

function setup() {
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
    // var data = [
    //     [40, 70],
    //     [70, 130],
    //     [90, 40],
    //     [110, 100],
    //     [140, 110],
    //     [160, 100]
    // ];
    
    var data = [
        [40, 70],
        [70, 130],
        [90, 40],
        [110, 100],
        [140, 110],
        [160, 100],
        [150, 30]
    ];

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

    for (let i = 0; i < data.length; i++) {
        drawPoint(data[i]);
    }

    // for (let i = 0; i < 12; i++) {
    // var x = Math.floor(Math.random() * height);
    // var y = Math.floor(Math.random() * height);
    // data.push([x, y]);

    //     fill(255, 255, 255);
    //     circle(x, height - y, 7); // 200 -y para q se dibuje apropiadamente
    //     textSize(8);
    //     text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje  ropiadamente
    // }

    var root = build_kdtree(data);
    generate_dot(root);

    // pointN = [Math.floor(Math.random() * maxx), Math.floor(Math.random() * maxy)];
    pointN = [140, 90];
    drawPoint(pointN, 0, 255, 0);

    var best = naive_closest_point(root, pointN);
    console.log("naive closest point: " + best);

    var best2 = closest_point(root, pointN);
    console.log("closest point: " + best2);

    var bestFuerzaBruta = closest_point_brute_force(data, pointN);
    console.log(" best FuerzaBruta: " + bestFuerzaBruta);

    drawRect(mouseX, mouseY);

}

function drawPoint(point, r = 255, g = 255, b = 255) {
    var x = point[0];
    var y = point[1];

    fill(r, g, b);
    circle(x * width / maxx, height - y * height / maxy, 10); // 200 -y para q se dibuje apropiadamente
    textSize(16);
    text(x + ', ' + y, x * width / maxx + 5, height - y * height / maxy - 5);
 

}

function drawRect(a,b){
    stroke ( 255 ) ;
    rectMode ( CENTER );
    let range = new Rectangle ( a ,b ,50 ,50)
    rect (range.x , range.y , range.w *2 , range.h *2) ;    
}