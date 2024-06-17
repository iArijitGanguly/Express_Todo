import TodoRepository from '../repositories/TodoRepository';

class TodoService {

    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        this.todoRepository = todoRepository;
    }

    async createTodo(todoText: string) {
        const todo = await this.todoRepository.addTodo(todoText);
        return todo;
    }

    async getAll() {
        const todos = await this.todoRepository.getAllTodos();
        return todos;
    }

    async getTodoById(id: number) {
        const todo = await this.todoRepository.getTodo(id);
        return todo;
    }

}

export default TodoService;