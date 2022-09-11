k = 2;
let output = "";



class BPQ {
  constructor(capacity) {
    this.capacity = capacity;
    this.elements = [];
  }
  isFull() {
    return this.elements.length === this.capacity;
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  maxPriority() {
    return this.elements[this.elements.length - 1].priority;
  }

  // values() {
  //   return this.elements.map(function (d) { return d.value; });
  // }

  enqueue(value, priority) {
    var queue = this.elements, element = { value: value, priority: priority };
    if (this.isEmpty()) { queue.push(element); }
    else {
      for (var i = 0; i < queue.length; i++) {
        if (priority < queue[i].priority) {
          queue.splice(i, 0, element);
          break;
        } else if ((i == queue.length - 1) && !this.isFull()) {
          queue.push(element);
        }
      }
    }
    // this.elements = queue.slice(0, this.capacity);
    this.elements = queue.slice(0, this.capacity);
  }
}

Object.defineProperty(BPQ.prototype, "values", {
  get: function () { return this.elements.map(function (d) { return d.value; }); }
});


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

  console.log("node.point: " + node.point + ", best: " + best + ", bestD: " + distanceSquared(point, best));

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

  console.log("node.point: " + node.point + ", best: " + best + ", bestD: " + distanceSquared(point, best));

  if (distanceSquared(point, node.point) < distanceSquared(point, best)) {
    best = node.point;
  }


  if (point[axis] <= node.point[axis]) {
    best = closest_point(node.left, point, depth + 1, best);
    if (Math.abs(point[axis] - node.point[axis]) < distanceSquared(point, best)) {
      best = closest_point(node.right, point, depth + 1, best);
    }
  } else {
    best = closest_point(node.right, point, depth + 1, best);
    if (Math.abs(point[axis] - node.point[axis]) < distanceSquared(point, best)) {
      best = closest_point(node.left, point, depth + 1, best);
    }
  }

  return best;
}

let nearest;
function knn_points(node, point, k) {
  nearest = new BPQ(k);

  return closests_points(node, point);
}

function closests_points(node, point, depth = 0) {
  var axis = depth % k;

  if (node == null) {
    return;
  }

  nearest.enqueue(node, distanceSquared(point, node.point));

  if (point[axis] <= node.point[axis]) {
    closests_points(node.left, point, depth + 1);
    if (!nearest.isFull() || Math.abs(point[axis] - node.point[axis]) < nearest.maxPriority()) {
      closests_points(node.right, point, depth + 1);
    }
  } else {
    closests_points(node.right, point, depth + 1);
    if (!nearest.isFull() || Math.abs(point[axis] - node.point[axis]) < nearest.maxPriority()) {
      closests_points(node.left, point, depth + 1);
    }
  }

  return { nearestNeighbors: nearest.values };
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
  output = null; 
  inOrder(node);
  output = "digraph G {" + output + "\n}";

  // fs.writeFile("kdtree.dot", output, (err) => {
  //     if (err) throw err;
  // });

  console.log(output);
  // console.log("archivo generado");
}


var queue;
function findKNN(node, point, KN = null) {
  // console.log("node: " + node  + " point: " + point + " KN: " + KN);
  KN = KN || 1;
  console.log("kn: " + KN);
  queue = new BPQ(KN);
  scannedNodes = [];
  console.log(node);
  return KNN(node, point);
}
function KNN(node, point) {
  if (node === null) return;
  scannedNodes.push(node);
  // Agregar punto actual a BPQ
  console.log("node: " + node + " point: " + point);

  queue.enqueue(node, distanceSquared(node.point, point));
  // Busca de forma recursiva la mitad del árbol que contiene el punto de prueba
  if (point[node.axis] < node.point[node.axis]) {//comprobar la izquierda
    KNN(node.left, point);
    var otherNode = node.right;
  } else {// Comprobar la derecha
    KNN(node.right, point);
    var otherNode = node.left;
  }
  //Si la hiperesfera candidata cruza este plano de división, mira el otro lado del plano examinando el otro subárbol
  var delta = Math.abs(node.point[node.axis] - point[node.axis]);
  if (!queue.isFull() || delta < queue.maxPriority()) {
    KNN(otherNode, point);
  }
  return {
    nearestNodes: queue.values,
    scannedNodes: scannedNodes,
    maxDistance: queue.maxPriority()
  };
}