//Dados 2 array, devolver un array con todos los elementos que coinciden entre ellos
/* 
Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, false, true, 3, true]
Resultado: [3, true]
*/

const { resolve } = require("dns");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function encontrarElementosComunes(array1, array2) {
    const set2 = new Set(array2);
    return array1.filter(elemento => set2.has(elemento));
}

function preguntarElemento(numeroArray, indice){
    return new Promise((resolve) => {
        rl.question("ingrese el elemento ${indice + 1} del array ${numeroArray}: ",(elemento) => {
            const valor = isNaN(elemento) ? elemento :
                elemento.toLowerCase() === "true" ? true :
                elemento.toLowerCase() === "false" ? false :
                Number(elemento);
            resolve(valor);
        });
    });
}

function todosSonNueve(array){
    return array.length === 5 && array.every(elemento => elemento === 9);
}

async function llenarArrays() {
    let array1 = [];
    let array2 = [];

    do {
        array1 = [];
        array2 = [];

        console.log('\nIngrese los elementos del primer array:');
        for (let i = 0; i < 5; i++) {
            array1.push(await preguntarElemento(1, i));
        }

        console.log('\nIngrese los elementos del segundo array:');
        for (let i = 0; i < 5; i++) {
            array2.push(await preguntarElemento(2, i));
        }

        console.log('\nArray 1:', array1);
        console.log('Array 2:', array2);
        console.log('Elementos comunes:', encontrarElementosComunes(array1, array2));

        if (!todosSonNueve(array1) && !todosSonNueve(array2)) {
            console.log('\nNingún array tiene todos los elementos igual a 9. Continuamos...\n');
        }

    } while (!todosSonNueve(array1) && !todosSonNueve(array2));

    console.log('\n¡Programa terminado! Uno de los arrays tiene todos los elementos igual a 9');
    rl.close();
}

llenarArrays();