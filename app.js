let nombres = [];

  // EL usurio pude ingresar nombres presionando Enter
  document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Verificar si la tecla presionada es Enter
      agregarAmigo();
    }
  });

  // Función para agregar nombres
  function agregarAmigo() { 
    let input = document.getElementById('amigo'); 
    let nombre = input.value.trim(); 

    if (nombre === "") { // Validar que el nombre no esté vacío
      alert("Por favor, ingresar un nombre"); 
      return;
    }

    nombres.push(nombre); // Si el nombre es válido, lo agregamos al array "nombres"
    mostrarNombres(); 
    input.value = ""; 
    input.focus(); 
  }

  // Función que muestra los nombres en la lista
  function mostrarNombres() { 
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; 

    nombres.forEach(nombre => {
      let li = document.createElement('li'); // Crear un nuevo elemento <li> para la lista
      li.textContent = nombre; 
      lista.appendChild(li); 
    });
  }
  // Funcion para sortear un nombre aleatorio de la lista
  function sortearAmigo() {
    if (nombres.length === 0) {
      alert("Por favor, ingresa al menos dos nombres para iniciar el sorteo");
      return
    }
    let indice = Math.floor(Math.random() * nombres.length);
    let elegido = nombres[indice];

    document.getElementById("listaAmigos").textContent = `Felicidades ${elegido} has ganado!`;
  }
