import express from 'express';

import todoController from '../../controllers/todoController';

const todoRouter = express.Router();

todoRouter.post('/', todoController.addTodo);

todoRouter.get('/', todoController.getAllTodos);

todoRouter.get('/:id', todoController.getTodo);

export default todoRouter;