(function(window) {
	"usr strict";

	function get(elem) {
		return elem.classList || elem.className.split(" ");
	}

	function add(elem, className) {
		if (elem.classList) {
			elem.classList.add(className);
		} else {
			var arr = elem.className.split(" ");
			arr.push(className);
			elem.className = arr.join(" ");
		}

		return get(elem);
	}

	function remove(elem, className) {
		if (elem.classList) {
			elem.classList.remove(className);
		} else {
			elem.className = elem.className.replace(new RegExp("(\\s)?" + className + "(\\s)?","g"), " ");
		}

		return get(elem);
	}

	window.DomClass = {
		get: get,
		add: function(elem, className) {
			var res;

			className = className.split(" ");

			for (var i = 0; i < className.length; i++) {
				res = add(elem, className[i]);
			}

			return res;
		},
		remove: remove
	};
})(window);