var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree = _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let node = Tree();
  node['value'] = value;

  this.children.push(node);
};

treeMethods.contains = function(target) {
  var isPresent = false;
  var traverse = function(node) {
    if (node.value === target) {
      isPresent = true;
    }
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  };
  traverse(this);
  return isPresent;
};



/*
 * Complexity: What is the time complexity of the above functions?
Tree O(n) because of _.extend
addChild O(n) because of let node = Tree() which uses _.extend
contains O(n^2) because of for loop and recursion
 */
