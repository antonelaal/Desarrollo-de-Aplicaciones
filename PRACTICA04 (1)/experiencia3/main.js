const productos = [
    {
        id: 1,
        nombre: "Teclado",
        precio: 120,
        stock: 8
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 70,
        stock: 15
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 850,
        stock: 4
    },
    {
        id: 4,
        nombre: "Webcam",
        precio: 160,
        stock: 0
    }
];

console.log(productos.length);

console.log(typeof productos[0]);

console.log(productos[2].precio);

productos.forEach(producto => {
    console.log(
        producto.nombre,
        producto.precio,
        producto.stock
    );
});

productos.forEach(producto => {
    console.log(
        `${producto.nombre} | S/ ${producto.precio} | Stock: ${producto.stock}`
    );
});

//parte4

const nombres = productos.map(
    producto => producto.nombre
);

console.log(nombres);


const preciosIncrementados = productos.map(
    producto => producto.precio * 1.10
);

console.log(preciosIncrementados);

//part5
const bajoStock = productos.filter(
    producto => producto.stock < 10
);

console.log(bajoStock);

const productosDisponibles = productos.filter(
    producto => producto.stock > 0
);

console.log(productosDisponibles);

// parte6

const encontrado = productos.find(
    producto => producto.id === 3
);

console.log(encontrado);

// Buscar un ID que no existe
const noEncontrado = productos.find(
    producto => producto.id === 15
);

console.log(noEncontrado);

// parte 7

const totalInventario = productos.reduce(
    (total, producto) =>
        total + producto.precio * producto.stock,
    0
);

console.log(totalInventario);

// parte08

productos.push(
    {
        id: 5,
        nombre: "Audífonos",
        precio: 200,
        stock: 6
    },
    {
        id: 6,
        nombre: "Parlante",
        precio: 180,
        stock: 3
    }
);

//precio mayor a S/ 150
const productosCaros = productos.filter(
    producto => producto.precio > 150
);

console.log(productosCaros);

//Nombres de todos los productos
const nombresTodos = productos.map(
    producto => producto.nombre
);

console.log(nombresTodos);

//producto con un ID
const productoElegido = productos.find(
    producto => producto.id === 5
);

console.log(productoElegido);

//Valor total del inventario ahora
const totalActualizado = productos.reduce(
    (total, producto) =>
        total + producto.precio * producto.stock,
    0
);

console.log(totalActualizado);
