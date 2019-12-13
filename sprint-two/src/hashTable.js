

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // object of methods
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];

  //retrive bucket array; will be undefined or an array
  var bucketArray = this._storage.get(index);

  //check if bucketArray is truthy
  if (bucketArray) {
    // check if key exists
    if (this.retrieve(k)) {
      // if it does then overwrite value
      for (var i = 0; i < bucketArray.length; i++) {
        if (bucketArray[i][0] === k) {
          bucketArray[i][1] = v;
          this._storage.set(index, bucketArray);
          return;
        }
      }
    } else {
      //push onto array
      bucketArray.push(tuple);
      //set
      this._storage.set(index, bucketArray);
    }
  } else {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArray = this._storage.get(index);
  // if bucketArray is undefined
  if (!bucketArray) {
    return undefined;
  } else {
    // find k in the bucketArray (iterate over bucketArray)
    for (var i = 0; i < bucketArray.length; i++) {
      if (bucketArray[i][0] === k) {
        return bucketArray[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArray = this._storage.get(index);
  for (var i = 0; i < bucketArray.length; i++) {
    if (bucketArray[i][0] === k) {
      bucketArray.splice(i, 1);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


