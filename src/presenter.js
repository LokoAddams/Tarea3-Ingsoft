import sumar from "./sumador";
import multiplicador from "./multiplicador";
import { saludar } from "./Saludador/saludador";
import TennisGame from "./TennisScore/tennisGame";

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
const edadInput = document.querySelector("#edad-usuario");
const generoSelect = document.querySelector("#genero-usuario");
const idiomaSelect = document.querySelector("#idioma");
const saludarButton = document.querySelector("#saludar-button");
const saludoDiv = document.querySelector("#saludo-div");

saludarButton.addEventListener("click", () => {
  const nombre = nombreInput.value;
  const edad = parseInt(edadInput.value, 10);
  const genero = generoSelect.value;
  const idioma = idiomaSelect.value;
  saludoDiv.innerHTML = `<p>${saludar({ name: nombre, age: edad, gender: genero, lang: idioma })}</p>`;
});

// Tennis Score
const tennisScoreDiv = document.querySelector("#tennis-score");
const player1Button = document.querySelector("#player1-button");
const player2Button = document.querySelector("#player2-button");

const tennisGame = new TennisGame();

player1Button.addEventListener("click", () => {
  tennisGame.player1Scores();
  tennisScoreDiv.textContent = tennisGame.score();
});

player2Button.addEventListener("click", () => {
  tennisGame.player2Scores();
  tennisScoreDiv.textContent = tennisGame.score();
});

tennisScoreDiv.textContent = tennisGame.score();
