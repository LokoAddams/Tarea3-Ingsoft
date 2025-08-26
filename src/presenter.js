import sumar from "./sumador";
import multiplicador from "./multiplicador";
import { saludar } from "./Saludador/saludador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  div.innerHTML = "<p>Resultado suma: " + sumar(firstNumber, secondNumber) + "</p>";
});

// Multiplicador
const firstMul = document.querySelector("#primer-numero-mul");
const secondMul = document.querySelector("#segundo-numero-mul");
const formMul = document.querySelector("#multiplicar-form");

formMul.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(firstMul.value);
  const secondNumber = Number.parseInt(secondMul.value);
  div.innerHTML = "<p>Resultado multiplicación: " + multiplicador(firstNumber, secondNumber) + "</p>";
});

// Saludador
const nombreInput = document.querySelector("#nombre-usuario");
const generoSelect = document.querySelector("#genero-usuario");
const saludarButton = document.querySelector("#saludar-button");
const saludoDiv = document.querySelector("#saludo-div");

saludarButton.addEventListener("click", () => {
  const nombre = nombreInput.value;
  const genero = generoSelect.value;
  saludoDiv.innerHTML = `<p>${saludar({ name: nombre, gender: genero })}</p>`;
});
