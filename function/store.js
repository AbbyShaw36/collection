/**
 * 本地存储
 * 选择使用 localStorage 或者 sessionStorage，否则使用 cookie
 * 依赖：cookie.js
 */
(function(window) {
	function Store(storageType) {
		this.storageType = storageType;
	}

	Store.prototype.setItem = function(key, value) {
		var storageType = this.storageType;
		window[storageType] ? window[storageType].setItem(key, value) : Cookie.set(key, value);
	};

	Store.prototype.getItem = function(key) {
		var storageType = this.storageType;
		window[storageType] ? window[storageType].getItem(key) : Cookie.get(key);
	};

	Store.prototype.removeItem = function(key) {
		var storageType = this.storageType;
		window[storageType] ? window[storageType].removeItem(key) : Cookie.remove(key);
	};

	window.Store = Store;
})(window);