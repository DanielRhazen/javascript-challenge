/*Crie uma função que receba uma lista de números e strings e retorne uma nova lista apenas com os números.
Ex: Input = [1, 2, 'a', 'b'], Output = [1, 2]*/

arrayTeste = [1, 2, 'a', 'b'];

function retornaNumeros(listaMista){
    let arrayNumeros = [];
    let j = 0;
    for(let i = 0; i < listaMista.length; i++){
        if(!isNaN(listaMista[i])){
            arrayNumeros[j] = listaMista[i];
            j++;
        }
    }

    return arrayNumeros;
}

console.log(retornaNumeros(arrayTeste));