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
        return new Node(points[0], axis)
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