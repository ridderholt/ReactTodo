var express = require('express');
var fallback = require('express-history-api-fallback');
var app = express();
var port = 3000;

var root = __dirname + '/public';
app.use(express.static(root));
app.use(express.static(root + '/*'));
app.use(fallback('index.html', { root: root }));

app.listen(port, function(){
  console.log('listening to port ' + port + '!');
});

console.log('surf\'s up!');
