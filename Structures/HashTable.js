var Base = require('../Core/Base.js');

var HashTable = function() {
	this.type = "HashTable";
	this.table = new Array(137);
}

HashTable.prototype = new Base();

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