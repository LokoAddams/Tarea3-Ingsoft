class TennisGame {
  constructor() {
    this.p1 = 0;
    this.p2 = 0;
    this.points = ['Love', '15', '30', '40'];
  }

  player1Scores() {
    this.p1++;
  }

  player2Scores() {
    this.p2++;
  }

  score() {
    // Deuce
    if (this.p1 >= 3 && this.p2 >= 3 && this.p1 === this.p2) {
      return 'Deuce';
    }

    // Advantage (desde Deuce, diferencia de 1)
    if (this.p1 >= 3 && this.p2 >= 3 && Math.abs(this.p1 - this.p2) === 1) {
      return this.p1 > this.p2 ? 'Advantage Player 1' : 'Advantage Player 2';
    }

    // Marcador normal
    return `${this.points[this.p1] ?? '40'}-${this.points[this.p2] ?? '40'}`;
  }
}

module.exports = TennisGame;
