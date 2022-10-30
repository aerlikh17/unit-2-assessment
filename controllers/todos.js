const Todo = require('../models/todo');

function index (req, res) {
  res.render('index', {
    todos: Todo.getAll() 
  })
};

function newTodo (req, res) {
  res.render('index');
};

function create(req, res) {
  console.log(req.body);
  Todo.create(req.body);
  res.redirect('/');
}

function show(req, res) {
  res.render('index', {
    todo: Todo.getOne(req.params.id),
    todoNum: Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
  });
}

module.exports = {
    index,
    new: newTodo,
    create,
    show
}