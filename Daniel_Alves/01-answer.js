/* Crie uma função que receba um inteiro e retorne a soma de todos os números múltiplos de 3 e 5. 
A lista de todos os números abaixo de 10 múltiplos de 3 e 5 é igual a [3, 5, 6 e 9]. 
A soma desses múltiplos é igual a 23. Ex: Input = 10, Output = 23 */

function  somaMultiplos(numero) {
    let resultado = 0;
    for (let i = 0; i < numero; i++) {
        if( i % 5 == 0 || i % 3 == 0){
            resultado += i;
        }
    }
    return resultado;
}

console.log(somaMultiplos(10));