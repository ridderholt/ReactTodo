var express = require('express');
var fallback = require('express-history-api-fallback');
var app = express();
var port = 3000;
var todos = [
	{ 
		id: 1,
		name: 'Create react app',
		complete: true 
	},
	{
		id: 2,
		name: 'Write blog post',
		complete: false
	}
	];

var root = __dirname + '/public';
app.use('/api/todos', (req, res) => {
	res.json(todos);
});
app.use(express.static(root));
app.use(express.static(root + '/*'));
app.use(fallback('index.html', { root: root }));

app.listen(port, function(){
  console.log('listening to port ' + port + '!');
});

console.log('surf\'s up!');
