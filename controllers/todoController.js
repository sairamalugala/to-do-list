var todos = ['get up','travel','come back'];
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended:false});

// this is the controller for all actions get, post
var todoController = function(app){
    //loading page..
    app.get('/todo', function(req,res){
        res.render('todo', {data:todos});
    });

    //adding a todo item to list
    app.post('/todo', urlencoded, function(req,res){
        console.log(req.body);
        todos.push(req.body.item);
        res.json(todos);
    });

    //deleting an item from list
    app.delete('/todo/:item', function(req,res){
        var item = req.params.item;
        console.log(item);
        data = [];
        for(var i in todos){
            if(todos[i]!==item){
                data.push(todos[i]);
            }
        }
        todos = data;
        res.json(todos);
    });
}

module.exports = todoController;