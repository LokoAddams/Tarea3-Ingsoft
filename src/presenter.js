import sumar from "./sumador";
import multiplicador from "./multiplicador";

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
