var BinaryTreeNode = require('./BinaryTreeNode.js');

var RedBlackNode = function(data) {
	this.type = "RedBlackNode";
	this.red = true;
	this.neighbors = {
		left: null,
		right: null,
	}
	this.Value(data);
}

RedBlackNode.prototype = new BinaryTreeNode();

RedBlackNode.prototype.Left = function() {
	if (this.neighbors.left == null) {
		this.neighbors.left = new RedBlackNode();
	}
	return this.neighbors.left;
}

RedBlackNode.prototype.Right = function() {
	if (this.neighbors.right == null) {
		this.neighbors.right = new RedBlackNode();
	}
	return this.neighbors.right;
}

RedBlackNode.prototype.Color = function() {
	return (this.red) ? "Red" : "Black";
}

RedBlackNode.prototype.IsRed = function() {
	return this.red;
}

RedBlackNode.prototype.Populate = function(data, isRed) {
	if (this.Value() == null) {
		this.Value(data);
		this.red = !isRed;
	} else if (data < this.Value()) {
		this.Left().Populate(data, this.IsRed());
	} else {
		this.Right().Populate(data, this.IsRed());
	}
}

RedBlackNode.prototype.ChangeColor = function() {
	if (this.red) {
		this.red = false;
	} else {
		this.red = true;
	}
}

module.exports = RedBlackNode;