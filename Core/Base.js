var Base = function() {
	this.type = "Base Object";
}

Base.prototype.GetType = function() {
	return this.type;
}

module.exports = Base;