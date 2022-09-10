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
  for (var i = 0; i < points.length; i++) {
    var temp = distanceSquared(points[i], point);
    if (menorDistancia > temp) {
      menorDistancia = temp;
      tempPoint = points[i];
    }
  }

  console.log("la menor dinstancia de fuerza bruta es: " + menorDistancia);
  return tempPoint;
}

function naive_closest_point(node, point, depth = 0, best = null) {
  var axis = depth % k;

  if (node == null) {
    return best;
  }

  if (best == null) {
    best = node.point;
  }

  console.log("node.point: " + node.point);

  if (distanceSquared(point, node.point) < distanceSquared(point, best)) {
    best = node.point;
  }

  if (point[axis] <= node.point[axis]) {
    return naive_closest_point(node.left, point, depth + 1, best);
  } else {
    return naive_closest_point(node.right, point, depth + 1, best);
  }
}

function closest_point(node, point, depth = 0, best = null) {
  var axis = depth % k;
  var bestPoint;

  if (node == null) {
    return best;
  }

  if (best == null) {
    best = node.point;
  }

  console.log("node.point: " + node.point);

  if (distanceSquared(point, node.point) < distanceSquared(point, best)) {
    best = node.point;
  }


  if (point[axis] <= node.point[axis]) {
    bestPoint = closest_point(node.left, point, depth + 1, best);
    if (Math.abs(point[axis] - node.point[axis]) < distanceSquared(point, bestPoint)) {
      bestPoint = closest_point(node.right, point, depth + 1, best);
    }
  } else {
    bestPoint = closest_point(node.right, point, depth + 1, best);
    if (Math.abs(point[axis] - node.point[axis]) < distanceSquared(point, bestPoint)) {
      bestPoint = closest_point(node.left, point, depth + 1, best);
    }
  }
  return bestPoint;
}

function closests_points(node, point, depth = 0, best = null) {
  var axis = depth % k;
  var bestPoint;

  if (node == null) {
    return best;
  }

  if (best == null) {
    best = node.point;
  }

  console.log("node.point: " + node.point);

  if (distanceSquared(point, node.point) < distanceSquared(point, best)) {
    best = node.point;
  }


  if (point[axis] <= node.point[axis]) {
    bestPoint = closest_point(node.left, point, depth + 1, best);
    if (Math.abs(point[axis] - node.point[axis]) < distanceSquared(point, bestPoint)) {
      bestPoint = closest_point(node.right, point, depth + 1, best);
    }
  } else {
    bestPoint = closest_point(node.right, point, depth + 1, best);
    if (Math.abs(point[axis] - node.point[axis]) < distanceSquared(point, bestPoint)) {
      bestPoint = closest_point(node.left, point, depth + 1, best);
    }
  }
  return bestPoint;
}

function distanceSquared(point1, point2) {
  var distance = 0;

  for (var i = 0; i < k; i++) {
    distance += Math.pow((point1[i] - point2[i]), 2);
  }
  return Math.sqrt(distance);
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


var queue ;
function findKNN(node,point,KN = null){
 // console.log("node: " + node  + " point: " + point + " KN: " + KN);
    KN = KN || 1;
    console.log("kn: " + KN);
    queue = new BPQ(KN);
    scannedNodes = [];
    console.log(node);
    return KNN(node,point);
}
function KNN(node,point){
    if (node === null) return;
      scannedNodes.push(node);
    // Agregar punto actual a BPQ
    console.log("node: " + node  + " point: " + point );

    queue.add(node, distanceSquared(node.point, point));
    // Busca de forma recursiva la mitad del árbol que contiene el punto de prueba
    if (point[node.axis] < node.point[node.axis]) {//comprobar la izquierda
        KNN(node.left,point);
        var otherNode = node.right;
    }else {// Comprobar la derecha
        KNN(node.right,point);
        var otherNode = node.left;
    }
    //Si la hiperesfera candidata cruza este plano de división, mira el otro lado del plano examinando el otro subárbol
    var delta = Math.abs(node.point[node.axis] - point[node.axis]);
    if (!queue.isFull() || delta < queue.maxPriority()) {
        KNN(otherNode,point);
    }
    return {
        nearestNodes: queue.values,
        scannedNodes: scannedNodes,
        maxDistance: queue.maxPriority()
    };
}
function BPQ(capacity) {
  this.capacity = capacity;
  this.elements = [];
}
BPQ.prototype.isFull = function() { 
  return this.elements.length === this.capacity; 
};
BPQ.prototype.isEmpty = function() { 
  return this.elements.length === 0; 
};
BPQ.prototype.maxPriority = function() {
  return this.elements[this.elements.length - 1].priority;
};
Object.defineProperty(BPQ.prototype, "values", {
  get: function() { return this.elements.map(function(d) { return d.value; }); }
});
BPQ.prototype.add = function(value, priority) {
  var q = this.elements,d = { value: value, priority: priority };
  if (this.isEmpty()) { 
      q.push(d); 
  } else {
      for (var i = 0; i < q.length; i++){
          if (priority < q[i].priority){
              q.splice(i, 0, d);
              break;
          }else if ( (i == q.length-1) && !this.isFull() ) {
              q.push(d);
          }
      }
  }
  this.elements = q.slice(0, this.capacity);
}; 
