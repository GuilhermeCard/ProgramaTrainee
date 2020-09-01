import React from 'react';
import { StyleSheet, } from 'react-native';

import { init } from './database/sqlite';

import ContainerNavegacao from './navegacao/NavegacaoPrincipal';

import { createStore, combineReducers } from 'redux';

import reducerCalcular from './centralized_store/reducers/calcular';

import { Provider } from 'react-redux';

init().then(
  () => {
    console.log("Database inicializado");
  }
).catch((error) => {
  console.log("Erro");
  console.log(error);
})

const reducerCompleto = combineReducers({
  calc: reducerCalcular,
});

const store = createStore(reducerCompleto);


export default function App() {
  return (
    <Provider store={store}>
      <ContainerNavegacao />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
