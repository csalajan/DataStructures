var Base = require('./Base.js');

var Node = function(element) {
	this.type = "Node";
	this.element = element;
	this.next = null;
	this.previous = null;
}

Node.prototype = new Base();

Node.prototype.Value = function(data) {
	if (data == undefined) {
		return this.element;
	}

	this.element = data;
}

module.exports = Node;