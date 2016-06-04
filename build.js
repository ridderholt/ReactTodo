var fs = require('fs');
var browserify = require('browserify');

browserify('./src/main.jsx')
	.transform('babelify', {presets: ['es2015', 'react'], ignore: /(bower_components)|(node_modules)/ })
	.bundle()
	.pipe(fs.createWriteStream('./public/js/bundle.js'));
