import { Router } from 'express';

const roteador = Router();

roteador.get('/', (requisicao, resposta) => {
    
    resposta.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })

})

export default roteador;