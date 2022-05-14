import { createTable, insertPontosTuristicos, selectPontosTuristicos, selectPontoTuristico } from './controllers/tabelaPontosTuristicos.js';

import express from 'express';

const app = express();
app.use(express.json());

createTable();

app.get('/', function(requisicao, resposta){
    resposta.send('home - ok!');
});

app.get('/pontos', async function(requisicao, resposta){
    let pontos = await selectPontosTuristicos();
    resposta.json(pontos);
});

app.get('/ponto', async function(requisicao, resposta){
    let ponto = await selectPontoTuristico(requisicao.body.nomePonto, requisicao.body.cidade, requisicao.body.estado);
    resposta.json(ponto);
})

app.post('/pontos', function(requisicao, resposta){
    
    insertPontosTuristicos(requisicao.body)
    resposta.json({
        "statusCode":200
    });
});

app.listen(3000, () => console.log('Api rodando!') );