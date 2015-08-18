var Stack = function() {
	this.dataStore = [];
	this.top = 0;
}

Stack.prototype.Push = function(element) {
	this.dataStore[this.top++] = element;
}

Stack.prototype.Pop = function() {
	return this.dataStore[--this.top];
}

Stack.prototype.Peek = function() {
	return this.dataStore[this.top - 1];
}

Stack.prototype.Length = function() {
	return this.top;
}

Stack.prototype.Clear = function() {
	this.top = 0;
}

module.exports = Stack;