/*Realizar un script que escriba una pirámide del 1 al 6 de la siguiente forma:
  1
  22
  333
  4444
  55555
  666666
  */
 function imprimirPiramide() {
    // Iterar del 1 al 6
    for (let i = 1; i <= 6; i++) {
        // Crear una cadena con el número repetido i veces
        let linea = String(i).repeat(i);
        // Imprimir la línea con un salto de línea adicional
        console.log(linea + '\n');
    }
}
// Ejecutar la función 
imprimirPiramide();
