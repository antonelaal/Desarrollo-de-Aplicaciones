/*// PARTE 1

function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

console.log(calcularSubtotal(120, 3));
console.log(calcularSubtotal(80, 5));


// PARTE 3

function calcularTotal(
    precio,
    cantidad = 1,
    descuento = 0
) {
    const subtotal = precio * cantidad;
    return subtotal - subtotal * descuento / 100;
}

console.log(calcularTotal(100));
console.log(calcularTotal(100, 3));
console.log(calcularTotal(100, 3, 10));


// PARTE 4

function sumarImportes(...importes) {
    return importes.reduce(
        (total, importe) => total + importe,
        0
    );
}

console.log(sumarImportes(100, 50));
console.log(sumarImportes(100, 50, 80, 25));


// PARTE 5

const aplicarDescuento = precio => precio * 0.90;

const aplicarIGV = precio => precio * 1.18;

function procesarPrecio(precio, operacion) {
    return operacion(precio);
}

console.log(
    procesarPrecio(100, aplicarDescuento)
);

console.log(
    procesarPrecio(100, aplicarIGV)
);
*/
// PARTE 6

function calcularVenta(precio, cantidad, descuento = 0) {
    const subtotal = precio * cantidad;
    const montoDescuento = subtotal * descuento / 100;
    const total = subtotal - montoDescuento;

    return total;
}

console.log("Venta 1:", calcularVenta(120, 3));
console.log("Venta 2:", calcularVenta(80, 5, 10));
console.log("Venta 3:", calcularVenta(200, 2, 15));
