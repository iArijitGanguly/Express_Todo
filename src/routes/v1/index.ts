import express from 'express';

import todoRouter from './todoRouter';

const v1Router = express.Router();

v1Router.use('/todos', todoRouter);

export default v1Router;