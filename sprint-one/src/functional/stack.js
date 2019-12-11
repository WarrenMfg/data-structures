var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
    return someInstance.size();
  };

  someInstance.pop = function() {
    count >= 1 ? count-- : count = 0;
    var value = storage.hasOwnProperty(count) ? storage[count] : 0;
    delete storage[count];
    return value;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
