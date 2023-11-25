function Estudiante(nombre, edad, curso) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
}
Estudiante.prototype.mostrarinfo = function () {
    return `${this.nombre}, ${this.edad} años, ${this.curso}`;
}

function agregar() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const curso = document.getElementById("curso").value;

    const nuevoestudiante = new Estudiante (nombre, edad, curso)

    const lista = document.getElementById("lista")
    const usuario = document.createElement('li');
    usuario.textContent = nuevoestudiante.mostrarinfo();
    lista.appendChild(usuario);
}