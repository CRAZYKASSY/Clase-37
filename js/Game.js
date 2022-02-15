class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
  }
  gamestate(){
    var ref = database.ref ("gameState");
    ref.on ("value",function (data){
      gameState = data.val ();
    })
  }
}
