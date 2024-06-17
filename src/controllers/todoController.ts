import { Request, Response } from 'express';

import TodoRepository from '../repositories/TodoRepository';
import TodoService from '../services/TodoService';

const todoService = new TodoService(new TodoRepository());

async function addTodo(req: Request, res: Response) {
    const response = await todoService.createTodo(req.body.todoText);
    return res.status(201).send({
        success: true,
        message: 'Successfully created a new todo',
        error: {},
        data: response
    });
}

async function getAllTodos(_req: Request, res: Response) {
    const response = await todoService.getAll();
    return res.status(200).send({
        success: true,
        message: 'Successfully fetched all the todos',
        error: {},
        data: response
    });
}

async function getTodo(req: Request, res: Response) {
    const response = await todoService.getTodoById(parseInt(req.params.id));
    return res.status(200).send({
        success: true,
        message: 'Successfully fetched the todo',
        error: {},
        data: response
    });
}

export default {
    addTodo,
    getAllTodos,
    getTodo
};