var gulp = require('gulp');

var traceur = require('gulp-traceur');
var jshint = require('gulp-jshint');

var paths = {
	source: ['src/**/*.js']
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
  return gulp.src(paths.source)
    .pipe(jshint(jsHintConfig))
    .pipe(jshint.reporter('default'));
});

gulp.task('build', ['lint', 'transpile']);

gulp.task('watch', function() {
	gulp.watch(paths.source, ['build']);
});

gulp.task('default', ['build']);