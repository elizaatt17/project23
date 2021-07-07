const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;

 playerBase=new this.playerBase(300,random(450,height-300),180,150);
player=new this.player(285,playerBase.body.position.y-153,50,180);
computerBase=new this.computerBase(300,random(450,height-300),180,150);
computerPlayer=new this.computerPlayer(285,computerBase.body.position.y-153,50,180);

	
   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  display();
    

  

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
