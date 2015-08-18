var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var cover = require('gulp-coverage');
var git = require('gulp-git');
var prompt = require('gulp-prompt');

gulp.task('default', ['browserify', 'jasmine']);

gulp.task('push', ['git-push']);

gulp.task('jasmine', function() {
	return gulp.src('./test/spec/test.js')
		.pipe(cover.instrument({
			pattern: ['./Structures/*']
		}))
		.pipe(jasmine())
		.pipe(cover.gather())
		.pipe(cover.format())
		.pipe(gulp.dest('./test/coverage'));
});

gulp.task('browserify', function() {
	return browserify('./test/spec/test.js')
		.bundle()
		.pipe(source('test.js'))
		.pipe(gulp.dest('./test/spec/browser/'));
})

gulp.task('git-add', function() {
	return gulp.src('./')
		.pipe(git.add());
});

gulp.task('git-commit', ['git-add'], function() {
	var message = "Initial Commit";
	return gulp.src([
			'./Core/*',
			'./Structures/*',
			'./test/*',
			'bower.json',
			'package.json',
			'gulpfile.js',
			'.gitignore'
		])
		.pipe(prompt.prompt({
			type: 'input',
			name: 'commit',
			message: 'Please enter a commit message ...'
		}, function(res) {
			message = res.commit;
		}))
		.pipe(git.commit(message));
});

gulp.task('git-push', ['git-commit'], function() {
	return git.push('origin', 'master', function(err) {
		if (err) throw err;
	});
});