var BinaryTree = require('./BinaryTree.js');
var RedBlackNode = require('../Core/RedBlackNode.js');

var RedBlackTree = function(data) {
	this.type = "RedBlackTree";
	this.root = new RedBlackNode(this, false);
	if (data != undefined) {
		data.forEach(function(item) {
			this.root.Populate(item, this.root.IsRed());
		}.bind(this));
	}
}

RedBlackTree.prototype = new BinaryTree();

RedBlackTree.prototype.Add = function(data) {
	if(this.root.Populate(data, this.root.IsRed())) {
		// There are 2 reds next to each other
		// Need to Rotate the last added value
		var last = this.Find(data);
		var parent = last.Parent();
		last.Parent().Value(last.Value());
		last.Parent().ClearChildren();
		last.Parent().ChangeColor();
		this.RePopulate(parent);

	};

	this.Rebalance();
}

RedBlackTree.prototype.NodeCount = function() {
	return this.Root().Children() + 1;
}

RedBlackTree.prototype.Rebalance = function() {
	var difference = Math.abs(this.Root().Children('left') - this.Root().Children('right'));
	if (difference > this.NodeCount() / 2) {
		// Rotate Root
	}
}

RedBlackTree.prototype.RePopulate = function(node) {
	if (node !== null && node !== undefined) {
		this.Add(node.Value());
		this.RePopulate(node.GetLeft());
		this.RePopulate(node.GetRight());
	}
}

module.exports = RedBlackTree;