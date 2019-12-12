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
    var value = this.storage.hasOwnProperty(this.count) ? this.storage[this.count] : 0;
    delete this.storage[this.count];
    return value;
  },
  'size': function() {
    return this.count;
  }
};

var myStack = Stack();