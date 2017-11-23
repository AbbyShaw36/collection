(function(window) {
	"use strict";

	function Ctrl(options) {
		this.$items = options.$items;
		this.$prev = options.$prev;
		this.$next = options.$next;
		this.$first = options.$first;
		this.$last = options.$last;
		this.$gotoInput = options.$gotoInput;
		this.$gotoBtn = options.$gotoBtn;

		this.module = new PaginationModule({
			current: options.current,
			total: options.total,
			callback: options.callback,
			showItemNum: options.showItemNum
		});

		this.init();
	}

	Ctrl.prototype.init = function() {
		this.addListener();
	};

	Ctrl.prototype.addListener = function() {
		var _ = this;

		_.$items && _.$items.on("click", function() {
			_.module.goto($(this).data("value"));
		});

		_.$prev && _.$prev.on("click", function() {
			_.module.prev();
		});

		_.$next && _.$next.on("click", function() {
			_.module.next();
		});

		_.$first && _.$first.on("click", function() {
			_.module.first();
		});

		_.$last && _.$last.on("click", function() {
			_.module.last();
		});

		_.$gotoBtn && _.$gotoInput && _.$gotoBtn.on("click", function() {
			_.module.goto(_.$gotoInput.val());
		});
	};

	Ctrl.prototype.getShowItemList = function() {
		return this.module.getShowItemList();
	};

	window.PaginationCtrl = Ctrl;
})(window);