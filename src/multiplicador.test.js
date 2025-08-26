// multiplicador.test.js

import multiplicador from "./multiplicador.js";

describe('multiplicador', () => {
  it('debe multiplicar dos números positivos', () => {
    expect(multiplicador(2, 3)).toBe(6);
  });

  it('debe multiplicar un número positivo y uno negativo', () => {
    expect(multiplicador(-2, 3)).toBe(-6);
  });

  it('debe multiplicar dos números negativos', () => {
    expect(multiplicador(-2, -3)).toBe(6);
  });

  it('debe multiplicar por cero', () => {
    expect(multiplicador(0, 5)).toBe(0);
    expect(multiplicador(5, 0)).toBe(0);
  });
});
