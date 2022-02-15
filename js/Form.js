class Form {
  constructor() {
 this.input = createInput ("").attribute ("placeholder",("Ingresa tu nombre"));
 this.playbutton = createButton ("Play");
 this.titleImage = createImg ("assets/title.png","Titulo");
 this.greeting = createElement ("h2");
  }

  setElementsPosition() {
  this.titleImage.position (120,50);
  this.input.position (width/2-125,height/2-80);
  this.playbutton.position (width/2-110,height/2-20);
  this.greeting.position (width/2-350, height/2-40);
  }

  setElementsStyle() {
  this.titleImage.class ("gameTitle");
  this.input.class ("customInput");
  this.playbutton.class("customButton");
  this.greeting.class ("greeting");
  }

  hide() {
  this.input.hide ();
  this.playbutton.hide ();
  this.greeting.hide ();
  }
  mousePressed (){
    this.playbutton.mousePressed (()=>{
      this.input.hide ();
      this.playbutton.hide ();
      var message = `Hola  ${this.input.value ()}
      </br> Espera que otro jugador se una...`;
      this.greeting.html (message);

      playerCount +=1;
      player.name = this.input.value ();
      player.index = playerCount;
      player.updateCount (playerCount);
      player.addPlayer ();
    })
  }
  display() {
  this.setElementsStyle ();
  this.setElementsPosition ();
  this.mousePressed ();
  }
}
