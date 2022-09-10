k = 2;
class Node{ 
    constructor(point, axis){
        this.point = point;    // clase punto
        this.left = null;   // hijo izquierdo
        this.right = null;  //hijo derecho
        this.axis = axis; // saber en que ejes estas
    }
}
function getHeight(node) {
    if (node === null){
        return 0;
    }
    // find the height of each subtree
    var lh = getHeight(node.left);
    var rh = getHeight(node.right);
    return 1 + max(lh,rh);
}
function generate_dot(node){
    if (node === null){
        return "";
    }
    var tmp = '';
    if (node.left != null){
        tmp += '"' + node.point.toString() + '"' + ' -> ' + '"' + node.left.point.toString() + '"' + ';\n';
        tmp += generate_dot(node.left);
    }
    if (node.right != null){
        tmp += '"' + node.point.toString() + '"' + ' -> ' + '"' + node.right.point.toString() + '"' + ';\n';
        tmp += generate_dot(node.right);
    }
    //console.log(tmp);
    return tmp;
}
function build_kdtree(points, depth = 0){
    var n = points.length;
    var axis = depth % k;
    if (n <= 0){return null;}
    if (n == 1){return new Node(points[0], axis)}
    var median = Math.floor(points.length / 2);
    // sort by the axis
    points.sort(function(a, b){return a[axis] - b[axis];});
    //console.log(points);
    var left = points.slice(0, median);
    var right = points.slice(median + 1);
    //console.log(right);
    var node = new Node(points[median].slice(0, k), axis);
    node.left = build_kdtree(left, depth + 1);
    node.right = build_kdtree(right, depth + 1);
    return node;
}
function distanceSquared(point1, point2){ 
    var distance = 0;
    for (var i = 0; i < k; i++)
    distance += Math.pow((point1[i] - point2[i]), 2);
    return Math.sqrt(distance); 
}
function distSquared( p0,  p1) {
    var total = 0;
    for (var i = 0; i < k; i++) {
        var diff = Math.abs(p0[i] - p1[i]);
        total += Math.pow(diff, 2);
    }		
    return total; 
}
function closest_point_brute_force(points, point){
    var distance = null;
    var best_distance = null;
    var best_point = null;
    for(let i = 0; i < points.length; i++){
        distance = distanceSquared(points[i], point);
        //console.log(distance);
        if(best_distance === null || distance < best_distance){
            best_distance = distance;
            //best_point = { 'point': points[i], 'distance': distance }
            best_point = points[i];
        }
    }
    return best_point;
}
function naive_closest_point(node, point, depth = 0, best = null){
    //algorithm
    //1. best = min(distance(point, node.point), best)
    //2. chose the branch according to axis per level
    //3. recursevely call by branch chosed
    if (node === null)
        return best;
    var axis = depth % k;
    var next_best = null; //next best point
    var next_branch = null; //next node brach to look for
    if (best === null || (distanceSquared(best, point) > distanceSquared(node.point, point)))
        next_best = node.point;
    else
        next_best   = best;
    if (point[axis] < node.point[axis])
        next_branch = node.left
    else
        next_branch = node.right
    return  naive_closest_point(next_branch, point, depth +1, next_best);
}
scannedNodes = []; 
bestDist = Infinity;
function closest_point(node,point) {
    if (node === null) return;
    //console.log(node);
    //console.log(point);
    scannedNodes.push(node);
    var nodeDist = distanceSquared(node.point, point);
    //console.log(nodeDist);
    //console.log("-------------------");
    if (nodeDist < bestDist) {
        bestDist = nodeDist;
        guess = node;
    }
    // Busca de forma recursiva la mitad del árbol que contiene el objetivo
    var side = point[node.axis] < node.point[node.axis] ? "left" : "right";
    if (side == "left") {
        closest_point(node.left,point);
        var otherNode = node.right
    } else {
        closest_point(node.right,point);
        var otherNode = node.left;
    }  
    // Si la hiperesfera candidata cruza este plano de división, mira el otro lado del plano examinando el otro subárbol
    if (otherNode !== null) {
        var i = node.axis;
        var delta = Math.abs(node.point[i] - point[i]);
        if (delta < bestDist) {
            closest_point(otherNode,point);
        } 
    }
    return { 
        node: guess, 
        distance: bestDist,
        scannedNodes: scannedNodes
    };
} 
function closest(n0,n1,target) {
    //console.log("Entro closest");
    //console.log(n0);
    //console.log(n1);
    if (n0 == null) return n1;
    if (n1 == null) return n0;
    var d1 = distSquared(n0.point, target);
    var d2 = distSquared(n1.point, target);
    if (d1 < d2)
        return n0;
    else
        return n1;
}
var queue ;
function findKNN(node,point,KN){
    KN = KN || 1;
    queue = new BPQ(KN);
    scannedNodes = [];
    console.log(node);
    return KNN(node,point);
}
function KNN(node,point){
    if (node === null) return;
    scannedNodes.push(node);
    // Agregar punto actual a BPQ
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
//Clase de cola de prioridad limitada: se utiliza en la búsqueda KNN
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