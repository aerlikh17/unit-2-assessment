const todos = [];

function getAll(){
    return todos;
}

function create(todo) {
    todo.id = Date.now() % 1000000;
    todo.done = false;
    todos.push(todo);
}
  
module.exports = {
    getAll,
    create
};