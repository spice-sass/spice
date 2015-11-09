// Compile sass
// ---------------------------------------------------
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./dev/environment/sass/**/*.scss')
    .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./dev/environment/css'))
});

gulp.task('sasstest', function () {
  gulp.src('./dev/tests/tests.scss')
    .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./dev/environment/css'))
});