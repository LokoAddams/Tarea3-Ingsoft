const TennisGame = require('../src/TennisScore/tennisGame');

describe('Tennis Score - Inicio del game', () => {
  test('al iniciar, el tablero muestra Love-Love', () => {
    const game = new TennisGame();
    expect(game.score()).toBe('Love-Love');
  });
});

describe('Tennis Score - Jugador 1 anota', () => {
  test('cuando Jugador 1 anota una vez, el marcador es 15-Love', () => {
    const game = new TennisGame();
    game.player1Scores();
    expect(game.score()).toBe('15-Love');
  });
});

describe('Tennis Score - Jugador 2 anota', () => {
  test('cuando Jugador 2 anota una vez, el marcador es Love-15', () => {
    const game = new TennisGame();
    game.player2Scores();
    expect(game.score()).toBe('Love-15');
  });

  test('si ambos anotan una vez, el marcador es 15-15', () => {
    const game = new TennisGame();
    game.player1Scores();
    game.player2Scores();
    expect(game.score()).toBe('15-15');
  });
});

