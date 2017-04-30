var fs = require('fs');
var gulp = require('gulp');
var babel = require('gulp-babel');
var inject = require('gulp-inject');
var browserify = require('gulp-browserify-thin');

gulp.task('build', [ 'browserify'], () => {
    var injectTarget = gulp.src('./core/index.html');
    // eventually we'll need to also pipe in css
    return injectTarget.pipe(inject(gulp.src('./bin/*.js'))).pipe(gulp.dest('bin'));
});
gulp.task('browserify', () => {
    var babelrc = fs.readFileSync("./.babelrc", { encoding: 'UTF-8'});
    var babelOptions = JSON.parse(babelrc);
    var b = browserify({ baseDir: __dirname })
        .add('./core/views/shell.jsx')
        .transform("babelify", babelOptions)
    var stream = b.bundle("browserifiedFile.js");
    return browserifiedFile = stream.on('error', (err) => {
        console.error(err.toString());
        process.exit(1);
    }).pipe(gulp.dest('bin'));
})
gulp.task('run', () => {
    return require('./bin/www');
});

gulp.task('default', ['build', 'run'], () => {})