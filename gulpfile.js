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

gulp.task('transpile', function() {
	return gulp.src(paths.source)
        .pipe(traceur({sourceMap: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src(paths.source.concat(paths.test))
    .pipe(jshint(jsHintConfig))
    .pipe(jshint.reporter('default'));
});

gulp.task('build', function() {
	gulp.start('lint', 'transpile');
});

gulp.task('test', ['build'], function () {
    gulp.src(paths.test)
        .pipe(nodeunit({
            reporter: 'junit',
            reporterOptions: {
                output: 'test'
            }
        }));
});

gulp.task('watch', function() {
	gulp.watch(paths.source, ['build']);
});

gulp.task('default', function() {
	gulp.start('test');
});