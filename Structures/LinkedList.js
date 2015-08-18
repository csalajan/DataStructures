var Node = require('../Core/Node.js');
var Base = require('../Core/Base.js');

var LinkedList = function() {
	this.type = "LinkedList";
	this.head = new Node("head");
}

LinkedList.prototype = new Base();

LinkedList.prototype.Find = function(item) {
	var currNode = this.head;
	while (currNode.element != item) {
		currNode = currNode.next;
		if (currNode == undefined) {
			return null;
		}
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