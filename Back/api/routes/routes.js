import { Router } from 'express';
import { createTable, insertPontosTuristicos, selectPontosTuristicos, selectPontoTuristico } from '.././controllers/tabelaPontosTuristicos.js';

createTable();

const roteador = Router();

roteador.get('/', (requisicao, resposta)=>{
    resposta.json({
        "StatusCode": 200,
        "Mensagem": "Api rodando"
    });
});

roteador.get('/pontos', selectPontosTuristicos);
roteador.get('/ponto', selectPontoTuristico);
roteador.post('/pontos/novo', insertPontosTuristicos);


export default roteador;