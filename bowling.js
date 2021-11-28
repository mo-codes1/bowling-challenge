class Game {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  get score() {
    let score = 0
    let rollnumber = 0

    for(let framenumber=0;framenumber<10;framenumber++){

      let framescore = this.rolls[rollnumber] + this.rolls[rollnumber+1]
      
      score += framescore;
      rollnumber+=2
    }
    return score;
  }
}

module.exports = Game;