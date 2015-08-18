var BNode = require('../Core/Nodes.js');
var NodeList = require('../Core/NodeList.js');


var BinaryTreeNode = function(data) {
	this.Value(data);
	var children = new NodeList();
	children['left'] = new BNode(null, new NodeList(2));
	children['right'] = new BNode(null, new NodeList(2));

	this.neighbors = children;
}

BinaryTreeNode.prototype = BNode.prototype;

BinaryTreeNode.prototype.GetLeft = function() {
	if (this.Neighbors() === null || typeof(this.Neighbors()) === 'undefined') {
		return null;
	}

	return this.neighbors['left'];
}

BinaryTreeNode.prototype.GetRight = function() {
	if (this.Neighbors() === null || typeof(this.Neighbors()) === 'undefined') {
		return null;
	}

	return this.neighbors['right'];
}

BinaryTreeNode.prototype.Left = function(value) {
	if (this.Neighbors() == null) {
		this.Neighbors(new NodeList())
	}
	if (typeof(value) === 'undefined') {
		return this.neighbors['left'];
	}
		
	this.neighbors['left'] = new BNode(value);
	
}

BinaryTreeNode.prototype.Right = function(value) {
	if (this.Neighbors() == null) {
		this.Neighbors(new NodeList())
	}

	if (typeof(value) === 'undefined') {
		return this.neighbors['right'];
	}

	this.neighbors['right'] = new BNode(value);
}

var BinaryTree = function(data) {
	this.root = new BinaryTreeNode();
	if (data != undefined) {
		data.forEach(function(item) {
			this.root.Populate(item);
		}.bind(this));
	}
}

BinaryTree.prototype.Clear = function() {
	this.root = new BinaryTreeNode();
}

BinaryTree.prototype.Root = function(value) {
	if (typeof(value) === 'undefined') {
		return this.root;
	}

	this.root = value;
}

BinaryTree.prototype.Scan = function() {
	return this.PreorderTraversal(this.root);
}

BinaryTree.prototype.PreorderTraversal = function(current) {
	if (current !== null && typeof(current) !== 'undefined' && current.Value() !== null && typeof(current.Value()) !== 'undefined') {
		console.log(current.Value());

		this.PreorderTraversal(current.GetLeft());
		this.PreorderTraversal(current.GetRight());
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