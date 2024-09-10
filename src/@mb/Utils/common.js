// import get from "lodash.get";
// import pickby from "lodash.pickby";
// import round from "lodash.round";
// import startcase from "lodash.startcase";
// import * as lodashIsEmpty from "lodash.isempty";

// const getValue = (...param) => get(...param);

// const pickWhen = (...param) => pickby(...param);

// const toUsPhoneNumber = (number, extension = "") => {
// 	let num = ("" + number).replace(/\D/g, "");
// 	let output;
// 	if (num.length > 10) {
// 		output = number;
// 	} else {
// 		let m = num.match(/^(\d{3})(\d{3})(\d{1,4})$/);
// 		output = !m ? num : "(" + m[1] + ") " + m[2] + "-" + m[3];
// 	}
// 	return extension
// 		? output + ", Ext. " + ("" + extension).replace(/\D/g, "")
// 		: output;
// };

// const toDollar = (number) => {
// 	var negativeSignFlag = false;
// 	if (!number) return "$0.00";
// 	if (number < 0) {
// 		negativeSignFlag = true;
// 	}

// 	return `${negativeSignFlag ? "-" : ""}$${Math.abs(number).format(
// 		2,
// 		3,
// 		",",
// 		"."
// 	)}`;
// };

// const convertPropertyNames = (obj, converterFn) => {
// 	let r,
// 		value,
// 		t = Object.prototype.toString.apply(obj);
// 	if (t == "[object Object]") {
// 		r = {};
// 		for (let propname in obj) {
// 			value = obj[propname];
// 			r[converterFn(propname)] = convertPropertyNames(value, converterFn);
// 		}
// 		return r;
// 	} else if (t == "[object Array]") {
// 		r = [];
// 		for (let i = 0, L = obj.length; i < L; ++i) {
// 			value = obj[i];
// 			r[i] = convertPropertyNames(value, converterFn);
// 		}
// 		return r;
// 	}
// 	return obj;
// };

// const redirectToLogin = () => {
// 	let returnUrl = encodeURIComponent(
// 		window.location.pathname.replace(/[//]+/, "") + window.location.search
// 	);
// 	Utils.redirectTo(
// 		Utils.loginUrl + (returnUrl ? "?returnUrl=" + returnUrl : "")
// 	);
// };

// const redirectTo = (url) => {
// 	window.location.href = process.env.REACT_APP_BASE_URL + url;
// };

// const redirectToReturnUrl = () => {
// 	Utils.redirectTo(
// 		Utils.getUrlParameterByName("returnUrl")
// 			? "/" + Utils.getUrlParameterByName("returnUrl")
// 			: Utils.defaultUrl
// 	);
// };

// const getUrlParameterByName = (name) => {
// 	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
// 	const regexS = `[\\?&]${name}=([^&#]*)`;
// 	const regex = new RegExp(regexS);
// 	const results = regex.exec(window.location.search);
// 	return results === null
// 		? ""
// 		: decodeURIComponent(results[1].replace(/\+/g, " "));
// };

// const isEmpty = (value) => isBlankEmptyOrNull(value);

// const isBlankEmptyOrNull = (obj) => {
// 	if (typeof obj == "number") return false;
// 	return lodashIsEmpty(obj);
// };

// const toInitials = (value) => value.replace(/(\b[a-zA-Z])[a-zA-Z]*. ?/g, "$1");

// const key = (min = 4, max = 139604) =>
// 	`key${Math.floor(Math.random() * (+max - +min)) + +min}`;

// const randomColor = () =>
// 	"#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

// const toQueryString = (obj, encode = true) =>
// 	Object.keys(obj)
// 		.map((k) => encode ? `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}` : `${k}=${obj[k]}`)
// 		.join("&");

// const groupBy = (items, key) =>
// 	items.reduce(
// 		(result, item) => ({
// 			...result,
// 			[item[key]]: [...(result[item[key]] || []), item],
// 		}),
// 		{}
// 	);

// const precise = (x, p) => round(getNumber(x), p);

// const getNumber = (x) => {
// 	try {
// 		x = typeof x === "string" ? x : String(x);
// 	} catch (e) {
// 		x = "";
// 	}
// 	return Number(x.replace(/[^0-9\\./]+/g, ""));
// };

// const getOtherThanNumber = (x) => {
// 	try {
// 		x = typeof x === "string" ? x : String(x);
// 	} catch (e) {
// 		x = "";
// 	}
// 	return new RegExp(/\D+/g).exec(x);
// };

// const noob = () => false;

// const getPercent = (val, total) => precise((val / (total * 1)) * 100, 1);

// const PrettyPrintJson = ({ data }) => {
// 	return (
// 		<div>
// 			<pre>{JSON.stringify(data, null, 2)}</pre>
// 		</div>
// 	);
// };

// const range = (start, stop, step=1) =>
//     Array.from(
//     { length: (stop - start) / step + 1 },
//     (value, index) => start + index * step
//     );

// const Utils = {
// 	noob,
// 	groupBy,
// 	toUsPhoneNumber,
// 	getValue,
// 	pickWhen,
// 	toDollar,
// 	redirectToLogin,
// 	redirectTo,
// 	redirectToReturnUrl,
// 	getUrlParameterByName,
// 	isEmpty,
// 	convertPropertyNames,
// 	toInitials,
// 	key,
// 	randomColor,
// 	toQueryString,
// 	loginUrl: "/signin",
// 	defaultUrl: "/",
// 	precise,
// 	getPercent,
// 	startcase,
// 	getNumber,
// 	getOtherThanNumber,
// 	PrettyPrintJson,
// 	range
// };
// export default Utils;

const utils = {
  isEmpty: (value) => {
    if (typeof obj == "number") return false;
    if (value == null || value === undefined) return true;
    if (typeof value === "string" || Array.isArray(value))
      return value.length === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;
    return false;
  },
};

export default utils;
