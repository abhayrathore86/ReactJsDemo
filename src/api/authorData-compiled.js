'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.a = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = _axios2.default.get('http://localhost:3001/api/data').then(function (res) {
		//console.log(res.data)
		return res.data;
});
exports.a = a;

//# sourceMappingURL=authorData-compiled.js.map