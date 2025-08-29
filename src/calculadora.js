function somarDoisNumeros(valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2){
    // 1. Soma todos os valores
    const resultadoSomaDoisValores = somarDoisNumeros(valor1, valor2);
    
    // 2. Divide pela quantidade de números passados
    const resultadoDaMediaDeDoisValores = resultadoSomaDoisValores / 2;

    // 3. Retornar o resultado
    return resultadoDaMediaDeDoisValores;
}

// comando para exportar a função somarDoisNumeros para o arquivo calculadora.test.js
module.exports = { 
    somarDoisNumeros
}
