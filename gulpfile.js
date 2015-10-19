'use strict';

var gulp = require('gulp');
var server = require('gulp-express');



gulp.task('server', function () {
    server.run(['./dev/server.js']);
    gulp.watch(['dev/**/*.*'], server.notify);
});


gulp.task('default', ['server']);
