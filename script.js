let usuarios = [];

function agregarUsuario() {
  const nombre = document.getElementById("nombre").value;
  if (nombre.trim() !== "") {
    usuarios.push(nombre);
    mostrarUsuarios();
    document.getElementById("nombre").value = "";
  }
}

function mostrarUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";
  usuarios.forEach((usuario, index) => {
    lista.innerHTML += `<li>${usuario} <button onclick="eliminarUsuario(${index})">Eliminar</button></li>`;
  });
}

function eliminarUsuario(index) {
  usuarios.splice(index, 1);
  mostrarUsuarios();
}
