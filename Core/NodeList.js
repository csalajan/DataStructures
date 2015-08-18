var Node = require('./Nodes.js');

var NodeList = function() {
	this['parent'] = new Node(null);
	this['left'] = new Node(null);
	this['right'] = new Node(null);

}

NodeList.prototype = Array.prototype;

module.exports = NodeList;