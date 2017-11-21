function Tab(name) {
	this.name = name;
}

Tab.prototype.getItemList = function() {
	return $(".js_tab_item[data-tab=" + this.name + "]");
};

Tab.prototype.getContentList = function() {
	return $(".js_tab_content[data-tab=" + this.name + "]");
};

Tab.prototype.getCurrentItem = function() {
	return this.getItemList().filter(".active");
};

Tab.prototype.getCurrentIndex = function() {
	return this.getCurrentItem().index();
};

Tab.prototype.getCurrentContent = function() {
	return this.getContentList().filter(".active");
};

Tab.prototype.clearCurrent = function() {
	this.getCurrentItem().removeClass("active");
	this.getCurrentContent().removeClass("active");
};

Tab.prototype.goTo = function(index) {
	this.clearCurrent();
	this.getItemList().eq(index).addClass("active");
	this.getContentList().eq(index).addClass("active");
};

Tab.prototype.getItem = function(index) {
	return this.getItemList().eq(index);
};

Tab.prototype.getContent = function(index) {
	return this.getContentList().eq(index);
};