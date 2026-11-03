class TodoList {
  constructor() {
    this.todos = [];
  }

  // Mendapatkan semua daftar todo
  getTodos() {
    return this.todos;
  }

  // Menambah todo baru
  addTodo(task) {
    if (!task || task.trim() === '') {
      throw new Error('Task cannot be empty');
    }
    const newTodo = {
      id: Date.now(),
      task: task.trim(),
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  // Menandai todo selesai berdasarkan ID
  toggleTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.completed = !todo.completed;
    return todo;
  }

  // Menghapus todo berdasarkan ID
  removeTodo(id) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error('Todo not found');
    }
    return this.todos.splice(index, 1)[0];
  }
}

module.exports = TodoList;
