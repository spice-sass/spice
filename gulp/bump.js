// Bump up version numbers
// ---------------------------------------------------
var gulp   = require('gulp');
var bumpup = require('gulp-bump');
var argv   = require('yargs').argv;


var bump = gulp.task('bump', function(){

  var files = ['./package.json','./bower.json']

  if(argv.patch){

    gulp.src(files)
      .pipe(bumpup({type:'patch'}))
      .pipe(gulp.dest('./'));
  }


  if(argv.minor){

    gulp.src(files)
      .pipe(bumpup({type:'minor'}))
      .pipe(gulp.dest('./'));
  }

  if(argv.major){

    gulp.src(files)
      .pipe(bumpup({type:'major'}))
      .pipe(gulp.dest('./'));
  }

  if(argv.prerelease){

    gulp.src(files)
      .pipe(bumpup({type:'prerelease'}))
      .pipe(gulp.dest('./'));
  }

});

module.exports = bump;

