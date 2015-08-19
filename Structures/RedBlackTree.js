var BinaryTree = require('./BinaryTree.js');
var RedBlackNode = require('../Core/RedBlackNode.js');

var RedBlackTree = function(data) {
	this.type = "RedBlackTree";
	this.root = new RedBlackNode();
	if (data != undefined) {
		data.forEach(function(item) {
			this.root.Populate(item, this.root.IsRed());
		}.bind(this));
	}
}

RedBlackTree.prototype = new BinaryTree();

RedBlackTree.prototype.Add = function(data) {
	this.root.Populate(data, this.root.IsRed());
}

module.exports = RedBlackTree;