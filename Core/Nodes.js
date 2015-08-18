var Base = require('./Base.js');

var BNode = function(value, neighbors) {
	this.type = "BinaryTreeNode";
	this.value = value;
	this.neighbors = neighbors;
}

BNode.prototype = Base.prototype;

BNode.prototype.Value = function(value) {
	if (typeof(value) === 'undefined') {
		return this.value;
	}

	this.value = value;
}

BNode.prototype.Neighbors = function(value) {
	if (typeof(value) === 'undefined') {
		return this.neighbors;
	}

	this.neighbors = value;
}

BNode.prototype.Populate = function(value) {
	if (this.Value() === null || typeof(this.Value()) === 'undefined') {
		return this.Value(value);
	} else if (value < this.Value()) {
		return this.Left().Populate(value);
	} else {
		return this.Right().Populate(value);
	}
}

module.exports = BNode;