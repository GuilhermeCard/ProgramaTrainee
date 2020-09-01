import React, { Component, useState, useEffect, useCallback } from 'react';
import { CheckBox, Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux';

import { insertRegistros } from '../database/sqlite';


import { verificarClassificacao, pesoIdeal, verificarFaixaEtaria } from '../centralized_store/actions/calcular';

import Card from '../components/Card';

const TelaResultadoProposta = props => {

    let aux = new Date();
    let data = (aux.getDate() + '/' + (aux.getMonth() + 1) + '/' + aux.getFullYear());

    useEffect(() => {

        if (props.calc.valor, props.calc.parcela, props.calc.resultado != '' > 0) {
            console.log('O valor solicitado é ' + props.calc.valor);
            console.log('A quantidade de parcelas é ' + props.calc.parcela);
            console.log('O valor total com juros é ' + props.calc.resultado);
        }
        else {
            console.log('As props ainda nao foram alteradas')
        }

    }, [props]);

    valParcelas = (props.calc.resultado / props.calc.parcela)

    status = "Pendente";

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={stylesTitulo.container}>
                <Text style={stylesTitulo.input}>
                    Resultado</Text>
            </View>

            <View style={styles.container}>
                <Card>
                    <Text style={styles.conteudoCard}>Valor solicitado:    R${props.calc.valor}</Text>
                    <Text style={styles.conteudoCard}>Valor total com 10% de juros:  R${props.calc.resultado}</Text>
                    <Text style={styles.conteudoCard}>Valor das parcelas: R${(props.calc.resultado / props.calc.parcela).toFixed(2)}   </Text>
                    <Text style={styles.conteudoCard}>Quantidade de parcelas: {props.calc.parcela}</Text>
                    <Text style={styles.conteudoCard}>CPF: {props.calc.cpf}</Text>
                </Card>
            </View>

            <View style={{ flex: 1, margin: 100, borderRadius: 5 }}>
                <Button title="Confirmar Solicitação" type="outline" onPress={async () => {

                    if (props.calc.valor, props.calc.parcela, props.calc.resultado,
                        props.calc.cpf != '' > 0) {


                        await insertRegistros(props.calc.valor, props.calc.parcela, props.calc.resultado,
                            props.calc.cpf, valParcelas, status, data)

                        alert("Solicitação enviada para análise do banco!")
                    }
                    else {
                        alert("Falta dados para envio da solicitação de empréstimo!")
                    };
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
        paddingTop: 50,
        textAlign: "center",
        fontSize: 40
    }
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 15,
        paddingTop: 50,

    },
    conteudoCard: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        fontSize: 20,


    }
});

function mapStateToProps(state) {
    return {
        calc: state.calc
    };
}

export default connect(mapStateToProps)(TelaResultadoProposta);