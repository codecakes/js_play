'use strict';

const
	fs = require('fs'),
	path = require('path'),
	fname = path.resolve("./config.json"),
	fJson = function fJson() {
		return JSON.parse(fs.readFileSync(fname, {encoding: 'utf-8'}));
	};

exports.fJson = fJson;
console.log(fJson());
