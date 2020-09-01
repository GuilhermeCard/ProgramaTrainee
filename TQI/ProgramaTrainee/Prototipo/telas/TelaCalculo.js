import React, { Component, useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useDispatch, connect } from 'react-redux'


const TelaCalculo = props => {

    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>

            <View style={stylesPlaceHolder.container}>
                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Digite aqui o Valor desejado' onChangeText={valor => { dispatch({ type: 'Alterar_Valor', valor: valor }) }}></TextInput>

                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Digite aqui a quantidade de Parcelas' onChangeText={parcela => { dispatch({ type: 'Alterar_Parcela', parcela: parcela }) }}></TextInput>

                <TextInput style={stylesPlaceHolder.input}
                    placeholder='Digite aqui o seu CPF' onChangeText={cpf => { dispatch({ type: 'Alterar_Cpf', cpf: cpf }) }}></TextInput>
            </View>

            <View style={{ flex: 1, margin: 100, paddingTop: 70, borderRadius: 5 }}>

                <Button title="Calcular" type="outline" onPress={() => {
                    dispatch({ type: 'Resultado' }); props.navigation.navigate('TelaResultadoProposta')

                }} />

                <View style={{ paddingTop: 23 }}>
                    <Button title="Consultar Propostas" type="outline" onPress={() => { props.navigation.navigate('TelaPropostas') }} />
                </View>

            </View>
        </View>
    );
}


const stylesPlaceHolder = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 20,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 2,
        textAlign: "center",
        borderRadius: 5
    }
});

function mapStateToProps(state) {
    return {
        calc: state.calc
    };
}

export default connect(mapStateToProps)(TelaCalculo);


