'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;
//import path from 'path';

var app = (0, _express2.default)();

app.get('/', function (request, response) {
	response.sendFile('index.html');
});

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		(0, _open2.default)('http://localhost:' + port);
	}
});