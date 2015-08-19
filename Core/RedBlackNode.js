var BinaryTreeNode = require('./BinaryTreeNode.js');

var RedBlackNode = function(parent, isRed) {
	this.type = "RedBlackNode";
	this.red = (isRed === undefined) ? true : isRed;
	this.children = {
		left: 0,
		right: 0
	};
	this.neighbors = {
		left: null,
		right: null,
		parent: parent
	}
}

RedBlackNode.prototype = new BinaryTreeNode();

RedBlackNode.prototype.Left = function() {
	if (this.neighbors.left == null) {
		this.neighbors.left = new RedBlackNode(this);
	}
	return this.neighbors.left;
}

RedBlackNode.prototype.Right = function() {
	if (this.neighbors.right == null) {
		this.neighbors.right = new RedBlackNode(this);
	}
	return this.neighbors.right;
}

RedBlackNode.prototype.Parent = function() {
	return this.neighbors.parent;
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
		return (isRed && this.IsRed());
	} else if (data < this.Value()) {
		this.children.left++
		return this.Left().Populate(data, this.IsRed());
	} else {
		this.children.right++
		return this.Right().Populate(data, this.IsRed());
	}
}

RedBlackNode.prototype.ChangeColor = function() {
	if (this.red) {
		this.red = false;
	} else {
		this.red = true;
	}
}

RedBlackNode.prototype.Children = function(side) {
	switch(side) {
		case "left":
			return this.children.left;
		case "right":
			return this.children.right;
		default:
			return this.children.left + this.children.right;
	}
}

RedBlackNode.prototype.ClearChildren = function() {
	this.neighbors.left = null;
	this.neighbors.right = null;
}

module.exports = RedBlackNode;