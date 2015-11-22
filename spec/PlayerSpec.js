describe ('Player',function(){
  var player;
  beforeEach(function(){
    player = new Player();
    game = new Game();
  });

  it('starts the game',function(){
    expect(player.startGame()).toEqual(game)
  })

  it("the player can see the score",function(){
    expect(player.score()).toEqual(0)
  });

  it('when the user throws the ball and does 3 strike score = 30',function(){
    player.throwBall(10)
    expect(player.score()).toEqual(30)
  })

});