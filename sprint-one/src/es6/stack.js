class Stack {
  constructor() {
    this.count = 0;
  }

  push(value) {
    this[this.count] = value;
    this.count++;
    return this.count;
  }

  pop() {
    this.count >= 1 ? this.count-- : this.count = 0;
    var value = this.hasOwnProperty(this.count) ? this[this.count] : 0;
    delete this[this.count];
    return value;
  }

  size() {
    return this.count;
  }
}