/* Crie uma função receba uma string com números separados e retorne o maior e o menor número.
Ex: Input = '1 2 3 4 5', Output = '5 1' */

const numerosString = '1 2 3 4 5';

function selecionaMaior(numerosString) {

    let numerosArray = numerosString.split(" ").sort();
    
    let maiorNumero = numerosArray[numerosArray.length - 1];

    let menorNumero = numerosArray[0];

    return maiorNumero + " " + menorNumero;
    
}

console.log(selecionaMaior(numerosString));