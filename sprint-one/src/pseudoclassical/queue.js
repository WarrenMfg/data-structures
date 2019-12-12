var Queue = function() {
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.tail] = value;
  this.tail++;
  return this.size();
};

Queue.prototype.dequeue = function(value) {
  if (this.tail > this.head) {
    var value = this[this.head];
    delete this[this.head];
    this.head++;
    return value;
  } else {
    return 0;
  }
};

Queue.prototype.size = function(value) {
  return this.tail - this.head;
};