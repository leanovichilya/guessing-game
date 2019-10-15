class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    const result = Math.round((this.max + this.min) / 2);
    return result;
  }

  lower() {
    this.max = this.guess();
  }

  greater() {
    this.min = this.guess();
  }
}

module.exports = GuessingGame;
