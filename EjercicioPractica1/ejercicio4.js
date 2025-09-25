/*
Realizar un script que escriba una pirámide del 1 al 6 de la siguiente forma:
  1
  12
  123
  1234
  12345
  123456
*/
function imprimirPiramide() {
  // Iterar del 1 al 6
  for (let i = 1; i <= 6; i++) {
    let linea = '';
    // Construir la línea con números secuenciales
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    // Imprimir la línea con un salto de línea adicional
    console.log(linea + '\n');
  }     
}

// Ejecutar la función
imprimirPiramide(); 