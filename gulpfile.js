var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['browserify', 'jasmine']);

gulp.task('jasmine', function() {
	return gulp.src('./test/spec/test.js')
		.pipe(jasmine());
});

gulp.task('browserify', function() {
	return browserify('./test/spec/test.js')
		.bundle()
		.pipe(source('test.js'))
		.pipe(gulp.dest('./test/spec/browser/'));
})