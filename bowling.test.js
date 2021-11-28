const Game = require('./bowling');
let game ;
beforeEach(() => {
  game = new Game();
});

it('should return a gutter game', () => {
  expect(game.score).toEqual(0);

});