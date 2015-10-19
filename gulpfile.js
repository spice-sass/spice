'use strict';

var gulp   = require('gulp');
var server = require('gulp-express');
var sass   = require('gulp-sass');
var bump   = require('gulp-bump');
var argv   = require('yargs').argv;



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

  console.log(argv);

  gulp.src('./package.json')
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'));
});


gulp.task('default', ['server']);
