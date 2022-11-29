import { formulario, inputs, h1, d } from "./variables.js";

export function animaciones() {
  formulario.style.opacity = 1;
  h1.style.opacity = 1;
  formulario.classList.add("animate__animated", "animate__fadeInRight");

  inputs.forEach((input) => {
    setTimeout(() => {
      input.style.opacity = 1;
      input.classList.add("animate__animated", "animate__rollIn");
    }, 500);
  });

  //h1
  setTimeout(() => {
    h1.classList.add(
      "opacity-1",
      "animate__animated",
      "animate__fadeInTopLeft"
    );
  }, 500);
}

export function mensaje(mensaje, referencia) {
  limpiarAlerta(referencia);

  const divMensaje = d.createElement("p");
  divMensaje.innerHTML = mensaje;
  divMensaje.classList.add("alerta");
  referencia.appendChild(divMensaje);
}

export function limpiarAlerta(referencia) {
  const alerta = referencia.querySelector(".alerta");
  if (alerta) {
    alerta.remove();
  }
}
