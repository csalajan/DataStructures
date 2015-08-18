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