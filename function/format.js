/**
 * 文本格式化
 * @param  {string} text     原文本
 * @param  {string} template 格式
 * @return {string}          结果文本
 */
function formatStr(text, template) {
	if (text === void 0 || template === void 0 || text.length === 0 || template.length === 0) {
		return "";
	}

	text = text.split("");
	template = template.split("");

	var result = [], value1, value2;

	while(text.length > 0 && template.length > 0) {
		value2 = template.shift();

		if (value2 !== "x") {
			result.push(value2);
			continue;
		}

		result.push(text.shift());	
	}

	return result.join("");
}

/**
 * 数字格式化
 * @param  {number} number 原数字
 * @param  {number} digit  小数位数
 * @return {number}        结果数值
 */
function formatNum(number, digit) {
	number = number.toString();
	number = number.split(".");
	number.splice(1,0,".");
	number = number.join("");

	return Number(number).toFixed(digit);
}

/**
 * 最大值限制
 * @param  {number} number 原数值
 * @param  {number} max    最大值
 * @return {number}        结果值
 */
function numberMax(number, max) {
	return Math.min(number, max);
}

/**
 * 最小值限制
 * @param  {number} number 原数值
 * @param  {number} min    最小值
 * @return {number}        结果值
 */
function numberMin(number, min) {
	return Math.max(number, min);
}

/**
 * 价格格式化
 * @param  {string} price 原值
 * @return {string}       结果值
 */
function formatPrice(price) {
	var priceArr, integer, decimal, result;

	priceArr = price.split(".");  // 根据小数点分割成数组
	integer = priceArr[0].replace(/\D/g, "");  // 获取整数部分，去掉非数字字符
	decimal = priceArr.length > 1 ? priceArr[1].replace(/\D/g, "") : "";  // 获取小数部分，去掉非数字字符
	integer = integer.split("");
	result = [];

	// 整数部分，每三个字符为一组，根据是否为最后一组来决定是否加逗号字符
	while(integer.length) {
		result.unshift(integer.splice(-3, 3).join(""));

		if (integer.length) {
			result.unshift(",");
		}
	}

	// 小数部分，长度限制在2位，根据长度来决定是否加入到结果中
	if (decimal.length > 2) {
		decimal = decimal.slice(0,2);
	}

	if (decimal !== "") {
		decimal = "." + decimal;
	}

	return result.join("") + decimal;
}