var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let oldTail = list.tail;
    let newNode = Node(value);
    list.tail = newNode;

    if (list.head === null) {
      list.head = newNode;
    } else {
      oldTail.next = newNode;
    }

  };

  list.removeHead = function() {
    var currentHead = list.head;
    var nextHead = list.head.next;
    list.head = nextHead;
    return currentHead.value;
  };

  list.contains = function(target) {
    // currentNode = head
    var currentNode = list.head;
    // while currentNode.next !== null
    while (currentNode.next !== null) {
      // if current.value === target
      if (currentNode.value === target) {
        //return true
        return true;
      } else {
        // current = currentNode.next
        currentNode = currentNode.next;
      }
    }

    if (list.tail.value === target) {
      return true;
    } else {
      return false;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail: Big O of 1
removeHead: Big O of 1
contiains: Big O of n
 */
