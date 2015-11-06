'use strict';

var gulp = require('gulp');

// Dev Tasks
// ===================================================
var sass      = require('./gulp/sass');
var devserver = require('./gulp/server');
var docs      = require('./gulp/docs');
var converter = require('./gulp/converter');
var jsondocs  = require('./gulp/jsondocs');
// ===================================================


// Publish Tasks
// ===================================================
var bump    = require('./gulp/bump');
var version = require('./gulp/version');
var concat  = require('./gulp/concat');
var copydev = require('./gulp/copydev');
// ===================================================


gulp.task('watch', function () {
  gulp.watch('dev/**/*.scss', ['sass','sasstest','docs','converter']);
});

gulp.task('default', ['server','watch']);
gulp.task('update',  ['bump','jsondocs']);
gulp.task('publish', ['version', 'copy', 'publishdocs']);
