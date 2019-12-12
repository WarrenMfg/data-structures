var Queue = function() {
  var storage = {};
  storage.head = 0;
  storage.tail = 0;

  storage = _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.tail] = value;
    this.tail++;
    return this['size']();
  },
  dequeue: function() {
    if (this.tail > this.head) {
      var value = this[this.head];
      delete this[this.head];
      this.head++;
      return value;
    } else {
      return 0;
    }
  },
  size: function() {
    return this.tail - this.head;
  }
};

var myQ = Queue();