k = 2;

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
function generate_dot(node) {}

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

function closest_point_brute_force(points, point) {}
function naive_closest_point(node, point, depth = 0, best = null) {}

function closest_point(node, point, depth = 0) {}

function range_query_circle(node, center, radio, queue, depth = 0) {}
