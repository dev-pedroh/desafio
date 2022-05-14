import express from 'express';

const app = express();
app.use(express.json());

import roteador from './routes/routes.js';

app.use(roteador);

app.listen(3000, () => console.log('Api rodando!') );