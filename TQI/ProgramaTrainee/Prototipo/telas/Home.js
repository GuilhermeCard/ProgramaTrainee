import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Image } from 'react-native';

import { login } from '../database/sqlite';


const Home = props => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ alignItems: 'center', paddingTop: 70, marginBottom: -100 }}>
                <Image source={require('../assets/dinheiro.png')} style={{ width: 100, height: 100 }} />
            </View>

            <View style={stylesPlaceHolder.container}>
                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Email' onChangeText={text => { setEmail(text); }}></TextInput>
                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Senha' secureTextEntry={true} onChangeText={text => { setSenha(text) }}></TextInput>
            </View>

            <View style={{ flex: 1, margin: 50, marginLeft: 100, marginRight: 100, borderRadius: 5 }}>
                <Button title="Login" type="outline"
                    onPress={async () => {
                        const result = await login(email, senha);
                        if (result.rows._array[0] != undefined) {
                            props.navigation.navigate('TelaCalculo')
                        }
                        else {
                            alert("Dados incorretos!")
                        }
                    }
                    }
                />

                <View style={{ paddingTop: 23 }}>
                    <Button title="Cadastrar" type="outline"
                        onPress={() => {
                            props.navigation.navigate('TelaCadastro')
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const stylesPlaceHolder = StyleSheet.create({
    container: {
        paddingTop: 150
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

export default (Home);