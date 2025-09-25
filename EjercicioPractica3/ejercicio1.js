//Dado el siguiente objeto
let carrito = {
    precioTotal: 0,
    productos: [],
    categorias: []
};
//y el siguiente listado de productos que existen en el supermercado (con sus respectivas precios y categorias)
const productosDelSuper = [
    { nombre: "Queso", precio: 10, categoria: 'lacteos' },
    { nombre: "Gaseosa", precio: 5, categoria: 'bebidas' },
    { nombre: "Cerveza", precio: 20, categoria: 'bebidas' },
    { nombre: "Arroz", precio: 7, categoria: 'alimentos' },
    { nombre: "Fideos", precio: 5, categoria: 'alimentos' },
    { nombre: "Lavandina", precio: 9, categoria: 'limpieza' },
    { nombre: "Shampoo", precio: 3, categoria: 'higiene' },
    { nombre: "Jabon", precio: 4, categoria: 'higiene' },
]
/*Escribir una funcion agregarProducto teniendo en cuenta que:
- El producto agregado deberá incluir la categoria y el precio sacados del listado "productosDelSuper".
- Al agregar un producto, validar que sea un producto vendido por el supermecado
- Si agrego un producto que ya existe en el carrito, en lugar de agregarlo deberia incrementar la cantidad del existente
- Se debe actualizar el precioTotal del carrito, teniendo en cuenta el precio y cantidad de unidades del producto
Ejemplo de la funcion esperada. */

function agregarProducto(nombre, unidades) {
    // Buscar el producto en el listado del supermercado
    const productoEnSuper = productosDelSuper.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    if (!productoEnSuper) {
        throw new Error('Producto no disponible en el supermercado');
    }
    // Buscar el producto en el carrito
    const productoEnCarrito = carrito.productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    if (productoEnCarrito) {
        // Si el producto ya existe en el carrito, incrementar las unidades
        productoEnCarrito.unidades += unidades;
        carrito.precioTotal += productoEnSuper.precio * unidades;
    } else {
        // Si el producto no existe en el carrito, agregarlo
       const nuevoProducto = {
            nombre: productoEnSuper.nombre,
            precio: productoEnSuper.precio,
            unidades: unidades
        };
        carrito.productos.push(nuevoProducto);
        carrito.precioTotal += productoEnSuper.precio * unidades;
        // Agregar la categoria si no existe ya en el carrito
        if (!carrito.categorias.includes(productoEnSuper.categoria)) {
            carrito.categorias.push(productoEnSuper.categoria);
        }
    }
}
// Función para eliminar un producto del carrito
function eliminarProducto(nombre) {
    // Buscar el índice del producto en el carrito
    const index = carrito.productos.findIndex(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    if (index === -1) {
        throw new Error('El producto no existe en el carrito');
    }
    // Restar el precio correspondiente al precioTotal
    const producto = carrito.productos[index];
    carrito.precioTotal -= producto.precio * producto.unidades;
    // Eliminar el producto del carrito
    carrito.productos.splice(index, 1);
    // Actualizar las categorías (eliminar si ya no hay productos de esa categoría)
    const categoria = productosDelSuper.find(p => p.nombre.toLowerCase() === nombre.toLowerCase()).categoria;
    const sigueEnCarrito = carrito.productos.some(p => productosDelSuper.find(ps => ps.nombre === p.nombre).categoria === categoria);
    if (!sigueEnCarrito) {
        carrito.categorias = carrito.categorias.filter(cat => cat !== categoria);
    }
}

// Función que devuelve un listado con todas las categorías (sin repeticiones) de los productos del carrito
function obtenerCategoriasCarrito() {
    const categorias = carrito.productos.map(producto => {
        const prodSuper = productosDelSuper.find(p => p.nombre === producto.nombre);
        return prodSuper ? prodSuper.categoria : null;
    }).filter(Boolean);
    // Eliminar duplicados
    return [...new Set(categorias)];
}