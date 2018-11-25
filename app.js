var express = require('express');
var app = express();

var todoController = require('./controllers/todoController');

//view engine
app.set('view engine','ejs');
app.get('/', function(req, res){
    res.redirect('/todo');
})
// firing todoController... 
todoController(app);

//static files
app.use('/assets',express.static('./assets'));  

app.listen(5000);
console.log('server started at 5000 port');