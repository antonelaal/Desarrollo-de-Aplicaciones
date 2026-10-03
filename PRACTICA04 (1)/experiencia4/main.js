function calcularVenta(precio, cantidad) {
    precio = Number(precio);
    cantidad = Number(cantidad);

    if (
        Number.isNaN(precio) ||
        Number.isNaN(cantidad)
    ) {
        throw new Error(
            "Precio y cantidad deben ser numéricos"
        );
    }

    if (precio <= 0 || cantidad <= 0) {
        throw new Error(
            "Los valores deben ser mayores que cero"
        );
    }

    return precio * cantidad;
}