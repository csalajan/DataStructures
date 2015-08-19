var BinaryTree = require('./Structures/BinaryTree.js');
var List = require('./Structures/List.js');
var Stack = require('./Structures/Stack.js');
var LinkedList = require('./Structures/LinkedList.js');
var HashTable = require('./Structures/HashTable.js');
var RedBlackTree = require('./Structures/RedBlackTree.js');

var DataStructures = function() {
	return {
		BST: function(data) {
			return new BinaryTree(data);
		},
		List: function() {
			return new List();
		},
		Stack: function() {
			return new Stack();
		},
		LinkedList: function() {
			return new LinkedList();
		},
		HashTable: function() {
			return new HashTable();
		},
		RedBlackTree: function() {
			return new RedBlackTree();
		}
	}
}

module.exports = DataStructures;