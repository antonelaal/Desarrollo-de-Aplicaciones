function registrarParticipante(
    nombre,
    edad,
    correo,
    tipo = "general"
) {
    if (nombre.trim() === "") {
        throw new Error(
            "El nombre no puede estar vacío"
        );
    }
    if (Number.isNaN(edad) || edad < 18) {
        throw new Error(
            "La edad debe ser mayor o igual a 18"
        );
    }
    if (correo.trim() === "") {
        throw new Error(
            "El correo no puede estar vacío"
        );
    }
    if (tipo !== "general" && tipo !== "estudiante") {
        throw new Error(
            "Tipo inválido"
        );
    }
    let costo = tipo === "general" ? 50 : 30;
    return { nombre, edad, correo, tipo, costo };
}
//TRYCATCH
boton.addEventListener("click", () => {
    try {
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const correo = document.getElementById("correo").value;
        const tipo = document.getElementById("tipo").value;
        const nuevoParticipante = registrarParticipante(nombre, edad, correo, tipo);
        participantes.push(nuevoParticipante);
        document.getElementById("resultado").innerHTML =
            `
Nombre: ${nuevoParticipante.nombre}<br>
Edad: ${nuevoParticipante.edad}<br>
Correo: ${nuevoParticipante.correo}<br>
Tipo: ${nuevoParticipante.tipo}<br>
Costo: S/ ${nuevoParticipante.costo}
`;
        const estudiantes = participantes.filter(
            participante =>
                participante.tipo === "estudiante"
        );
        console.log(
            "Estudiantes:",
            estudiantes
        );
        const nombres = participantes.map(
            participante =>
                participante.nombre
        );
        console.log("Nombres:", nombres);
        const total = participantes.reduce(
            (acumulador, participante) =>
                acumulador + participante.costo,
            0
        );
        console.log(
            "Total recaudado:",
            total
        );
        const encontrado = participantes.find(
            participante =>
                participante.correo === correo
        );
        console.log(
            "Participante encontrado:",
            encontrado
        );
    }
    catch (error) {
        document.getElementById("resultado").innerHTML =
            error.message;
        console.error(error.message);
    }
}); 