import * as SQLite from 'expo-sqlite'
import { useSelector, useDispatch, connect } from 'react-redux'

const database = SQLite.openDatabase('meubanco.db');

const sqlTableCreations =
    [
        'CREATE TABLE IF NOT EXISTS registros ( id INTEGER primary key not null, valor DOUBLE, parcela INTEGER, resultado DOUBLE, cpf TEXT, val_parcelas DOUBLE, status TEXT, data DATE );',
        'CREATE TABLE IF NOT EXISTS usuarios ( id INTEGER primary key not null, email TEXT, senha TEXT, id_pessoa INTEGER, FOREIGN KEY (id_pessoa) REFERENCES pessoas(id) );',
        'CREATE TABLE IF NOT EXISTS pessoas ( id INTEGER primary key not null, nome TEXT, cpf TEXT, telefone TEXT );'
    ]


export const init = () => {

    const promise = new Promise((resolve, reject) => {
        database.transaction((objetoDaTransacao) => {
            for (var i = 0; i < sqlTableCreations.length; i++) {
                objetoDaTransacao.executeSql(sqlTableCreations[i]);
            }
        }, (error) => {
            reject(error)
        }, () => {
            console.log("SQL's executados com sucesso !");
            resolve()
        })
    })
    return promise;
}

export const insertCadastro = (nome, cpf, telefone) => {

    const promise = new Promise((resolve, reject) => {
        database.transaction((objetoDaTransacao) => {
            objetoDaTransacao.executeSql('INSERT INTO pessoas (nome, cpf, telefone) VALUES (?,?,?);',
                [nome, cpf, telefone],
                (_, result) => { resolve(result) },
                (_, error) => { reject(error) },
            )
        })
    })
    return promise;
}

export const insertUsuario = (email, senha) => {

    const promise = new Promise((resolve, reject) => {
        database.transaction((objetoDaTransacao) => {
            objetoDaTransacao.executeSql('INSERT INTO usuarios (email, senha) VALUES (?,?);',
                [email, senha],
                (_, result) => { resolve(result) },
                (_, error) => { reject(error) },
            )
        })
    })
    return promise;
}

export const insertRegistros = (valor, parcela, resultado, cpf, val_parcelas, status, data) => {

    const promise = new Promise((resolve, reject) => {
        database.transaction((objetoDaTransacao) => {
            objetoDaTransacao.executeSql('INSERT INTO registros (valor, parcela, resultado, cpf, val_parcelas, status, data) VALUES (?,?,?,?,?,?,?);',
                [valor, parcela, resultado, cpf, val_parcelas, status, data],
                (_, result) => { resolve(result) },
                (_, error) => { reject(error) },
            )
        })
    })
    return promise;
}

export const findAllRegistros = () => {

    const promise = new Promise((resolve, reject) => {
        database.transaction((objetoDaTransacao) => {
            objetoDaTransacao.executeSql('SELECT * FROM registros;',
                [],
                (_, result) => { resolve(result) },
                (_, error) => { reject(error) },
            )
        })
    })
    return promise;
}

export const findAllUsers = () => {

    const promise = new Promise((resolve, reject) => {
        database.transaction((objetoDaTransacao) => {
            objetoDaTransacao.executeSql('SELECT * FROM usuarios ;',
                [], //vetor de argumentos dinâmicos
                (_, result) => { resolve(result) },
                (_, error) => { reject(error) },
            )
        })
    })
    return promise;
}

export const login = (email, senha) => {

    const promise = new Promise((resolve, reject) => {
        database.transaction((objetoDaTransacao) => {
            objetoDaTransacao.executeSql('SELECT 1 FROM usuarios WHERE email = ? and senha = ?;',
                [email, senha], //vetor de argumentos dinâmicos
                (_, result) => { resolve(result) },
                (_, error) => { reject(error) },
            )
        })
    })
    return promise;
}

export const findAllPessoas = () => {

    const promise = new Promise((resolve, reject) => {
        database.transaction((objetoDaTransacao) => {
            objetoDaTransacao.executeSql('SELECT * FROM pessoas ;',
                [], //vetor de argumentos dinâmicos
                (_, result) => { resolve(result) },
                (_, error) => { reject(error) },
            )
        })
    })
    return promise;
}
