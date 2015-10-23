
var gulp = require('gulp');

gulp.task('jsondocs', function(){
    
    var fs   = require('fs'),
		path = './dev/docbuilder',
		incs = fs.readdirSync(path),
		obj  = {};

	obj.includes = {};


	incs.forEach(function(include,index){

		var name = include.replace('.json','');
		

		fs.readFile(path+"/"+include, function (err, data) {
		    if (err) throw err;

		    var data = JSON.parse(data);

		    obj.includes[include] = JSON.stringify(data);

		    if(index == incs.length-1){

				console.log(obj)
				copy();
			}
		 });

		

	});

	function copy(){

		var finalData = JSON.stringify(obj);

		fs.writeFile('./dev/docbuilder.json', finalData , function (err) {
	      if (err) throw err;
	      console.log('includes file saved file saved');
	    });

	}

});