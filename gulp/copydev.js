//Copy dev files into src folder
// ---------------------------------------------------
var gulp = require('gulp');

gulp.task('copy', ['concat'], function(){
    return gulp.src('./dev/src/**/*.scss')
      .pipe(gulp.dest('./src'));
});