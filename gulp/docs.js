// Compile sass docs
// ---------------------------------------------------
var gulp    = require('gulp');
var sassdoc = require('sassdoc');

gulp.task('docs', function () {
  var options = {
    dest: './docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    }
  };

  return gulp.src('./src/**/*.scss')
    .pipe(sassdoc(options));
});