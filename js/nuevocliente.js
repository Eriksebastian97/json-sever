import {mostrarAlerta} from "./funciones.js"
import {nuevoCliente} from "./API.js"
(function () {
  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    // console.log(Object.values(cliente).every((input) => input !== ""));
   
   if(validar(cliente)){
    //mostrar mensajes
    mostrarAlerta("todos los campos son obligatorios")
    return
   }
  nuevoCliente(cliente)

  }

   function validar(obj){
    return !Object.values(obj).every((input) => input !== "")
   }

})();
