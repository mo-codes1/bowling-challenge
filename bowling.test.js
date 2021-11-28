const Game = require('./bowling');
let game ;
beforeEach(() => {
  game = new Game();
});

it('should return a gutter game', () => {
  rollIndex(20, 0);
  expect(game.score).toEqual(0);
});

it("should return a game of all ones", () => {
  rollIndex(20, 1);
  expect(game.score).toEqual(20);
});

function rollIndex(rolls, pins){
  for(let i=0;i<rolls;i++){
    game.roll(pins);
  }
}