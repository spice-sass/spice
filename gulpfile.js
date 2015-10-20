'use strict';

var gulp    = require('gulp');
var server  = require('gulp-express');
var sass    = require('gulp-sass');
var bump    = require('gulp-bump');
var sassdoc = require('sassdoc');
var argv    = require('yargs').argv;
var concat  = require('gulp-concat');


// Dev Tasks
// ===================================================

gulp.task('dev-sass', function () {
  gulp.src('./dev/test/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dev/test/css'))
});

gulp.task('server', function () {
    server.run(['./dev/server.js']);
    gulp.watch(['dev/**/*.*'], server.notify);
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


// Publish Tasks
// ===================================================

//Copy dev files into src folder
gulp.task('copy', function(){
    gulp.src('./dev/src/**/*.scss')
    .pipe(gulp.dest('./src'));
});


// Bump up version numbers
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

  if(argv.prerelease){

    gulp.src(files)
      .pipe(bump({type:'prerelease'}))
      .pipe(gulp.dest('./'));
  }

});

// Write version to sass partial
gulp.task('spice-version',function(){

  var version = function(){

    var fs      = require('fs');
    var file    = './package.json';
    var obj     = JSON.parse(fs.readFileSync(file, 'utf8'));
    var version = obj.version;


    var data =  "// Spice" + "\n" +
                "// Version " + version + "\n" +
                "// =============" + "\n" +
                "// Spicy sass library - Add a little spice to your UI!" + "\n" +
                "// Website : http://spice-sass.github.io/" + "\n" +
                "// Repository : https://github.com/spice-sass/spice" + "\n" +
                "// ------------------------------------------------------------------------" + "\n" +
                "// Released under the MIT license" + "\n" +
                "// https://github.com/spice-sass/spice/blob/master/MIT-LICENSE.txt" + "\n" +
                "// ------------------------------------------------------------------------"


    fs.writeFile("./dev/master/_version.scss", data, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log('updated sass file to version ' + version);
    });

  }

  return version();

});


// Concatinate sass partials
gulp.task('concat', function(){
  return gulp.src('./dev/master/*.scss')
    .pipe(concat('_spice.scss'))
    .pipe(gulp.dest('./dev/src'));
});

// ===================================================

gulp.task('watch', function () {
  gulp.watch('dev/**/*.scss', ['dev-sass','docs']);
});



gulp.task('default', ['server','watch']);
gulp.task('publish', ['copy', 'bump']);
gulp.task('pubsass', ['spice-version','concat']);
