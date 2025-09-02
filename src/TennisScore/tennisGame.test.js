const TennisGame = require('./tennisGame.js');

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
describe('Tennis Score - Deuce', () => {
  test('cuando ambos jugadores llegan a 40, el marcador es Deuce', () => {
    const game = new TennisGame();

    // Jugador 1: 3 puntos → 40
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();

    // Jugador 2: 3 puntos → 40
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();

    expect(game.score()).toBe('Deuce');
  });
});

