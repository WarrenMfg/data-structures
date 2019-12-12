class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
  }
  enqueue(value) {
    this[this.tail] = value;
    this.tail++;
    return this.size();
  }
  dequeue() {
    if (this.tail > this.head) {
      var value = this[this.head];
      delete this[this.head];
      this.head++;
      return value;
    } else {
      return 0;
    }
  }
  size() {
    return this.tail - this.head;
  }
}

