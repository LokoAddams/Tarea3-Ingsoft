class TennisGame {
  constructor() {
    this.p1 = 0;
    this.p2 = 0;
    this.points = ['Love', '15', '30', '40'];
  }

  player1Scores() { this.p1++; }
  player2Scores() { this.p2++; }

  score() {
    // 1) Game: alguien tiene ≥4 y diferencia ≥2
    if ((this.p1 >= 4 || this.p2 >= 4) && Math.abs(this.p1 - this.p2) >= 2) {
      return this.p1 > this.p2 ? 'Game for Player 1' : 'Game for Player 2';
    }

    // 2) Deuce: ambos ≥3 y puntaje igual
    if (this.p1 >= 3 && this.p2 >= 3 && this.p1 === this.p2) {
      return 'Deuce';
    }

    // 3) Advantage: ambos ≥3 y diferencia de 1
    if (this.p1 >= 3 && this.p2 >= 3 && Math.abs(this.p1 - this.p2) === 1) {
      return this.p1 > this.p2 ? 'Advantage Player 1' : 'Advantage Player 2';
    }

    // 4) Marcador normal
    const left = this.points[this.p1] ?? '40';
    const right = this.points[this.p2] ?? '40';
    return `${left}-${right}`;
  }
}

module.exports = TennisGame;
