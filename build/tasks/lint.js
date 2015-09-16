var gulp = require('gulp');
var paths = require('../paths');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

// runs jshint on all .js files
gulp.task('lint', function() {
  return gulp.src(paths.code.source)
    .pipe(jshint({
      esnext: true
    }))
    .pipe(jshint.reporter(stylish));
});
