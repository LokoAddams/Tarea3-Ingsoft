class TennisGame {
  constructor() {
    this.p1 = 0;
    this.p2 = 0;
    this.points = ['Love', '15', '30', '40'];
  }

  player1Scores() {
    this.p1++;
  }

  score() {
    return `${this.points[this.p1]}-${this.points[this.p2]}`;
  }
}

module.exports = TennisGame;
