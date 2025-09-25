//Escribir un programa que, dada una edad, imprima en consola si la persona es mayor de 18 años y puede conducir.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarEdadConducir(edad) {
    if (isNaN(edad)){
        return "Por favor, ingrese un número válido para la edad.";
    }
    if (edad >= 18) {
        return "Eres mayor de 18 años y puedes conducir.";
    } else {
        return "Eres menor de 18 años y no puedes conducir.";
    }
}
function pedirEdad() {
    rl.question('Por favor ingrese su edad (99 para terminar): ', (entrada) => {
        const edad = parseInt(entrada);
        // Verificar si es 99 para terminar
        if (edad === 99) {
            console.log('Programa terminado');
            rl.close();
            return;
        }
        console.log(verificarEdadConducir(edad));
        // Continuar pidiendo edad
        pedirEdad();
    });
}
// Iniciar el programa
pedirEdad();