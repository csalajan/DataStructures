var BinaryTree = require('./BinaryTree.js');

var RedBlackTree = function() {
	this.type = "RedBlackTree";
	// this.root = new BinaryTreeNode();
	// if (data != undefined) {
	// 	data.forEach(function(item) {
	// 		this.root.Populate(item);
	// 	}.bind(this));
	// }
}

RedBlackTree.prototype = new BinaryTree();

RedBlackTree.prototype.Add = function(element) {
	
}

module.exports = RedBlackTree;