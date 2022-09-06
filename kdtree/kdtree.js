k = 2;
let output = "";

class Node {
  constructor(point, axis) {
    this.point = point;
    this.left = null;
    this.right = null;
    this.axis = axis;
  }
}

function getHeight(node) {
  let height = -1;
  if (node == null) {
    return height;
  } else {
    height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }

  return height;
}

function build_kdtree(points, depth = 0) {
  var n = points.length;
  var axis = depth % k;

  if (n <= 0) {
    return null;
  }
  if (n == 1) {
    return new Node(points[0], axis);
  }

  var median = Math.floor(points.length / 2);

  // sort by the axis
  points.sort(function (a, b) {
    return a[axis] - b[axis];
  });
  //console.log(points);

  var left = points.slice(0, median);
  var right = points.slice(median + 1);

  //console.log(right);

  var node = new Node(points[median].slice(0, k), axis);
  node.left = build_kdtree(left, depth + 1);
  node.right = build_kdtree(right, depth + 1);

  return node;
}

function distanceSquared(point1, point2) {
  var distance = 0;
  for (var i = 0; i < k; i++) distance += Math.pow(point1[i] - point2[i], 2);
  return Math.sqrt(distance);
}

function closest_point_brute_force(points, point) {
var menorDistancia = 99999;
var tempPoint = null;
  for(var i = 0 ; i< points.length ; i++){
    var temp = distance(points[i],point);
    if(menorDistancia > temp) {
      menorDistancia = temp;
      tempPoint = points[i];
    }
    }
  
  console.log("la menor dinstancia es: " + menorDistancia);
  return tempPoint;
}

function naive_closest_point(node, point, depth = 0, best = null, minDistance = -1) {
    var axis = depth % k;

    if (node == null) {
        console.log("retornar el mejor: " + best);
        return best;
    }

    currentDistance = distance(point, node.point);
    console.log("curr distance: " + currentDistance); 
    if(minDistance < 0 || minDistance > currentDistance) {
        minDistance = currentDistance; 
        best = node.point;
    }
    console.log("best: " + best);
    
    if (point[axis] <= node.point[axis]) {
        console.log("[depth = " + depth + "] menor, ir por la izquierda");
        return naive_closest_point(node.left, point, depth + 1, best, minDistance);
    } else {
        console.log("[depth = " + depth + "] mayor, ir por la derecha");
        return naive_closest_point(node.right, point, depth + 1, best, minDistance);
    }
}

function distance(point1, point2) {
    return Math.sqrt(
        Math.pow(point1[1] - point2[1], 2) +
        Math.pow(point1[0] - point2[0], 2)
    );
}

function inOrder(node) {
    if (node != null) {
        if (node.left != null) {
            output += "\n  \"" + node.point[0] + ", " + node.point[1] + "\" -> \"" + node.left.point[0] + ", " + node.left.point[1] + "\";";
            inOrder(node.left);
        }
        if (node.right != null) {
            output += "\n  \"" + node.point[0] + ", " + node.point[1] + "\" -> \"" + node.right.point[0] + ", " + node.right.point[1] + "\";";
            inOrder(node.right);
        }
    }
}


function generate_dot(node) {
    // const fs = require("fs");

    inOrder(node);
    output = "digraph G {" + output + "\n}";

    // fs.writeFile("kdtree.dot", output, (err) => {
    //     if (err) throw err;
    // });

    console.log(output);
    // console.log("archivo generado");
}