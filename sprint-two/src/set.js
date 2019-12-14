var Set = function() {
  var set = Object.create(setPrototype);
  //change this to object
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
//i/o
//  input: string
//  output: undefined
//contraints:
//  input must be a string
//edge cases
//  can only contain unique values
//common patterns
//  attribute assignment
//plan
//  create a new property in the set storage bject
//    the key should be the argument passed to add
//    the value shoule be true
// elaborate
//   to set's _storage object:
//   assign new key value pair. Key is argument of .add, Pair is true
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
// i/o
//   input: string
//   output: boolean
// constraints:
//   input must be a string
// edge cases
//   item is not a string
// common patterns
//   property lookup
// plan
//   lookup property if it exists return true otherwise return false
// elaborate:
//   see above
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
// i/o
//  input: string
//  output: undefined
// contraints:
//   property with 'item' must exist to run
// edge cases
//   property does not exist
//  common patterns:
//  property deletion
// plan
//  if a property with a key equal to item argument exists,
//     delete it
// elaborate
//   see above
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
