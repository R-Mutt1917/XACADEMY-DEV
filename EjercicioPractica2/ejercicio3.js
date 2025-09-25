//Dado el siguiente objeto 
let carrito = {
    total: 10,
    productos: [
        {
            nombre: 'leche',
            precio: 2,
            unidades: 5
        }
    ]
}
//completar la siguiente función para que agregue un nuevo producto al carrito y actualice su total
function agregarProducto(nombre, precio, unidades) {
    // Completar aca...
    // Crear un nuevo objeto producto
    const nuevoProducto = {
        nombre: nombre,
        precio: precio,
        unidades: unidades
    };
    // Agregar el nuevo producto al array de productos del carrito
    carrito.productos.push(nuevoProducto);
    // Actualizar el total sumado el precio * unidades del nuevo producto
    carrito.total += precio * unidades;
}
// Prueba de la función
agregarProducto('pan', 1.5, 2);
agregarProducto('huevos', 3, 1);
agregarProducto('manzanas', 0.5, 4);
agregarProducto('arroz', 2, 3);

console.log(carrito);

