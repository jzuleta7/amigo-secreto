// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Actualizar la lista visual de amigos
  const listaAmigos = document.getElementById('listaAmigos');
  const nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = nombre;
  listaAmigos.appendChild(nuevoElemento);

  // Limpiar el campo de entrada
  input.value = '';
}