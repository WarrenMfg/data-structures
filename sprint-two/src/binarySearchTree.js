var BinarySearchTree = function(value) {
  /*
  i/o:
    input: number
    output: bst object
  constraints:
    value needs to be a number
  edge case:

  */

  class Tree {
    // new creates this object
    constructor() {
      // assign value property to 'this' property, set to null
      this.value = null;
      // the constructor return this object
    }

    insert(value) {
      //  if this.value is null:
      if (this.value === null) {
        this.value = value;
        this.left = null;
        this.right = null;
        return;
      }

      // create a pointer var that points to the this
      var pointer = this;
      // while (true)
      while (true) {
      //   if value less than pointer.value(left branch)
        if (value < pointer.value) {
        //     if left node exists:
          if (pointer.left) {
          //    pointer = pointer.left
            pointer = pointer.left;
          } else { // if left node doesn't exist
          //    pointer.left = this.createNode()
            pointer.left = this.createNode(value);
            break;
          }
        } else { // if value greater than pointer.length (right branch)
        //     if right node exists:
          if (pointer.right) {
          //       pointer = pointer.right
            pointer = pointer.right;
          } else { // otherwise if right node doesn't exist
          //       pointer.right = this.createNode()
            pointer.right = this.createNode(value);
            break;
          }
        }
      }
    }

    contains(value) {
      // edge case:
      // if this.value === value:
      if (this.value === value) {
        return true;
        //   return true;
      }
      // pointer = this
      var pointer = this;
      // while true:
      while (true) {
        //   if value === pointer.value:
        if (value === pointer.value) {
          //     return true;
          return true;
        }

        //   if value < pointer.value:
        if (value < pointer.value) {
          //     if left node exists:
          if (pointer.left) {
            //       pointer = pointer.left
            pointer = pointer.left;
          } else {
            return false;
          }
        } else { // otherwise value < pointer.value:
          //     if right node exists:
          if (pointer.right) {
            //       pointer = pointer.right
            pointer = pointer.right;
          } else { // otherwise:
            return false;
          }
        }
      }
    }

    depthFirstLog(func) {
      // create trail variable
      var trail = [];
      // push this into array
      trail.push(this);
      // create search function

      var search = function(pointer) {
      //   while typeof pointer.value === number:
        while (typeof pointer.value === 'number') {
          //  call func(pointer.value)
          func(pointer.value);
          //  if pointer.left exists:
          if (pointer.left) {
            //    if pointer.right exists
            if (pointer.right) {
              //      push pointer.right into trail
              trail.push(pointer.right);
            }
            //    pointer = pointer.left
            pointer = pointer.left;
          } else if (pointer.right) {
            //    if pointer.left:
            if (pointer.left) {
            //      push pointer.left to trail
              trail.push(pointer.left);
            }
            //      pointer = pointer.right
            pointer = pointer.right;
          } else {
            //    pointer = {value: null}
            pointer = {value: null};
          }
        }
      };

      // while trail length > 0:
      while (trail.length > 0) {
        //   search(trail.pop)
        search(trail.pop());
      }
    }

    createNode(value) {
      // instantiate an object
      var newNode = {};
      // object.value = value
      newNode.value = value;
      // object.left = null
      newNode.left = null;
      // object.right = null
      newNode.right = null;
      // return object
      return newNode;
    }
  }

  let tree = new Tree(); // { value: null }
  tree.insert(value); // { value: 5 }
  return tree;

};


/*
* Complexity: What is the time complexity of the above functions?
  .insert: O(n)
  .contains: O(n)
  .depthFirstLog: O(n)
  .create: O(1)
*/
