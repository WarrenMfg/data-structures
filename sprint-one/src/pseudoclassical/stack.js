var Stack = function() {
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this[this.count] = value;
  this.count++;
  return this.count;
};

Stack.prototype.pop = function() {
  this.count >= 1 ? this.count-- : this.count = 0;
  var value = this.hasOwnProperty(this.count) ? this[this.count] : 0;
  delete this[this.count];
  return value;
};

Stack.prototype.size = function() {
  return this.count;
};