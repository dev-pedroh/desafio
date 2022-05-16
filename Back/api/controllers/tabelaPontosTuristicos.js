import { openDb } from '.././infraestrutura/configDB.js';
import moment from 'moment';
const getDate = moment;

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS PontosTuristicos ( id INTEGER PRIMARY KEY NOT NULL, nomePonto VARCHAR (50) NOT NULL, cidade VARCHAR (25) NOT NULL, estado VARCHAR (15) NOT NULL, referencia VARCHAR (50) NOT NULL, sobre VARCHAR (100) NOT NULL, data DATETIME NOT NULL)')
    })
}

export async function selectPontosTuristicos(requisicao, resposta){
    openDb().then(db=>{
        db.all('SELECT * FROM PontosTuristicos')
        .then(pontos=> resposta.json(pontos))
    });
}

export async function selectPontoTuristico(requisicao, resposta){
    let nomePonto = requisicao.query.nomePonto;
    let cidade = requisicao.query.cidade;

    openDb().then(db=>{
        db.all('SELECT nomePonto, cidade, estado, referencia, sobre, data FROM PontosTuristicos WHERE nomePonto=? OR cidade=?', [nomePonto, cidade])
        .then(ponto=> resposta.json(ponto));
    });
}

export async function insertPontosTuristicos(requisicao, resposta){
    let pontos = requisicao.body;
    const createdAt = getDate().format('YYYY-MM-DD HH:MM:SS');

    openDb().then(db=>{
        db.run('INSERT INTO PontosTuristicos (nomeponto, cidade, estado, referencia, sobre, data) VALUES (?, ?, ?, ?, ?, ?)', [pontos.nomePonto, pontos.cidade, pontos.estado, pontos.referencia, pontos.sobre, createdAt]);
    });
    resposta.json({
        "statusCode": 200
    });
    
}