// src/saludador.test.js
import { saludar } from "./saludador";

test("saludo básico en español", () => {
  expect(saludar()).toBe("¡Hola!");
});
