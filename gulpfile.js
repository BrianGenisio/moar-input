var gulp = require('gulp');

var traceur = require('gulp-traceur');
var jshint = require('gulp-jshint');
var nodeunit = require('gulp-nodeunit');

var paths = {
	source: ['src/**/*.js'],
	test: ['test/**/*.js']
};

var jsHintConfig = {
	esnext: true
};

gulp.task('js', function() {
    return gulp.src(paths.source)
        .pipe(jshint(jsHintConfig))
        .pipe(jshint.reporter('default'))
        .pipe(traceur({sourceMap: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', ['js'], function () {
    return gulp.src(paths.test)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(nodeunit())
        .on('error', function() {});
});

gulp.task('watch', function() {
	gulp.watch(paths.source.concat(paths.test), ['test']);
});

gulp.task('default', function() {
	gulp.start('test');
});