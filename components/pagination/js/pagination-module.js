(function(window) {
	"use strict";

	function Module(options) {
		this.current = +options.current || 1;  // 当前页
		this.total = +options.total || 1;  // 总页数
		this.callback = (typeof options.callback === "function") ? options.callback : defaultCallback;
		this.showItemNum = +options.showItemNum || 5;  // 可操作的页按钮个数
	}

	function defaultCallback(current, total) {
		console.log("current page: ", current, ", total pages: ", total);
	}

	Module.prototype.goto = function(index) {
		var total = this.total;

		index = Math.max(Math.min(index, total),1);

		this.current = index;
		this.callback(index, total);
	};

	Module.prototype.next = function() {
		this.goto(this.current + 1);
	};

	Module.prototype.prev = function() {
		this.goto(this.current - 1);
	};

	Module.prototype.first = function() {
		this.goto(1);
	};

	Module.prototype.last = function() {
		this.goto(this.total);
	};

	Module.prototype.getShowItemList = function() {
		var showNum = this.showItemNum,
			current = this.current,
			total = this.total,
			prev = Math.round(showNum/2) - 1,
			next = showNum - prev - 1,
			first, last;
		
		first = Math.max(1, current - prev);

		if (first === 1) {
			next += 1 - (current - prev);
		}

		last = Math.min(total, current + next);

		if (last === total) {
			first = Math.max(1, first - ((current + next) - total));
		}

		return {
			first: first,
			last: last
		};
	};

	window.PaginationModule = Module;
})(window);