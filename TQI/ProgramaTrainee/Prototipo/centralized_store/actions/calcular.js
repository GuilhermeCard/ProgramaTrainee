
export const alterarValor = "Alterar_Valor"

export const alterarParcela = "Alterar_Parcela"

export const calcularProposta = "Resultado"

export const alterarCpf = "Alterar_Cpf"

export const calcularValParcelas = "Calcular_ValParcelas"

export const alterouValor = (valor) => {
    return { type: alterarValor, value: valor }
}

export const alterouParcela = (parcela) => {
    return { type: alterarParcela, value: parcela }
}

export const calculouProposta = () => {
    return { type: calcularProposta }
}

export const alterouCpf = (cpf) => {
    return { type: alterarCpf, value: cpf }
}

export const verificarClassificacao = (resultado, idade) => {
    if (idade < 65) {
        if (resultado < 18.5) {
            return classificacao = 'Baixo Peso'
        }
        else if (resultado >= 18.5 && resultado <= 24.9) {
            return classificacao = 'Peso normal'
        }
        else if (resultado >= 25 && resultado <= 29.9) {
            return classificacao = 'Excesso de peso'
        }
        else if (resultado >= 30 && resultado <= 34.9) {
            return classificacao = 'Obesidade de Classe 1'
        }
        else if (resultado >= 35 && resultado <= 39.9) {
            return classificacao = 'Obesidade de Classe 2'
        }
        else if (resultado >= 40) {
            return classificacao = 'Obesidade de Classe 3'
        }
    }
    else if (idade > 64) {
        if (resultado <= 22) {
            return classificacao = 'Baixo Peso'
        }
        else if (resultado > 22 && resultado < 27) {
            return classificacao = 'Adequado ou eutrófico'
        }
        else if (resultado >= 27) {
            return classificacao = 'Sobrepeso'
        }
    }
}

export function pesoIdeal(idade) {
    if (idade < 65) {
        return faixa = 'IMC de 18.5 a 24.9'
    }
    else {
        return faixa = 'IMC maior que 22 e menor que 27'
    }
}

export function verificarFaixaEtaria(valor) {
    if (valor < 65) {
        return faixaEtaria = 'Adulto'
    }
    else {
        return faixaEtaria = 'Idoso'
    }
}
