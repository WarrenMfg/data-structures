var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.count = 0;
  return obj;
};

var stackMethods = {
  push: function(value) {
    this[this.count] = value;
    this.count++;
    return this.count;
  },
  pop: function() {
    this.count >= 1 ? this.count-- : this.count = 0;
    var value = this.hasOwnProperty(this.count) ? this[this.count] : 0;
    delete this[this.count];
    return value;
  },
  size: function() {
    return this.count;
  }
};