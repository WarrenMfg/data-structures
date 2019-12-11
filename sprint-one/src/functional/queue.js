var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
    return someInstance.size();
  };

  someInstance.dequeue = function() {
    if (tail > head) {
      var value = storage[head];
      delete storage[head];
      head++;
      return value;
    } else {
      return 0;
    }
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
