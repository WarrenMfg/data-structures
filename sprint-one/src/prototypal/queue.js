var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.head = 0;
  obj.tail = 0;
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.tail] = value;
    this.tail++;
    return this.size();
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

