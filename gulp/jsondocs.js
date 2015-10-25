
var gulp   = require('gulp');
var concat = require('gulp-concat');
var files  = [
	'./dev/docbuilder/includes.header.json',
	'./dev/docbuilder/docs/*.json',
	'./dev/docbuilder/docs/includes.footer.json'
]

gulp.task('jsondocs', function(){
    return gulp.src(files)
    .pipe(concat('includes.json'))
    .pipe(gulp.dest('./dev'));

});