var BinaryTreeNode = require('../Core/BinaryTreeNode.js');
var Base = require('../Core/Base.js');

var BinaryTree = function(data) {
	this.type = "BinaryTree";
	this.root = new BinaryTreeNode();
	if (data != undefined) {
		data.forEach(function(item) {
			this.root.Populate(item);
		}.bind(this));
	}
}

BinaryTree.prototype = new Base();

BinaryTree.prototype.Clear = function() {
	this.root = new BinaryTreeNode();
}

BinaryTree.prototype.Root = function(value) {
	if (typeof(value) === 'undefined') {
		return this.root;
	}

	this.root.Value(value);
}

BinaryTree.prototype.Scan = function() {
	return this.PreorderTraversal(this.root);
}

BinaryTree.prototype.PreorderTraversal = function(current) {
	var tree = [];
	if (current !== null && typeof(current) !== 'undefined' && current.Value() !== null && typeof(current.Value()) !== 'undefined') {
		tree.push(current.Value());

		tree.push(this.PreorderTraversal(current.GetLeft()));
		tree.push(this.PreorderTraversal(current.GetRight()));
		return tree.filter(function(n) { return n != null }).toString();
	}
	
}

BinaryTree.prototype.Find = function(value) {
	return this.Search(this.Root(), value);
}

BinaryTree.prototype.Search = function(current, value) {
	if (current !== null && typeof(current) !== 'undefined' && current.Value() !== null && typeof(current.Value()) !== 'undefined') {
		if (current.Value() === value) {
			return current
		}

		return (value < current.Value()) ? this.Search(current.GetLeft(), value) : this.Search(current.GetRight(), value);
	}
	return null;
}

BinaryTree.prototype.Add = function(item) {
	this.root.Populate(item);
}

BinaryTree.prototype.GetMin = function() {
	var current = this.Root();
	while (!(current.GetLeft() == undefined || current.GetLeft().Value() == null)){
		current = current.GetLeft();
	}

	return current;
}

BinaryTree.prototype.GetMax = function() {
	var current = this.Root();
	while (!(current.GetRight() == undefined || current.GetRight().Value() == null)){
		current = current.GetRight();
	}

	return current;
}

module.exports = BinaryTree;