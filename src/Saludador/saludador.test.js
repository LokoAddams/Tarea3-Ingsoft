import { saludar } from "./saludador";
test("saluda con nombre", () => {
  expect(saludar({ name: "Ana" })).toBe("¡Hola, Ana!");
});
