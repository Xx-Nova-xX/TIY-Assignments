	render: function () {
var todos = this.getFilteredTodos();
this.$todoList.html(this.todoTemplate(todos));
this.$main.toggle(todos.length > 0);
this.$toggleAll.prop('checked', this.getActiveTodos().length === 0);
this.renderFooter();
this.$newTodo.focus();
util.store('todos-jquery', this.todos);
},
renderFooter: function () {
var todoCount = this.todos.length;
var activeTodoCount = this.getActiveTodos().length;
var template = this.footerTemplate({
activeTodoCount: activeTodoCount,
activeTodoWord: util.pluralize(activeTodoCount, 'item'),
completedTodos: todoCount - activeTodoCount,
filter: this.filter
});


toggleAll: function (e) {
var isChecked = $(e.target).prop('checked');
this.todos.forEach(function (todo) {
todo.completed = isChecked;
});
this.render();
},
getActiveTodos: function () {
return this.todos.filter(function (todo) {
return !todo.completed;
});
},
getCompletedTodos: function () {
return this.todos.filter(function (todo) {
return todo.completed;
});
},
getFilteredTodos: function () {
if (this.filter === 'active') {
return this.getActiveTodos();
}
if (this.filter === 'completed') {
return this.getCompletedTodos();
}
return this.todos;
},
destroyCompleted: function () {
this.todos = this.getActiveTodos();
this.filter = 'all';
this.render();
},