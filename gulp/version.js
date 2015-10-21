// Write version to sass partial
// ---------------------------------------------------
var gulp = require('gulp');

var version = gulp.task('version',function(){

  var ver = function(){

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

  return ver();

});

module.exports = version;