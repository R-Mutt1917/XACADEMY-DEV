//Escribir una función que reciba un array de strings y devuelva un string concatenando todos sus valores
 
/*Ejemplo
Dado['hola', 'chau']
Retornar: 'holachau'
*/
function concatenarStrings(arrayStrings) {
    // Usando el método join para concatenar los strings del array
    return arrayStrings.join('');
}
// Ejemplo de uso
const ejemplo1 = ['hola', 'chau'];
const ejemplo2 = ['Hola', ' ', 'mundo', '!'];
const ejemplo3 = ['a', 'b', 'c', 'd'];
console.log(concatenarStrings(ejemplo1)); // Output: 'holachau'
console.log(concatenarStrings(ejemplo2)); // Output: 'hello world'
console.log(concatenarStrings(ejemplo3)); // Output: 'abcd'