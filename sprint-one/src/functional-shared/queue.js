var Queue = function() {
  var storage = {};
  var head = 0;
  var tail = 0;

  storage = _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {
  'enqueue': function(value) {
    this.storage[this.tail] = value;
    this.tail++;
    return this['size']();
  },
  'dequeue': function() {
    if (this.tail > this.head) {
      var value = this.storage[this.head];
      this.head++;
      delete this.storage[this.head];
      return value;
    } else {
      return 0;
    }
  },
  'size': function() {
    return this.tail - this.head;
  }
};

var myQ = Queue();
console.log(myQ.head, myQ.tail);
/*
var Stack = function() {

  var stack = {
    storage: {},
    count: 0
  };

  stack = _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  'push': function(value) {
    this.storage[this.count] = value;
    this.count++;
    return this.count;
  },
  'pop': function() {
    this.count >= 1 ? this.count-- : this.count = 0;
    var value = this.storage[this.count];
    delete this.storage[this.count];
    return value;
  },
  'size': function() {
    return this.count;
  }
};

var myStack = Stack();
*/