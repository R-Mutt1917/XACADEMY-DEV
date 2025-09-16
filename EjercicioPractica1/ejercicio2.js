/*Escribir un programa que, dada una nota (número), imprima en consola la calificación según la nota:
  0-3: Muy deficiente
  3-5: Insuficiente
  5-6: Suficiente
  6-7: Bien
  7-9: Notable
  9-10: Sobresaliente*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); 
function obtenerCalificacion(nota) {
  if (nota >= 0 && nota <= 3) return "Muy deficiente";
    if (nota > 3 && nota <= 5) return "Insuficiente";
    if (nota > 5 && nota <= 6) return "Suficiente";
    if (nota > 6 && nota <= 7) return "Bien";
    if (nota > 7 && nota <= 9) return "Notable";
    if (nota > 9 && nota <= 10) return "Sobresaliente";
    return "Nota no válida";
}
function pedirNota() {
    rl.question('Ingrese una nota (99 para terminar): ', (entrada) => {
        // Convertir la entrada a número
        const nota = parseFloat(entrada);
        // Verificar si es 99 para terminar
        if (nota === 99) {
            console.log('Programa terminado');
            rl.close();
            return;
        }
        // Validar que sea un número válido
        if (isNaN(nota)) {
            console.log('Por favor ingrese un número válido');
            pedirNota();
            return;
        }
        // Validar que esté en el rango correcto
        if (nota < 0 || nota > 10) {
            console.log('La nota debe estar entre 0 y 10');
            pedirNota();
            return;
        }
        // Mostrar la calificación
        console.log(`Calificación: ${obtenerCalificacion(nota)}`);       
        // Pedir la siguiente nota
        pedirNota();
    });
}
// Iniciar el programa
pedirNota();
