var Todo = require('../data/todos');

function index(req, res) {
    res.render('/', {
    todos: Todo.getAll(),
    time: req.time
 });
}

function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/todos');
}
  
function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('index');
}

  function newTodo(req, res) {
    res.render('index');
}

  function show(req, res) {
    res.render('index', {
      todo: Todo.getOne(req.params.id),
      todoNum: Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
 });
}

module.exports = {
    index,
    create,
    delete: deleteTodo,
    new: newTodo,
    show
}