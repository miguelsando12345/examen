document
  .getElementById("Formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) {
      alert(
        "¡Bienvenido, " +
          nombre +
          " Eres mayor de edad, asi que puedes jugar Mortal kombat."
      );
    } else {
      alert(
        "¡Sal de aqui, " +
          nombre +
          " Eres menor de edad, no puedes ver peliculas para adultos "
      );
    }
  });
