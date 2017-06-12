'use strict';

const
	gulp = require('gulp'),
	babelify = require('babelify'),
	uglify = require('gulp-uglify'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify'),
	glob = require('glob'),
	fl = glob.sync("!(gulpfile).js"),
	minfy = function minfy() {
		return browserify({entries: fl})
		.transform(babelify, {
			global: true,
			presets: ['es2015', 'react'],
			only: "*.js",
			ignore: ["*.bundle.js", "gulpfile.js", "./gulpfile.js"]
		})
		.bundle()
		// .pipe(uglify())
		.pipe(source("app.bundle.js"))
		.pipe(gulp.dest('./bundle'));
	};

gulp.task('bundle', function bundle() {
	minfy();
});


gulp.task('default', ['bundle']);

