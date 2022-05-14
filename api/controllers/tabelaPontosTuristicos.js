import { openDb } from '../config/configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS PontosTuristicos ( id INTEGER PRIMARY KEY NOT NULL, nomePonto VARCHAR (50) NOT NULL, cidade VARCHAR (25) NOT NULL, estado VARCHAR (15) NOT NULL, referencia VARCHAR (50) NOT NULL, sobre VARCHAR (100) NOT NULL)')
    })
}

export async function selectPontosTuristicos(requisicao, resposta){
    openDb().then(db=>{
        db.all('SELECT * FROM PontosTuristicos')
        .then(pontos=> resposta.json(pontos))
    });
}

export async function selectPontoTuristico(requisicao, resposta){
    let nomePonto = requisicao.body.nomePonto;
    let cidade = requisicao.body.cidade;
    let estado = requisicao.body.estado;
      
    openDb().then(db=>{
        db.all('SELECT nomePonto, cidade, estado FROM PontosTuristicos WHERE nomePonto=? OR cidade=? OR estado=?', [nomePonto, cidade, estado])
        .then(ponto=> resposta.json(ponto))
    });
}

export async function insertPontosTuristicos(requisicao, resposta){
    let pontos = requisicao.body;
    
    openDb().then(db=>{
        db.run('INSERT INTO PontosTuristicos (nomeponto, cidade, estado, referencia, sobre) VALUES (?, ?, ?, ?, ?)', [pontos.nomePonto, pontos.cidade, pontos.estado, pontos.referencia, pontos.sobre]);
    });
    resposta.json({
        "statusCode": 200
    });
}