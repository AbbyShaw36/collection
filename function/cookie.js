/**
 * cookie 操作
 */
(function(window) {
	"use strict";

	function getCookie(key) {
		var cookies = document.cookie ? document.cookie.split("; ") : [],
			res = key ? undefined : {};

		for (var i = 0; i < arr.length; i++) {
			var tmp = arr[i].split("="),
				cookie_key = decodeURIComponent(tmp[0]),
				cookie_value = decodeURIComponent(tmp[1]);

			if (key && cookie_key === key.toString()) {
				res = cookie_value;
				break;
			}

			res[cookie_key] = cookie_value;
		}

		return res;
	}

	function setCookie(key, value, options) {
		if (typeof options.expires === 'number') {
			var days = options.expires, t = options.expires = new Date();
			t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
		}

		return (document.cookie = [
				encodeURIComponent(key), '=', encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
	}

	function removeCookie(key, value) {
		setCookie(key, value, { expires: -1 });
		return getCookie(key);
	}

	window.Cookie = {
		get: getCookie,
		set: setCookie,
		remove: removeCookie
	};
})(window);