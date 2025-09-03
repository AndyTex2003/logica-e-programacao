const { somarDoisNumeros } = require('../src/calculadora'); // comando para importar a função somarDoisNumeros
const { expect } = require('chai');

describe('Testes da Função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function() {
        // coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5, 3);
        
        // compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function() {
        // Coleta resultado da Função
        const resultadoDaSoma = somarDoisNumeros(50, -15);

        // Compara resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);
    });

    it('A função deve ser capaz de somar dois números zerados', function() {
        // Coleta resultado da Função
        const resultadoDaSoma = somarDoisNumeros(0, 0);

        // Compara resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(0);
    })

    it('A função deve ser capaz de somar dois números negativos', function() {
        // Coleta resultado da Função
        const resultadoDaSoma = somarDoisNumeros(-75, -45);

        // Coleta resultado da Função
        expect(resultadoDaSoma).to.equal(-120);

    })
});
