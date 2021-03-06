var gulp = require('gulp');

var traceur = require('gulp-traceur');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var nodeunit = require('gulp-nodeunit');
var templateCache = require('gulp-angular-templatecache');

var paths = {
	source: ['src/**/*.js'],
    clientSource: ['client_src/**/*.js'],
    clientTemplates: ['client_src/**/*.html'],
	test: ['test/**/*.js']
};

var jsHintConfig = {
	esnext: true
};

gulp.task('js', function() {
    return gulp.src(paths.source)
        .pipe(traceur({sourceMap: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('html-templates', function() {
    return gulp.src(paths.clientTemplates)
        .pipe(templateCache({module: "moarInput"}))
        .pipe(gulp.dest('dist/public'));
});

gulp.task('client', ['html-templates'], function() {
    return gulp.src(paths.clientSource.concat(['dist/public/templates.js']))
        .pipe(concat('app.js'))
        .pipe(traceur({sourceMap: true}))
        .pipe(gulp.dest('dist/public'));
});

gulp.task('test', ['js', 'client'], function () {
    return gulp.src(paths.test)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(nodeunit())
        .on('error', function() {});
});

gulp.task('watch', function() {
	gulp.watch(paths.source.concat(paths.test), ['test']);
    gulp.watch(paths.clientSource.concat(paths.clientTemplates), ['client']);
});

gulp.task('default', function() {
	gulp.start('test');
});