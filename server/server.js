const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e);
  });
//  console.log(req.body);
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/12345
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    console.log('Todo ID not valid');
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo){
      console.log(`Todo '${id}' not found`);
      return res.status(404).send();
    }
    console.log('Found todo:', todo);
    res.send({todo});
  }).catch((e) => {
    console.log(e)
    return res.status(400).send();
  });
  //res.send(req.params);
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
