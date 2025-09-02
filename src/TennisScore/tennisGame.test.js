const TennisGame = require('../src/TennisScore/tennisGame');

describe('Tennis Score - Inicio del game', () => {
  test('al iniciar, el tablero muestra Love-Love', () => {
    const game = new TennisGame();
    expect(game.score()).toBe('Love-Love');
  });
});
