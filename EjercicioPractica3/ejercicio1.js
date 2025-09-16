/*Dado el siguiente objeto
let carrito = {

    precioTotal: 0,

    productos: [],

}

 

y el siguiente listado de productos que existen en el supermercado (con sus respectivas precios y categorias)

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

 

Escribir una funcion agregarProducto teniendo en cuenta que:

 

- El producto agregado deberá incluir la categoria y el precio sacados del listado "productosDelSuper".

 

- Al agregar un producto, validar que sea un producto vendido por el supermecado

 

- Si agrego un producto que ya existe en el carrito, en lugar de agregarlo 

deberia incrementar la cantidad del existente

 

- Se debe actualizar el precioTotal del carrito, teniendo en cuenta el precio 

y cantidad de unidades del producto




Ejemplo de la funcion esperada.

function agregarProducto(nombre, unidades) {}

 

Ejemplo

 

agregarProducto('Agua', 2);

 

El carrito deberia verse así

carrito = {

    precioTotal: 10,

    productos: [

        {

            nombre: 'Agua',

            precio: 5,

            unidades: 2

        }

    ],

    categorias: ['bebidas']

}

 

Si agrego otra Agua

agregarProducto('Agua', 1);

 

El carrito deberia verse así

carrito = {

    precioTotal: 15,

    productos: [

        {

            nombre: 'Agua',

            precio: 5,

            unidades: 3

        }

    ]

}

*/

/*Desarrollar la siguiente función
funcion eliminarProduct(nombre){}

 

- Teniendo en cuenta que si intentan eliminar un producto que no existe, deberá lanzar un error*/

/* Escribir una función que devuelva un listado con todas las categorias (sin repeticiones) 
de los productos del carrito  */ 