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

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
      // Crear un nuevo elemento <li> para cada amigo
      const li = document.createElement("li");
      li.textContent = amigos[i];
      
      // Agregar el elemento <li> a la lista
      lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
      alert("No hay amigos disponibles para sortear.");
      return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado actualizando el contenido del elemento con id "resultado"
    document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + amigoSorteado;
  }
  