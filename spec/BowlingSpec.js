describe ('Bowling',function(){
  var player;
  beforeEach(function(){
    player = new Player();
    game = new Game();
  });

  it('starts the game',function(){
    expect(player.startGame()).toEqual(game)
  })
});
