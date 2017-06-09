'use strict';

const
	gulp = require('gulp'),
	babelify = require('babelify'),
	uglify = require('gulp-uglify'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify'),
	path = require('path'),
	fl = path.resolve("./parse.js"),
	minfy = function minfy() {
		return browserify()
		.transform(babelify, {
			global: true,
			presets: ['es2015', 'react'],
			only: "*.js",
			ignore: "*.bundle.js",
			/**
			plugins:[
			['strictMode', { strict: false }]
			]
			*/
		})
		.bundle()
		.pipe(source(fl))
		//.pipe(uglify())
		.pipe(gulp.dest('./bundle'));
	};

gulp.task('bundle', function bundle() {
	return minfy();
});


gulp.task('default', ['bundle']);

