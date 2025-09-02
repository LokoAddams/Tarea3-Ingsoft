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

describe('Tennis Score - Advantage', () => {
  test('desde Deuce, si anota el Jugador 1 → Advantage Player 1', () => {
    const game = new TennisGame();
    // llegar a Deuce (40-40)
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();

    // punto de Player 1 desde Deuce
    game.player1Scores();

    expect(game.score()).toBe('Advantage Player 1');
  });
});
describe('Tennis Score - Game for Player 1', () => {
  test('si Player 1 llega a 4 puntos con diferencia ≥ 2 (sin Deuce), es Game for Player 1', () => {
    const game = new TennisGame();
    game.player1Scores(); // 15- Love
    game.player1Scores(); // 30- Love
    game.player1Scores(); // 40- Love
    game.player1Scores(); // Game
    expect(game.score()).toBe('Game for Player 1');
  });

  test('desde Deuce → Advantage P1 → punto para P1 => Game for Player 1', () => {
    const game = new TennisGame();
    // Deuce
    game.player1Scores(); game.player1Scores(); game.player1Scores(); // 40
    game.player2Scores(); game.player2Scores(); game.player2Scores(); // 40

    game.player1Scores(); // Advantage P1
    game.player1Scores(); // Game P1
    expect(game.score()).toBe('Game for Player 1');
  });
});
