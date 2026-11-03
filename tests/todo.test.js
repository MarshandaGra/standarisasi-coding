const TodoList = require('../src/todo');

describe('TodoList Class - Unit Tests', () => {
  let todoList;

  beforeEach(() => {
    // Arrange (Global Setup per test)
    todoList = new TodoList();
  });

  test('1. should initialize with an empty todo list', () => {
    // Act
    const todos = todoList.getTodos();

    // Assert
    expect(todos).toEqual([]);
    expect(todos.length).toBe(0);
  });

  test('2. should add a new todo successfully', () => {
    // Arrange
    const taskText = 'Belajar Standarisasi Kode';

    // Act
    const newTodo = todoList.addTodo(taskText);

    // Assert
    expect(newTodo).toHaveProperty('id');
    expect(newTodo.task).toBe(taskText);
    expect(newTodo.completed).toBe(false);
    expect(todoList.getTodos().length).toBe(1);
  });

  test('3. should throw an error if task is empty string', () => {
    // Arrange
    const emptyTask = '';

    // Act & Assert
    expect(() => todoList.addTodo(emptyTask)).toThrow('Task cannot be empty');
  });

  test('4. should throw an error if task contains only spaces', () => {
    // Arrange
    const spacedTask = '   ';

    // Act & Assert
    expect(() => todoList.addTodo(spacedTask)).toThrow('Task cannot be empty');
  });

  test('5. should toggle todo completion status from false to true', () => {
    // Arrange
    const todo = todoList.addTodo('Testing dengan Jest');
    const todoId = todo.id;

    // Act
    const updatedTodo = todoList.toggleTodo(todoId);

    // Assert
    expect(updatedTodo.completed).toBe(true);
  });

  test('6. should toggle todo completion status back from true to false', () => {
    // Arrange
    const todo = todoList.addTodo('Testing dengan Jest');
    todoList.toggleTodo(todo.id); // Ubah ke true dulu

    // Act
    const toggledBack = todoList.toggleTodo(todo.id);

    // Assert
    expect(toggledBack.completed).toBe(false);
  });

  test('7. should throw an error when toggling a non-existent todo ID', () => {
    // Arrange
    const invalidId = 99999;

    // Act & Assert
    expect(() => todoList.toggleTodo(invalidId)).toThrow('Todo not found');
  });

  test('8. should remove a todo successfully', () => {
    // Arrange
    const todo = todoList.addTodo('Hapus tugas ini');
    const todoId = todo.id;
    expect(todoList.getTodos().length).toBe(1);

    // Act
    const removedTodo = todoList.removeTodo(todoId);

    // Assert
    expect(removedTodo.task).toBe('Hapus tugas ini');
    expect(todoList.getTodos().length).toBe(0);
  });

  test('9. should throw an error when removing a non-existent todo ID', () => {
    // Arrange
    const invalidId = 88888;

    // Act & Assert
    expect(() => todoList.removeTodo(invalidId)).toThrow('Todo not found');
  });

  test('10. should handle multiple todos and manage them independently', () => {
    // Arrange
    const task1 = 'Tugas Pertama';
    const task2 = 'Tugas Kedua';

    // Act
    const todo1 = todoList.addTodo(task1);
    todoList.addTodo(task2);
    todoList.toggleTodo(todo1.id);

    // Assert
    const allTodos = todoList.getTodos();
    expect(allTodos.length).toBe(2);
    expect(allTodos[0].completed).toBe(true);
    expect(allTodos[1].completed).toBe(false);
  });
});