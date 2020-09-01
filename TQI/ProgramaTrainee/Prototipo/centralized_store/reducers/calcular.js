const estadoInicial = { valor: 0, parcela: 1, resultado: 0, cpf: '', data: '' };

import { alterarValor, alterarParcela, calcularProposta, alterarCpf, calcularValParcelas } from '../actions/calcular';

const reducerCalcular = (state = estadoInicial, action) => {
    switch (action.type) {
        case alterarValor:
            return { ...state, valor: Number(action.valor) };

        case alterarParcela:
            return { ...state, parcela: Number(action.parcela) };

        case alterarCpf:
            return { ...state, cpf: action.cpf };

        case calcularProposta:
            return { ...state, resultado: (Number((state.valor * 10) / 100) + state.valor).toFixed(2) };

        default:
            return state;
    }
}

export default reducerCalcular;





