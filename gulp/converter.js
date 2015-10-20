// Move converter back to docs folder
// ---------------------------------------------------
var gulp = require('gulp');

gulp.task('converter',function(){
	setTimeout(function(){
		gulp.src('./dev/main.min.js')
  			.pipe(gulp.dest('./docs/assets/js/'))
	},3000)	
})