var Node = require('./Node.js');

var BinaryTreeNode = function(data) {
	this.type = "BinaryTreeNode";
	this.neighbors = {
		left: null,
		right: null,
	}
	this.Value(data);
}

BinaryTreeNode.prototype = new Node();

BinaryTreeNode.prototype.GetLeft = function() {
	return this.neighbors.left;
}

BinaryTreeNode.prototype.GetRight = function() {
	return this.neighbors.right;
}

BinaryTreeNode.prototype.Left = function() {
	if (this.neighbors.left == null) {
		this.neighbors.left = new BinaryTreeNode();
	}
	return this.neighbors.left;
}

BinaryTreeNode.prototype.Right = function() {
	if (this.neighbors.right == null) {
		this.neighbors.right = new BinaryTreeNode();
	}
	return this.neighbors.right;
}


BinaryTreeNode.prototype.Populate = function(value) {
	if (this.Value() === null || typeof(this.Value()) === 'undefined') {
		return this.Value(value);
	} else if (value < this.Value()) {
		return this.Left().Populate(value);
	} else {
		return this.Right().Populate(value);
	}
}

module.exports = BinaryTreeNode;