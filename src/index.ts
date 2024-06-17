import bodyParder from 'body-parser';
import express from 'express';

import serverConfig from './configs/serverConfig';
import apiRouter from './routes';

const app = express();

const { PORT } = serverConfig;

app.use(bodyParder.json());
app.use(bodyParder.urlencoded({ extended: true }));
app.use(bodyParder.text());

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});