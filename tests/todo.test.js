const TodoList = require('../src/todo');

describe('TodoList Class', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test('should initialize with an empty todo list', () => {
    expect(todoList.getTodos()).toEqual([]);
  });

  test('should add a new todo successfully', () => {
    const todo = todoList.addTodo('Belajar Standarisasi Kode');
    expect(todo.task).toBe('Belajar Standarisasi Kode');
    expect(todo.completed).toBe(false);
    expect(todoList.getTodos().length).toBe(1);
  });

  test('should throw an error if task is empty when adding', () => {
    expect(() => todoList.addTodo('')).toThrow('Task cannot be empty');
    expect(() => todoList.addTodo('   ')).toThrow('Task cannot be empty');
  });

  test('should toggle todo completion status', () => {
    const todo = todoList.addTodo('Testing dengan Jest');
    expect(todo.completed).toBe(false);

    const updated = todoList.toggleTodo(todo.id);
    expect(updated.completed).toBe(true);

    const toggledBack = todoList.toggleTodo(todo.id);
    expect(toggledBack.completed).toBe(false);
  });

  test('should throw an error when toggling a non-existent todo', () => {
    expect(() => todoList.toggleTodo(999)).toThrow('Todo not found');
  });

  test('should remove a todo successfully', () => {
    const todo = todoList.addTodo('Hapus tugas ini');
    expect(todoList.getTodos().length).toBe(1);

    const removed = todoList.removeTodo(todo.id);
    expect(removed.task).toBe('Hapus tugas ini');
    expect(todoList.getTodos().length).toBe(0);
  });

  test('should throw an error when removing a non-existent todo', () => {
    expect(() => todoList.removeTodo(999)).toThrow('Todo not found');
  });
});
