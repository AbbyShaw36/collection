(function(window, $) {
	"use strict";

	$(function() {
		loadPagination();
	});

	function loadPagination() {
		var $items = $(".js_pagination_item");

		var newPagination = new PaginationCtrl({
			$items: $items,
			$prev: $(".pagination_prev"),
			$next: $(".pagination_next"),
			$first: $(".pagination_first"),
			$last: $(".pagination_last"),
			total: 10,
			current: 1,
			callback: function(current, total) {
				var itemList = this.getShowItemList();

				console.log(current, total, itemList);
				loadItems(current, itemList);
				loadInfo(current, total);
			}
		});

		function loadItems(current, itemList) {
			var index = 0;

			for (var i = itemList.first; i <= itemList.last; i++) {
				var $item = $items.eq(index++);

				$item.data("value", i).find("a").html(i);

				if (i === current) {
					$item.addClass("active");
				} else {
					$item.removeClass("active");
				}
			}
		}

		function loadInfo(current, total) {
			$(".pagination_current").html(current);
			$(".pagination_total").html(total);
		}
	}
})(window, jQuery);