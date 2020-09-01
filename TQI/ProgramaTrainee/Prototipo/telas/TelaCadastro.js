import React, { useState, } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux'
import { insertCadastro, findAllUsers, insertUsuario, findAllPessoas } from '../database/sqlite';

const TelaCadastro = props => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={stylesTitulo.container}>
                <Text style={stylesTitulo.input}>
                    Cadastro</Text>
            </View>

            <View style={stylesPlaceHolder.container}>
                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Digite aqui seu Nome Completo' onChangeText={text => { setNome(text) }}></TextInput>

                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Digite aqui seu CPF' onChangeText={text => { setCpf(text) }}></TextInput>

                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Digite aqui seu telefone' onChangeText={text => { setTelefone(text) }}></TextInput>

                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Digite aqui seu email' onChangeText={text => { setEmail(text) }}></TextInput>

                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Digite aqui sua Senha' onChangeText={text => { setSenha(text) }}></TextInput>
            </View>

            <View style={{ flex: 1, margin: 100, paddingTop: 350, borderRadius: 5 }}>

                <Button title="Cadastrar" type="outline" onPress={async () => {

                    if (nome, cpf, telefone, email, senha != "") {

                        const resultadoCadastro = await insertCadastro(nome, cpf, telefone);
                        if (resultadoCadastro.rowsAffected == 1) {
                            insertUsuario(email, senha);
                            alert("Dados cadastrados com sucesso!");
                        }
                        else {
                            alert("Algo de errado aconteceu, dados não inseridos")

                        }
                    }
                    else {
                        alert("Algum campo não foi preechido")
                    }
                }} />
            </View>

        </View>
    );
}

const stylesTitulo = StyleSheet.create({
    container: {

        textAlign: "center",
    },
    input: {
        paddingTop: 10,
        textAlign: "center",
        fontSize: 30
    }
});

const stylesPlaceHolder = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 3
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 2,
        textAlign: "center",
        borderRadius: 5
    }
});

export default TelaCadastro;
