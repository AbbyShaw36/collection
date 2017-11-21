function TabAdd(name) {
	this.name = name;
}

TabAdd.prototype = new Tab();
TabAdd.prototype.constructor = TabAdd;

TabAdd.prototype.remove = function(index) {
	this.getItem(index).remove();
	this.getContent(index).remove();
};

TabAdd.prototype.add = function($item, $content) {
	$(".js_tab_itemlist[data-tab=" + this.name + "]").append($item);
	$(".js_tab_body").append($content);
};