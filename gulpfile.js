'use strict';

var gulp    = require('gulp');
var server  = require('gulp-express');
var sass    = require('gulp-sass');
var bump    = require('gulp-bump');
var sassdoc = require('sassdoc');
var argv    = require('yargs').argv;



gulp.task('dev-sass', function () {
  gulp.src('./dev/test/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dev/test/css'))
});

gulp.task('server', function () {
    server.run(['./dev/server.js']);
    gulp.watch(['dev/**/*.*'], server.notify);
});

//Copy dev files into src folder
gulp.task('copy', function(){
    gulp.src('./dev/src/**/*.scss')
    .pipe(gulp.dest('./src'));
});

gulp.task('bump', function(){

  var files = ['./package.json','./bower.json']

  if(argv.patch){

    gulp.src(files)
      .pipe(bump({type:'patch'}))
      .pipe(gulp.dest('./'));
  }


  if(argv.minor){

    gulp.src(files)
      .pipe(bump({type:'minor'}))
      .pipe(gulp.dest('./'));
  }

  if(argv.major){

    gulp.src(files)
      .pipe(bump({type:'major'}))
      .pipe(gulp.dest('./'));
  }

});



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

gulp.task('watch', function () {
  gulp.watch('dev/**/*.scss', ['dev-sass','docs']);
});



gulp.task('default', ['server','watch']);
gulp.task('publish',['copy','bump']);
