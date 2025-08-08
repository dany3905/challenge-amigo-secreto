// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*const nombres = [];

function agregarAmigo() {
  const input = document.getElementById('amigo'); // Obtiene el input por su ID
  
  if (!input.value.trim()) return alert("Por favor, escribe un nombre.");

  nombres.push(input.value.trim());
  mostrarNombres();
  input.value = "";
  input.focus();
}

function mostrarNombres() {
  document.getElementById('listaAmigos').innerHTML =
    nombres.map(n => `<li>${n}</li>`).join('');
}
*/
/*
 const nombres = [];

    function agregarAmigo() {
      const input = document.getElementById('amigo');
      const nombre = input.value.trim();

      // Validar que no esté vacío
      if (nombre !== "") {
        nombres.push(nombre); // Almacena en el array
        mostrarNombres();     // Actualiza la lista en la página
        input.value = "";     // Limpia el campo de texto
        input.focus();        // Enfoca el input para seguir escribiendo
      } else {
        alert("Por favor, escribe un nombre.");
      }
    }

    function mostrarNombres() {
      const lista = document.getElementById('listaAmigos');
      lista.innerHTML = ""; // Limpia la lista antes de actualizar

      // Recorre el array y muestra cada nombre como <li>
      nombres.forEach((nombre, index) => {
        const item = document.createElement('li');
        item.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(item);
      });
    }
    */
  const nombres = [];

  // Función para agregar nombres
  function agregarNombre() { 
    const input = document.getElementById('amigo'); // Buscar el input de texto en el documento HTML usando su ID
    const nombre = input.value.trim(); // Elimina espacios extra al principio y final usando .trim()

    if (nombre === "") { // Validar que el nombre no esté vacío
      alert("Por favor, escribe un nombre."); // Si está vacío, mostramos un mensaje y salimos de la función
      return;
    }

    nombres.push(nombre); // Si el nombre es válido, lo agregamos al array "nombres"
    mostrarNombres(); // Actualizar la lista visual
    input.value = ""; // Limpiar el input para que el usuario pueda escribir otro nombre
    input.focus(); // Colocar el cursor nuevamente en el input para escribir
  }

  // Función que muestra los nombres en la lista
  function mostrarNombres() { 
    const lista = document.getElementById('listaAmigos'); // Buscar la lista <ul> en el documento HTML usando su ID
    lista.innerHTML = ""; // Limpiar el contenido anterior de la lista

    nombres.forEach(nombre => {
      const li = document.createElement('li'); // Crear un nuevo elemento <li> para la lista
      li.textContent = nombre; // Asignar el texto del nombre al <li>
      lista.appendChild(li); // Agregar el <li> a la lista <ul> en el HTML
    });
  }

  // Agrego un listener para detectar cuando el usuario presiona Enter en el input
  const input = document.getElementById('amigo');
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      agregarNombre();
    }
  })

  function sortearAmigo() {
    if (nombres.length === 0) {
      alert("La lista esta vacia. Agrega primero los nombres");
      return
    }
    const indice = Math.floor(Math.random() * nombres.length);
    const elegido = nombres[indice];

    document.getElementById("listaAmigos").textContent = `El nombre ganador es: ${elegido}`;
  }