(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Base = function() {
	this.type = "Base Object";
}

Base.prototype.GetType = function() {
	return this.type;
}

module.exports = Base;
},{}],2:[function(require,module,exports){
var Base = require('./Base.js');

var Node = function(element) {
	this.type = "Node";
	this.element = element;
	this.next = null;
	this.previous = null;
}

Node.prototype = Base.prototype;

module.exports = Node;
},{"./Base.js":1}],3:[function(require,module,exports){
var Node = require('./Nodes.js');

var NodeList = function() {
	this['parent'] = new Node(null);
	this['left'] = new Node(null);
	this['right'] = new Node(null);

}

NodeList.prototype = Array.prototype;

module.exports = NodeList;
},{"./Nodes.js":4}],4:[function(require,module,exports){
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
},{"./Base.js":1}],5:[function(require,module,exports){
var BinaryTree = require('./Structures/BinaryTree.js');
var List = require('./Structures/List.js');
var Stack = require('./Structures/Stack.js');
var LinkedList = require('./Structures/LinkedList.js');
var HashTable = require('./Structures/HashTable.js');

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
		}
	}
}

module.exports = DataStructures;
},{"./Structures/BinaryTree.js":6,"./Structures/HashTable.js":7,"./Structures/LinkedList.js":8,"./Structures/List.js":9,"./Structures/Stack.js":10}],6:[function(require,module,exports){
var BNode = require('../Core/Nodes.js');
var NodeList = require('../Core/NodeList.js');
var Base = require('../Core/Base.js');


var BinaryTreeNode = function(data) {
	this.type = "BinaryTreeNode";
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

BinaryTreeNode.prototype.Left = function() {
	if (this.Neighbors() == null) {
		this.Neighbors(new NodeList())
	}

	return this.neighbors['left'];
}

BinaryTreeNode.prototype.Right = function() {
	if (this.Neighbors() == null) {
		this.Neighbors(new NodeList())
	}

	return this.neighbors['right'];
}

var BinaryTree = function(data) {
	this.type = "BinaryTree";
	this.root = new BinaryTreeNode();
	if (data != undefined) {
		data.forEach(function(item) {
			this.root.Populate(item);
		}.bind(this));
	}
}

BinaryTree.prototype = Base.prototype;

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
},{"../Core/Base.js":1,"../Core/NodeList.js":3,"../Core/Nodes.js":4}],7:[function(require,module,exports){
var HashTable = function() {
	this.table = new Array(137);
}

HashTable.prototype.SimpleHash = function(data) {
	var total = 0;
	for (var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}

	return total % this.table.length;
}

HashTable.prototype.BetterHash = function(data) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += H * total + data.charCodeAt(i);
	}

	hash = total % this.table.length;
	if (hash < 0) {
		hash += this.table.length - 1;
	}

	return parseInt(hash);
}

HashTable.prototype.ShowDistro = function() {
	var n = 0;
	for (var i = 0; i < this.table.length; i++) {
		if (this.table[i] != undefined) {
			console.log(i + ": " + this.table[i]);
		}
	}
}

HashTable.prototype.Put = function(data) {
	var pos = this.BetterHash(data);
	this.table[pos] = data;
}

HashTable.prototype.Get = function() {

}

module.exports = HashTable;
},{}],8:[function(require,module,exports){
var Node = require('../Core/Node.js');

var LinkedList = function() {
	this.head = new Node("head");
}

LinkedList.prototype.Find = function(item) {
	var currNode = this.head;
	while (currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

LinkedList.prototype.Insert = function(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.Find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
}

LinkedList.prototype.Display = function() {
	var currNode = this.head;
	while (!(currNode.next == null)) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

LinkedList.prototype.FindPrevious = function(item) {
	var currNode = this.head;
	while (!(currNode.next == null) &&
			(currNode.next.element != item)) {
		currNode = currNode.next;
	}

	return currNode;
}

LinkedList.prototype.Remove = function(item) {
	var currNode = this.Find(item);
	if (!(currNode.next == null)) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

LinkedList.prototype.FindLast = function() {
	var currNode = this.head;
	while (!(currNode.next == null)) {
		currNode == currNode.next;
	}

	return currNode;
}

LinkedList.prototype.Reverse = function() {
	var currNode = this.FindLast();
	while(!(currNode.previous === null)) {
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}

module.exports = LinkedList;
},{"../Core/Node.js":2}],9:[function(require,module,exports){
var Base = require('../Core/Base.js');

var List = function() {
	this.type = 'List';
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
}

List.prototype = new Base();

List.prototype.Add = function(element) {
	this.dataStore[this.listSize++] = element;
}

List.prototype.Find = function(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] === element) {
			return i;
		}
	}
	return -1;
}

List.prototype.Remove = function(element) {
	var foundAt = this.Find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1)
		--this.listSize;
		return true;
	}
	return false;

}

List.prototype.Length = function() {
	return this.listSize;
}

List.prototype.ToString = function() {
	return this.dataStore;
}

List.prototype.Insert = function(element, after) {
	var insertPos = this.Find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

List.prototype.Clear = function() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

List.prototype.Contains = function(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] === element) {
			return true;
		}
	}
	return false;
}

module.exports = List;
},{"../Core/Base.js":1}],10:[function(require,module,exports){
var Stack = function() {
	this.dataStore = [];
	this.top = 0;
}

Stack.prototype.Push = function(element) {
	this.dataStore[this.top++] = element;
}

Stack.prototype.Pop = function() {
	return this.dataStore[--this.top];
}

Stack.prototype.Peek = function() {
	return this.dataStore[this.top - 1];
}

Stack.prototype.Length = function() {
	return this.top;
}

Stack.prototype.Clear = function() {
	this.top = 0;
}

module.exports = Stack;
},{}],11:[function(require,module,exports){
var ds = require('../../DataStructures.js');

(function () {
  'use strict';

  describe('Data Structures', function () {

    describe('Binary Trees', function () {
		var testData = [16, 7, 4, 15, 23, 9, 18, 42, 12, 27];
		var tree;

		beforeEach(function() {
			tree = ds().BST();
			testData.forEach(function(item) {
				tree.Add(item); 
			});
		});

		it('should create a binary tree', function () {
			expect(tree).toEqual(jasmine.any(Object));
			expect(tree.GetType()).toEqual("BinaryTree");
		});

		it('should populate a binary tree', function() {
			expect(tree.Root().Value()).toEqual(16);
			expect(tree.Root().Right().Value()).toEqual(23);
			expect(tree.Root().Left().Value()).toEqual(7);
		});

		it('should find the minimum value', function() {
			expect(tree.GetMin().Value()).toEqual(4);
		});

		it('should find the maximum value', function() {
			expect(tree.GetMax().Value()).toEqual(42);
		});

		it('should clear the binary tree', function() {
			tree.Clear();
			expect(tree.Root().Value()).toEqual(undefined);
			tree.Root(23);
			expect(tree.Root().Value()).toEqual(23);
		});

		it('should display contents of binary tree', function() {
			expect(tree.Scan()).toEqual("16,7,4,15,9,12,23,18,42,27");
		});

		it('should find the correct element', function() {
			expect(tree.Find(18).Value()).toEqual(18);
			expect(tree.Find(99)).toEqual(null);
		});

		it('should repopulate the tree on initialization', function() {
			tree.Clear();
			expect(tree.Root().Value()).toEqual(undefined);
			tree = ds().BST(testData);
			expect(tree.Scan()).toEqual("16,7,4,15,9,12,23,18,42,27");
		});
    });

	describe('Lists', function() {
    	var testData = [23, 7, 14, 33, 27, 1, 18, 24];
    	var list;

    	beforeEach(function() {
    		list = ds().List();
    		testData.forEach(function(item) {
    			list.Add(item);
    		})
    	});

    	it('returns type of List', function() {
    		expect(list).toEqual(jasmine.any(Object));
    		expect(list.GetType()).toEqual('List');
    	});

    	it('returns the correct length', function() {
    		expect(list.Length()).toEqual(8);
    	})

    	it('doesn\'t find a value', function() {
    		expect(list.Find(88)).toEqual(-1);
    	})

    	it('checks list for elements', function() {
    		expect(list.Contains(18)).toEqual(true);
    		expect(list.Contains(88)).toEqual(false);
    	});

    	it('inserts element after another element', function() {
    		list.Insert(99, 7);
    		expect(list.Insert(100, 88)).toEqual(false);
    		expect(list.ToString()).toEqual([ 23, 7, 99, 14, 33, 27, 1, 18, 24 ]);

    	});

    	it('removes element from the list', function() {
    		list.Remove(18);
    		expect(list.Remove(88)).toEqual(false);
    		expect(list.ToString()).toEqual([ 23, 7, 14, 33, 27, 1, 24 ]);

    	});

    	it('clears the list', function() {
    		list.Clear();
    		expect(list.ToString()).toEqual([]);
    	});
    });

    describe('Hash Tables', function() {
    	var testData = [];
    	var hashTable;

    	beforeEach(function() {
    		hashTable = ds().HashTable();
    	});

    });

    describe('Linked Lists', function() {
    	var testData = [];
    	var linkedList;

    	beforeEach(function() {
    		linkedList = ds().LinkedList();
    	});
    });

    describe('Stacks', function() {
    	var testData = [];
    	var stack;

    	beforeEach(function() {
    		stack = ds().Stack();
    	})
    })
  });
})();

},{"../../DataStructures.js":5}]},{},[11]);
