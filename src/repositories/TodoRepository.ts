import { TodoData } from '../types/todoDataDefinition';

class TodoRepository {

    private todos: TodoData[] = [];

    constructor() {
        this.todos = [];
    }

    async addTodo(todoText: string) {
        const todoList = this.todos;
        this.todos.push({
            text: todoText,
            id: todoList.length
        });
        return this.todos;
    }

    async getAllTodos() {
        return this.todos;
    }

    async getTodo(id: number) {
        const todo = this.todos.find((todo) => todo.id == id);
        return todo;
    }

}

export default TodoRepository;