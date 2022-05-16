import express from 'express';
import fs from 'fs';
import cors from 'cors';
import https from 'https';

const app = express();
app.use(express.json());
app.use(cors());

import roteador from '../api/routes/routes.js';

app.use(roteador);

app.listen(3000, () => console.log('Api rodando!') );

https.createServer({
    cert: fs.readFileSync('./back/SSL/code.crt'),
    key: fs.readFileSync('./back/SSL/code.key')
}, app).listen(3001, ()=> console.log("https ok"));