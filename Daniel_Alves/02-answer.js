/* Crie uma função que receba um array de letras do alfabeto consecutivas e retorne a letra que está faltando.
Ex: Input = ['a', 'b', 'c', 'e', 'f', 'g'], Output = 'd'*/

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const arrayExemplo = ['a', 'b', 'c', 'e', 'f', 'g'];

function verificaLetra(arrayLetras){
    let letraFaltando;
    for(let i = 0; i < arrayLetras.length; i++){
        if(arrayLetras[i] != alfabeto[i]){
            letraFaltando = alfabeto[i];
            break;
        }
    }
    return letraFaltando;
}

console.log(verificaLetra(arrayExemplo));