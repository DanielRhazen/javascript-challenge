/* Crie uma função que receba uma string e a retorne em pares de dois caracteres. Se a quantidade de caracteres for impar, 
retornar o caracter _ como par. Ex: Input = 'abcde', Output = ['ab', 'cd', 'e_'] Ex: Input = 'abcd', Output = ['ab', 'cd'] */

const exemploInput1 = 'abcde';

const exemploInput2 = 'abcd';

function retornaPares(arrayStrings) {
    
    var arrayResultado = [];

    if(exemploInput.length % 2 != 0){
        arrayStrings += "_";
    }

    for(let i = 0; i < exemploInput.length; i+=2){
        arrayResultado.push(arrayStrings.slice(i, i + 2));
    }

    return arrayResultado;
}

console.log(retornaPares(exemploInput1));