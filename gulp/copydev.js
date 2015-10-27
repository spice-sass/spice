//Copy dev files into src folder
// ---------------------------------------------------
var gulp  = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function(){
	return gulp.src('./src', {read: false})
        .pipe(clean());
});

gulp.task('copy', ['concat', 'clean'], function(){
    return gulp.src('./dev/src/**/*.scss')
      .pipe(gulp.dest('./src'));
});