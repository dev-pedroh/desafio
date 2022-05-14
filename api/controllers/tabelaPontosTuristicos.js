import { openDb } from '../config/configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS PontosTuristicos ( id INTEGER PRIMARY KEY NOT NULL, nomePonto VARCHAR (50) NOT NULL, cidade VARCHAR (25) NOT NULL, estado VARCHAR (15) NOT NULL, referencia VARCHAR (50) NOT NULL, sobre VARCHAR (100) NOT NULL)')
    })
}

export async function insertPontosTuristicos(pontos){
    openDb().then(db=>{
        db.run('INSERT INTO PontosTuristicos (nomeponto, cidade, estado, referencia, sobre) VALUES (?, ?, ?, ?, ?)', [pontos.nomePonto, pontos.cidade, pontos.estado, pontos.referencia, pontos.sobre]);
    })
}

export async function selectPontosTuristicos(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM PontosTuristicos')
        .then(resposta=>resposta)
    });
}

export async function selectPontoTuristico(nomePonto, cidade, estado){
    return openDb().then(db=>{
        return db.get('SELECT nomePonto, cidade, estado FROM PontosTuristicos WHERE nomePonto=? OR cidade=? OR estado=?', [nomePonto, cidade, estado])
        .then(resposta=>resposta)
    });
}