/*
	表单验证
 */

(function(window) {
	"use strict";

	// 正则表达式列表
	var regList = {
		email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		cn: /^[\u4e00-\u9fa5]*$/,
		zip: /^\d{6}$/,
		price: /^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/,
	};

	var _ = {};

	// 去掉首尾空白字符
	function trim(text) {
		return text.toString().replace(/^\s*|\s*$/g, '');
	}

	// 空字段
	function isEmpty(value) {
		return trim(value.toString()) === '';
	}

	// 两字段相等
	function equal(value1, value2) {
		value1 = trim(value1.toString());
		value2 = trim(value2.toString());

		return value1 === value2;
	}

	// 邮箱字段
	function isEmail(value) {
		value = trim(value.toString());
		return regList.email.test(value);
	}

	// 中文字段
	function isChinese(value) {
		value = trim(value.toString());
		return regList.cn.test(value);
	}

	// 中国邮编
	function isZIP(value) {
		value = trim(value.toString());
		return regList.zip.test(value);
	}

	// 数值范围
	function inRange(value, min, max) {
		value = +value;
		min = +min;
		max = +max;

		if (isNaN(value) || isNaN(min) || isNaN(max)) {
			throw new Error("All arguments must be numbers");
		}

		if (min === max) {
			return false;
		}

		min = Math.min(min, max, value);
		max = Math.max(min, max, value);

		return min === value || max === value;
	}

	// 整数
	function isInteger(value) {
		return parseInt(value, 10) === value;
	}

	// 价格
	function isPrice(value) {
		value = trim(value);
		return regList.price.test(value);
	}

	_.trim = trim;
	_.isEmpty = isEmpty;
	_.equal = equal;
	_.isEmail = isEmail;
	_.isChinese = isChinese;
	_.isZIP = isZIP;
	_.inRange = inRange;
	_.isInteger = isInteger;
	_.isPrice = isPrice;

	var ruleMap = {
		required: function(value) {
			return !isEmpty(value);
		},
		email: isEmail,
		cn: isChinese,
		zip: isZIP,
		price: isPrice,
		integer: isInteger,
	};

	function isArray(arr) {
		return toString.call(arr) === '[object Array]';
	}

	function isFunction(fun) {
		return toString.call(fun) === '[object Function]';
	}

	function validate(value, rule) {
		var fun = ruleMap[rule];

		if (!isFunction(fun)) {
			throw new Error('There is currently no way to validate this rule');
		}

		return fun(value);
	}

	/**
	 * 验证字段
	 * @param  {string} value 字段值
	 * @param  {string, array} rule  验证规则
	 * @return {object}       返回验证成功或失败，以及成功或失败的规则
	 */
	_.validate = function(value, rule) {
		if (!isArray(value)) {
			return {
				result: validate(value, rule),
				rule: rule
			};
		}

		for (var i = 0, len = rule.length; i < len; i++) {
			var result = validate(value, rule[i]);

			if (result === false) {
				return {
					result: result,
					rule: rule[i]
				};
			}
		}

		return {
			result: true,
			rule: rule
		};
	};

	/**
	 * 添加或修改规则
	 * @param {string} name 规则名称
	 * @param {function} fun  规则方法
	 */
	_.addRule = function(name, fun) {
		if (!isFunction(fun)) {
			throw new Error('Must provided a function for validation');
		}

		ruleMap[name] = fun;
	};

	window.validator = _;
})(window);