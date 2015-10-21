// Concatinate sass partials
// ---------------------------------------------------
var gulp   = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function(){
  return gulp.src('./dev/master/*.scss')
    .pipe(concat('_spice.scss'))
    .pipe(gulp.dest('./dev/src'));
});