

// Instantiate a new graph
var Graph = function() {
  this.matrix = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //if it already exists
  if (!this.matrix[node]) {
    // make it an array
    this.matrix[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //call this.matrix.hasOwnProperty on node
  if (this.matrix.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // edge case if node does not exist
  if (!this.contains(node)) {
    return;
  }

  if (this.contains(node)) {
    //iterate over each array to delete pointers back to node that we just deleted
    delete this.matrix[node];
    for (var key in this.matrix) {
      var index = this.matrix[key].indexOf(node);
      if (index > -1) {
        this.matrix[key].splice(index, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //in the 'from' node array, check if it contain the 'to' node
  //in the 'to' node array, check if it contain the 'from' node
  return this.matrix[fromNode].includes(toNode) && this.matrix[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //do not add edges if only one node exists
  if (!this.matrix.hasOwnProperty(fromNode) && !this.matrix.hasOwnProperty(toNode)) {
    return;
  }
  //assign toNodes to fromNode
  this.matrix[fromNode].push(toNode);
  //assign fromNode to toNodes
  this.matrix[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if edges exist
  if (this.hasEdge(fromNode, toNode)) {
    var indexOfToNode = this.matrix[fromNode].indexOf(toNode);
    var indexOfFromNode = this.matrix[toNode].indexOf(fromNode);
    // splice it the index of fromNode
    this.matrix[fromNode].splice(indexOfToNode, 1);
    // splice it the index of toNode
    this.matrix[toNode].splice(indexOfFromNode, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.matrix) {
    // when we call addEdge
    // we do a lookup on
    cb(JSON.parse(node));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode: O(1)
  contains: O(1)
  removeNode: O(n^2)
  hasEdge: O(n)
  addEdge: O(1)
  removeEdge: O(n)
  forEachNode: O(n)

 */

