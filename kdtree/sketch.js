function setup() {
    var width = 600;
    var height = 600;
    createCanvas(width, height);

    background(0);
    for (var x = 0; x < width; x += width / 10) {
        for (var y = 0; y < height; y += height / 10) {
            stroke(125, 125, 125);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }

    var data = [];
    data.push([1, 3]);
    data.push([2, 1]);
    data.push([2, 6]);
    data.push([5, 5]);
    data.push([5, 9]);
    data.push([6, 8]);
    data.push([7, 2]);
    data.push([8, 4]);
    data.push([9, 1]);

    for (let i = 0; i < data.length; i++) {
        drawPoint(data[i]);// 200 -y para q se dibuje  ropiadamente
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
    console.log(root);
    generate_dot(root);

    pointN = [5, 5];
    drawPoint(pointN, 255, 0, 0);

    var best = naive_closest_point(root, pointN);
    console.log("best: " + best);
}

function drawPoint(point, r = 255, g = 255, b = 255) {
    var x = point[0];
    var y = point[1];

    fill(r, g, b);
    circle(x * width / 10, height - y * height / 10, 10); // 200 -y para q se dibuje apropiadamente
    textSize(16);
    text(x + ', ' + y, x * width / 10 + 5, height - y * height / 10 - 5);
}